<script>
	import { onMount } from 'svelte';

	export let options;

	/**
	 * @type {function}
	 */
	export let toggleShuffle;

	/**
	 * @type {function}
	 */
	export let toggleAutoplay;

	onMount(() => {
		let didClickMenu = localStorage.getItem('didClickMenu');
		// if (browser) {
		// if(!didClickMenu) {
		// 	setTimeout(() => {

		// 	}, 10000)
		// }
		// }
	});
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost animate__animated animate__infinite animate__pulse">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
				Menu 🙄🙈
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent-content">Learning mode 🥹 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.learnMode}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent-content">Shuffle 🔀 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.enableShuffle}
							on:change={() => {
								toggleShuffle();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent-content">Autoplay 🪄 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.enableAutoplay}
							on:change={() => {
								// toggleAutoplay();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
			</ul>
		</div>
	</div>
	<!-- <div class="navbar-end">
		<a href="#!" class="btn btn-ghost normal-case text-xl">myCardX</a>
	</div> -->
</div>
