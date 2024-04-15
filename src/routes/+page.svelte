<script>
	import { writable } from 'svelte/store';
	import Navbar from './Navbar.svelte';
	import { shuffle } from './cards';
	import 'animate.css';
	import { STORED_OPTIONS_VERSION } from '$lib/vars';
	import hsk1 from '$lib/json/hsk-level-1.json';
	import hsk2 from '$lib/json/hsk-level-2.json';
	import hsk3 from '$lib/json/hsk-level-3.json';
	import hsk4 from '$lib/json/hsk-level-4.json';
	import hsk5 from '$lib/json/hsk-level-5.json';
	import hsk6 from '$lib/json/hsk-level-6.json';
	import hskAll from '$lib/json/hsk.json';
	import { sameMajorVersion } from '$lib';

	let cards = writable([]);

	let storedOptions;
	try {
		let rawOptions = localStorage.getItem('options');

		storedOptions = rawOptions ? JSON.parse(rawOptions) : {};

		// fix for older instances where the version was not stored in the options
		if (JSON.stringify(storedOptions) !== '{}' && !storedOptions?.version) {
			storedOptions.version = STORED_OPTIONS_VERSION;
		}
	} catch (error) {}

	// cleanup the past 😂😂
	if (localStorage.getItem('storedOptionsVersion')) {
		localStorage.removeItem('storedOptionsVersion');
	}
	// const storedOptionsVersion = localStorage.getItem('storedOptionsVersion');

	// if (!storedOptionsVersion || storedOptionsVersion !== STORED_OPTIONS_VERSION) {
	// 	localStorage.setItem('storedOptionsVersion', STORED_OPTIONS_VERSION);
	// }

	const options = writable(
		storedOptions?.version && sameMajorVersion(storedOptions?.version, STORED_OPTIONS_VERSION)
			? storedOptions
			: {
					version: STORED_OPTIONS_VERSION,
					learnMode: false,
					enableShuffle: false,
					enableAutoplay: false,
					levels: {
						hsk1: true,
						hsk2: true,
						hsk3: true,
						hsk4: true,
						hsk5: true,
						hsk6: true
					},
					saved: [],
					state: {
						currentCard: null,
						cardsList: [],
						currentCardIndex: 0,
						showAnswer: true,
						isSavedState: false
					}
			  }
	);

	options.subscribe((value) => {
		value.isSavedState = true;
		localStorage.setItem('options', JSON.stringify(value));
	});

	const toggleShuffle = () => {
		if ($options.enableShuffle) {
			$options.state.cardsList = shuffle($options.state.cardsList);
		} else {
			$options.state.cardsList = Array.from($cards.keys());
		}
		$options.state.currentCardIndex = 0;
		$options.state.currentCard = $cards[$options.state.cardsList[0]];
	};

	const checkLevels = (resetShuffle = false) => {
		if (resetShuffle) {
			$cards = [];
		}
		if ($options.levels.hsk1) {
			$cards = [...hsk1];
		}
		if ($options.levels.hsk2) {
			$cards = [...$cards, ...hsk2];
		}
		if ($options.levels.hsk3) {
			$cards = [...$cards, ...hsk3];
		}
		if ($options.levels.hsk4) {
			$cards = [...$cards, ...hsk4];
		}
		if ($options.levels.hsk5) {
			$cards = [...$cards, ...hsk5];
		}
		if ($options.levels.hsk6) {
			$cards = [...$cards, ...hsk6];
		}

		if (resetShuffle) {
			toggleShuffle();
		}
	};
	checkLevels();

	/**
	 * @type {*}
	 */
	let interval;

	const checkAutoplay = () => {
		if ($options.enableAutoplay) {
			interval = setInterval(() => {
				if ($options.state.currentCardIndex < $options.state.cardsList.length - 1) {
					document.getElementById('flipper-next')?.click();
					setTimeout(() => {
						$options.state.showAnswer = true;
					}, 5000);
				} else {
					$options.state.currentCardIndex = 0;
					$options.state.currentCard =
						$cards[$options.state.cardsList[$options.state.currentCardIndex]];
					$options.state.showAnswer = false;
					clearInterval(interval);
					$options.enableAutoplay = false;
				}
			}, 7000);
		} else {
			$options.state.showAnswer = false;
			clearInterval(interval);
			console.log('clearing');
		}
	};

	if (
		$options.state.cardsList.length !== $cards.length ||
		($cards.length && !$options.isSavedState)
	) {
		$options.state.cardsList = Array.from($cards.keys());
		if ($options.enableShuffle) {
			$options.state.cardsList = shuffle($options.state.cardsList);
		}

		$options.state.currentCard = $cards[$options.state.cardsList[0]];
	} else {
		if ($options.enableAutoplay) {
			checkAutoplay();
		}
	}

	const mainClass = writable('');
	$: $mainClass = $options.saved.length > 0 ? 'py-20' : 'min-h-[90vh]';
</script>

