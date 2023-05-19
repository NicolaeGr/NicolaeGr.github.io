<script lang="ts">
	import type { Mouse } from '@playwright/test';
	import { createEventDispatcher } from 'svelte';

	let zoomLevel = 1;

	const dispatch = createEventDispatcher();

	function clickOutside(event: MouseEvent) {
		const wrapper = document.querySelector('.wrapper') as HTMLElement;
		const popup = document.querySelector('.popup') as HTMLElement;

		if (!popup.contains(event.target as Node) && wrapper.contains(event.target as Node)) {
			dispatch('close');
		}
	}

	function closePopup() {
		dispatch('close');
	}

	function zoomIn() {
		zoomLevel += 0.1;
	}

	function zoomOut() {
		zoomLevel -= 0.1;
	}

	function download(): void {
		const link: HTMLAnchorElement = document.createElement('a');
		link.href = 'Grosu_Nicolae_Resume.pdf';
		link.download = 'Grosu_Nicolae_Resume.pdf';

		link.click();

		link.remove();
	}
</script>

<div class="wrapper" on:click={clickOutside} on:keydown={null}>
	<div class="popup">
		<div class="paper">
			<img
				style="transform: scale({zoomLevel});"
				src="images/Grosu_Nicolae_Resume.jpg"
				alt="Resume"
			/>
		</div>
		<div class="buttons">
			<button on:click={zoomIn}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.263.687t-.288.688q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Zm0-1.5q-.425 0-.713-.288T8.5 11.5v-1H7.475q-.425 0-.7-.288T6.5 9.5q0-.425.288-.713T7.5 8.5h1V7.475q0-.425.288-.7T9.5 6.5q.425 0 .713.287t.287.713v1h1.025q.425 0 .7.288t.275.712q0 .425-.288.713t-.712.287h-1v1.025q0 .425-.288.7T9.5 12.5Z"
					/>
				</svg>
			</button>
			<button on:click={zoomOut}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.263.687t-.288.688q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Zm-1.525-3.5q-.425 0-.7-.288T7 9.5q0-.425.288-.713T8 8.5h3.025q.425 0 .7.288T12 9.5q0 .425-.288.713T11 10.5H7.975Z"
					/>
				</svg>
			</button>
			<button on:click={download}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M6 22q-.825 0-1.413-.588T4 20V8.825q0-.4.15-.762t.425-.638l4.85-4.85q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm6-5.425q.2 0 .375-.063t.325-.212l2.625-2.625Q15.6 13.4 15.6 13t-.3-.7q-.275-.275-.7-.288t-.7.288l-.9.85V10q0-.425-.288-.713T12 9q-.425 0-.713.288T11 10v3.15l-.9-.875Q9.8 12 9.4 12t-.7.3q-.275.275-.275.7t.275.7l2.6 2.6q.15.15.325.213t.375.062Z"
					/>
				</svg>
			</button>
		</div>
		<div class="close">
			<button on:click={closePopup}>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>

<style>
	.wrapper {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;

		top: 0;
		left: 0;
		height: 100%;
		width: 100%;

		z-index: 1000;

		background-color: rgba(27, 27, 27, 0.411);
	}

	.popup {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		padding: 8px;
		padding-bottom: 32px;
		gap: 32px;

		max-height: 90%;
		aspect-ratio: 1/1.2;

		background-color: #ffffff;
		box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.25);
		border-radius: 30px;
	}

	.paper {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		/* border: 1px solid #eaeaea; */
		box-shadow: 0px 0px 8px -8px rgba(0, 0, 0, 0.25);

		position: relative;
		width: 90%;
		overflow: hidden;
	}

	.paper img {
		width: 100%;
		max-width: 100%;
		aspect-ratio: 1/1.2;

		transition: transform 0.3s ease-in-out;
		object-fit: contain;
		transition: transform 0.3s ease-in-out;
	}

	.buttons {
		display: flex;
		justify-content: flex-end;
		gap: 8px;
	}

	button {
		margin-left: 10px;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
