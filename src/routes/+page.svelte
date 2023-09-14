<script>
	import { writable } from 'svelte/store';
	import Navbar from './Navbar.svelte';
	import { cards, shuffle } from './cards';
	import 'animate.css';

	// /**
	//  * @type {{question: string, hint: string|null, answer: string}|null}
	//  */
	// let currentCard = null;

	// /**
	//  * @type {Array.<number>}
	//  */
	// let cardsList = [];

	// let currentCardIndex = 0;

	// let showAnswer = false;

	const storedOptions = localStorage.getItem('options');

	const options = writable(
		storedOptions
			? JSON.parse(storedOptions)
			: {
					learnMode: false,
					enableShuffle: false,
					enableAutoplay: false,
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
							{$options.state.currentCard.question}
						</h2>
						<div>
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
					<p>{$options.state.currentCard.hint}</p>
					<p class="capitalize" class:hidden={!$options.state.showAnswer && !$options.learnMode}>
						{$options.state.currentCard.answer}
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
							<td>{$cards.find((e) => e?.id == savedEntry)?.question}</td>
							<td>{$cards.find((e) => e?.id == savedEntry)?.hint}</td>
							<td>{$cards.find((e) => e?.id == savedEntry)?.answer}</td>
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
