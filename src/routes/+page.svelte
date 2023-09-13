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

	const toggleAutoplay = () => {
		// setTimeout(() => {
		// 	document.getElementById('flipper-next')?.click();
		// }, 5000);
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
	}
</script>

<Navbar {options} {toggleShuffle} {toggleAutoplay} />
<main class="flex items-center bg-info justify-center min-h-[90vh] px-5">
	<section>
		{#if $options.state.currentCard}
			<div
				id="flipper"
				class="card animate__animated w-[90vw] min-h-[20vh] max-w-md bg-base-100 shadow-xl"
			>
				<div class="card-body">
					<h2 class="card-title">{$options.state.currentCard.question}</h2>
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

				{#if !$options.learnMode}
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
	</section>
</main>
