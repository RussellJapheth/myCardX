<script>
	import { sameMajorVersion } from '$lib';
	import { STORED_OPTIONS_VERSION } from '$lib/vars';

	export let options;

	/**
	 * @type {function}
	 */
	export let toggleShuffle;

	/**
	 * @type {function}
	 */
	export let checkAutoplay;

	/**
	 * @type {function}
	 */
	export let resetCards;

	/**
	 * @type {function}
	 */
	export let checkLevels;

	/**
	 * @param {any} exportObj
	 * @param {string} exportName
	 */
	function downloadObjectAsJson(exportObj, exportName) {
		var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
		var downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute('href', dataStr);
		downloadAnchorNode.setAttribute('download', exportName + '.json');
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}

	/**
	 * @type {Blob}
	 */
	let selectedFile;

	function handleFilesSelect(e) {
		selectedFile = e.target.files[0];
		const reader = new FileReader();
		reader.addEventListener('load', function () {
			if (!reader.result) {
				alert('Invalid file!');
				return;
			}
			try {
				console.log(reader.result);
				let importedOptions = JSON.parse(reader.result);
				if (!importedOptions || !importedOptions.version) {
					alert('Invalid file!');
					return;
				}
				if (!sameMajorVersion(importedOptions.version, STORED_OPTIONS_VERSION)) {
					alert('Invalid file!');
					return;
				}
				$options = importedOptions;
				alert('Import complete!');
			} catch (error) {
				console.log(error);
				alert('Invalid file!');
			}
		});
		reader.readAsText(selectedFile);

		return;
	}
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost animate__animated animate__rubberBand">
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
						<span class="label-text text-accent">Learning mode 🥹 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.learnMode}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">Shuffle 🔀 &nbsp;</span>
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
						<span class="label-text text-accent">Autoplay 🪄 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.enableAutoplay}
							on:change={() => {
								checkAutoplay();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<div class="divider" />
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">HSK1 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.levels.hsk1}
							on:change={() => {
								checkLevels();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">HSK2 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.levels.hsk2}
							on:change={() => {
								checkLevels();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">HSK3 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.levels.hsk3}
							on:change={() => {
								checkLevels();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">HSK4 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.levels.hsk4}
							on:change={() => {
								checkLevels();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">HSK5 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.levels.hsk5}
							on:change={() => {
								checkLevels();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer">
						<span class="label-text text-accent">HSK6 &nbsp;</span>
						<input
							type="checkbox"
							bind:checked={$options.levels.hsk6}
							on:change={() => {
								checkLevels();
							}}
							class="checkbox-sm checkbox-primary checkbox"
						/>
					</label>
				</li>
				<li>
					<div class="divider" />
				</li>
				<li>
					<label class="btn mb-2 btn-sm btn-info capitalize" for="importFile">
						<input
							on:change={handleFilesSelect}
							accept="text/json"
							type="file"
							hidden
							class="hidden"
							id="importFile"
						/>
						import
					</label>
				</li>
				<li>
					<button
						on:click={() => {
							downloadObjectAsJson($options, 'settings');
						}}
						class="btn mb-2 btn-sm btn-primary capitalize"
					>
						export
					</button>
				</li>
				<li>
					<button
						on:click={() => {
							resetCards();
						}}
						class="btn btn-sm btn-accent capitalize">Start Over</button
					>
				</li>
			</ul>
		</div>
	</div>
	<!-- <div class="navbar-end">
		<a href="#!" class="btn btn-ghost normal-case text-xl">myCardX</a>
	</div> -->
</div>
