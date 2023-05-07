<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	let projects = [
		{
			name: 'Room Homepage',
			description: 'A short description of the project',
			url: 'https://room.nicolaegrosu.me',
			source: 'https://github.com/nicolaegr',
			screenshot: 'images/projects/The Image.png'
		},
		{
			name: 'Room Homepage',
			description: 'A short description of the project',
			url: 'https://room.nicolaegrosu.me',
			source: 'https://github.com/nicolaegr',
			screenshot: 'images/projects/The Image.png'
		},
		{
			name: 'Room Homepage',
			description: 'A short description of the project',
			url: 'https://room.nicolaegrosu.me',
			source: 'https://github.com/nicolaegr',
			screenshot: 'images/projects/The Image.png'
		},
		{
			name: 'Room Homepage',
			description: 'A short description of the project',
			url: 'https://room.nicolaegrosu.me',
			source: 'https://github.com/nicolaegr',
			screenshot: 'images/projects/The Image.png'
		},
		{
			name: 'Room Homepage',
			description: 'A short description of the project',
			url: 'https://room.nicolaegrosu.me',
			source: 'https://github.com/nicolaegr',
			screenshot: 'images/projects/The Image.png'
		},
		{
			name: 'Room Homepage',
			description: 'A short description of the project',
			url: 'https://room.nicolaegrosu.me',
			source: 'https://github.com/nicolaegr',
			screenshot: 'images/projects/The Image.png'
		}
	];

	import { onMount } from 'svelte';

	let projCnt: HTMLDivElement | null = null;

	onMount(() => {
		if (projCnt) {
			projCnt.addEventListener('wheel', (evt: WheelEvent) => {
				if (
					!(
						(projCnt!.scrollLeft === 0 && evt.deltaY < 0) ||
						(projCnt!.scrollLeft === projCnt!.scrollWidth - projCnt!.clientWidth && evt.deltaY > 0)
					)
				) {
					evt.preventDefault();
				}
				projCnt!.scrollLeft += evt.deltaY + evt.deltaX;
			});
		}
	});
</script>

<section id="projects">
	<div class="container">
		<img class="dots" src="images/widgets/Ecplipses.svg" alt="" />
		<h2>Recent Projects</h2>
		<div class="card-container" bind:this={projCnt}>
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>

<style>
	#projects {
		height: 680px;
	}

	.container {
		flex-direction: column;
		gap: 4rem;
	}

	h2 {
		margin-top: 48px;
	}

	.card-container {
		overflow-x: scroll;
		overflow-y: auto;

		min-height: 410px;
		gap: 2rem;

		scroll-snap-type: x mandatory;
		scrollbar-width: thin;
		-ms-overflow-style: none;
		scrollbar-color: transparent transparent;
	}

	.card-container::-webkit-scrollbar {
		display: none;
		width: 0.5em;
		background-color: transparent;
	}

	.dots {
		position: absolute;
		bottom: 0px;
		right: 20%;
	}
</style>
