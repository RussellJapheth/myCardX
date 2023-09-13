<script>
	import { cards, shuffle } from './cards';
	import 'animate.css';

	/**
	 * @type {{question: string, hint: string|null, answer: string}|null}
	 */
	let currentCard = null;

	let currentCardIndex = 0;

	let showAnswer = false;

	let learnMode = false;

	if ($cards.length) {
		$cards = shuffle($cards);
		currentCard = $cards[0];
	}
</script>

<main class="flex items-center bg-info justify-center min-h-screen px-5">
	<section>
		{#if currentCard}
			<div
				id="flipper"
				class="card animate__animated w-full min-h-[20vh] max-w-md bg-base-100 shadow-xl"
			>
				<div class="card-body">
					<h2 class="card-title">{currentCard.question}</h2>
					<p>{currentCard.hint}</p>
					<p class="capitalize" class:hidden={!showAnswer && !learnMode}>{currentCard.answer}</p>
				</div>
			</div>
			<div class="flex mt-3 justify-between gap-3">
				{#if currentCardIndex > 0}
					<button
						on:click={() => {
							currentCardIndex--;
							currentCard = $cards[currentCardIndex];
							showAnswer = false;
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

				{#if !learnMode}
					<button
						on:click={() => {
							showAnswer = !showAnswer;
							document.getElementById('flipper')?.classList.add('animate__flipInX');
							setTimeout(() => {
								document.getElementById('flipper')?.classList.remove('animate__flipInX');
							}, 500);
						}}
						class="btn shadow-xl">{showAnswer ? 'Hide' : 'Show'} Answer</button
					>
				{/if}
				{#if currentCardIndex < $cards.length - 1}
					<button
						on:click={() => {
							currentCardIndex++;
							currentCard = $cards[currentCardIndex];
							showAnswer = false;
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
			<div style="position: absolute; top: 10px; right: 10px;">
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text text-accent-content">Hey, enable learning mode 🥹 &nbsp;</span>
						<input type="checkbox" bind:checked={learnMode} class="checkbox-primary checkbox" />
					</label>
				</div>
			</div>
		{/if}
	</section>
</main>