<Navbar
	{options}
	{toggleShuffle}
	{checkAutoplay}
	resetCards={() => {
		$options.state.currentCardIndex = 0;
		$options.state.currentCard = $cards[$options.state.cardsList[0]];
		$options.levels = {
			hsk1: true,
			hsk2: true,
			hsk3: true,
			hsk4: true,
			hsk5: true,
			hsk6: true
		};
		checkLevels(true);
	}}
	checkLevels={() => {
		checkLevels(true);
	}}
/>
<section class={`flex items-center bg-info justify-center px-5 ${$mainClass}`}>
	<div>
		{#if $options.state.currentCard}
			<div
				id="flipper"
				class="card animate__animated w-[90vw] min-h-[20vh] max-w-md bg-base-100 shadow-xl"
			>
				<div class="card-body">
					<div class="flex justify-between">
						<h2 class="card-title">
							{$options.state.currentCard.pinyin}
						</h2>
						<div class="animate__animated animate__shakeX">
							<label class="swap swap-flip">
								<!-- this hidden checkbox controls the state -->
								<input
									type="checkbox"
									checked={$options.saved.includes($options.state.currentCard.id)}
									on:change={(e) => {
										if (
											e.currentTarget.checked &&
											!$options.saved.includes($options.state.currentCard.id)
										) {
											$options.saved.push($options.state.currentCard.id);
											$options = $options;
										} else if (
											!e.currentTarget.checked &&
											$options.saved.includes($options.state.currentCard.id)
										) {
											$options.saved.splice(
												$options.saved.indexOf($options.state.currentCard.id),
												1
											);
											$options = $options;
										}
										console.log(e.currentTarget.checked, $options.state.currentCard.id);
									}}
								/>

								<!-- on icon -->
								<svg
									class="swap-on fill-rose-500 w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0" /><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									/><g id="SVGRepo_iconCarrier">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
											stroke="#000000"
											stroke-width="0.24000000000000005"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
								</svg>

								<!-- off icon -->
								<svg
									class="swap-off fill-none w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0" /><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									/><g id="SVGRepo_iconCarrier">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
											stroke="#ffffff"
											stroke-width="0.24000000000000005"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
								</svg>
							</label>
						</div>
					</div>
					<p>{$options.state.currentCard.hanzi}</p>
					<p class="capitalize" class:hidden={!$options.state.showAnswer && !$options.learnMode}>
						{$options.state.currentCard.translations.join(', ')}
					</p>
				</div>
			</div>
			<div class="flex mt-3 justify-between gap-3">
				{#if $options.state.currentCardIndex > 0}
					<button
						on:click={() => {
							$options.state.currentCardIndex--;
							$options.state.currentCard =
								$cards[$options.state.cardsList[$options.state.currentCardIndex]];
							$options.state.showAnswer = false;
							document.getElementById('flipper')?.classList.add('animate__fadeIn');
							setTimeout(() => {
								document.getElementById('flipper')?.classList.remove('animate__fadeIn');
							}, 500);
						}}
						class="btn shadow-xl">Previous</button
					>
				{:else}
					<button class="btn" disabled>Previous</button>
				{/if}

				{#if $options.learnMode === false}
					<button
						on:click={() => {
							$options.state.showAnswer = !$options.state.showAnswer;
							document.getElementById('flipper')?.classList.add('animate__flipInX');
							setTimeout(() => {
								document.getElementById('flipper')?.classList.remove('animate__flipInX');
							}, 500);
						}}
						class="btn shadow-xl">{$options.state.showAnswer ? 'Hide' : 'Show'} Answer</button
					>
				{/if}
				{#if $options.state.currentCardIndex < $options.state.cardsList.length - 1}
					<button
						id="flipper-next"
						on:click={() => {
							$options.state.currentCardIndex++;
							$options.state.currentCard =
								$cards[$options.state.cardsList[$options.state.currentCardIndex]];
							$options.state.showAnswer = false;
							document.getElementById('flipper')?.classList.add('animate__fadeIn');
							setTimeout(() => {
								document.getElementById('flipper')?.classList.remove('animate__fadeIn');
							}, 500);
						}}
						class="btn shadow-xl">Next</button
					>
				{:else}
					<button class="btn" disabled>Next</button>
				{/if}
			</div>
		{/if}
	</div>
</section>
<section class="px-5">
	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th>Pinyin</th>
					<th>Character</th>
					<th>Meaning</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#if $options.saved.length > 0}
					{#each $options.saved as savedEntry}
						<tr class="hover">
							<td>{hskAll.find((e) => e?.id == savedEntry)?.pinyin}</td>
							<td>{hskAll.find((e) => e?.id == savedEntry)?.hanzi}</td>
							<td>{hskAll.find((e) => e?.id == savedEntry)?.translations.join(', ')}</td>
							<th>
								<button
									class="btn btn-xs btn-accent btn-outline"
									on:click={(e) => {
										$options.saved.splice($options.saved.indexOf(savedEntry), 1);
										$options = $options;
									}}>x</button
								>
							</th>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</section>
