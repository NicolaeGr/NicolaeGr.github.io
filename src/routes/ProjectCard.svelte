<script lang="ts">
	export let project = {
		name: '',
		description: '',
		url: '',
		source: '',
		screenshot: ''
	};
</script>

<div
	class="projects-card"
	style="background-image: url('images/bgs/blob-scene-haikei{Math.floor(
		Math.random() * 3 + 1
	)}.svg');"
>
	<div class="img-container">
		<img src={project.screenshot} alt="" />
	</div>
	<div class="info">
		<div class="top">
			<h4>{project.name}</h4>
			<div class="links">
				<a href={project.url} class="live">
					<img src="images/icons/web.svg" alt="" />
				</a>
				<a href={project.source} class="source">
					<img src="images/icons/github.svg" alt="" />
				</a>
			</div>
		</div>
		<p>{project.description}</p>
	</div>
</div>

<style>
	.projects-card {
		position: relative;
		flex-direction: column;

		color: #000000;
		background-color: #ffffff;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: top;

		overflow: hidden;

		padding: 0px;

		border-radius: 10px;
		box-shadow: inset 0px 3px 19px rgba(0, 0, 0, 0.25);

		z-index: 1;

		min-height: 281px;
		max-height: 281px;
		min-width: 420px;
		width: 420px;

		filter: grayscale(1);
		transition: all 0.8s ease-out;
	}

	.projects-card:hover {
		filter: grayscale(0);
		max-height: 400px;
		box-shadow: inset 0px 3px 19px rgba(0, 0, 0, 0.125);
	}

	.projects-card > .img-container {
		justify-content: center;
		align-items: center;

		height: 280px;
		width: 420px;
	}

	.projects-card > .img-container > img {
		box-shadow: 0px 0px 8px -8px rgba(0, 0, 0, 0.25);
		height: 240px;
	}

	.projects-card .info {
		transition: all 0.7s ease;
		transform: translateY(100%);

		flex-direction: column;
		justify-content: stretch;

		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;

		opacity: 0;
		z-index: -1;

		padding: 8px 16px;
		height: 120px;
	}

	.projects-card:hover .info {
		display: flex;
		transform: translateY(0%);
		opacity: 1;

		transition-delay: 0.5s;
	}

	.projects-card:not(:hover) {
		transition-delay: 0.5s;
	}

	.projects-card .top {
		justify-content: space-between;
		align-items: center;
	}

	.projects-card .top h4 {
		margin: 8px 0px;
		font-size: 20px;
	}

	.projects-card .links {
		gap: 4px;
	}

	.projects-card p {
		margin: 8px 0px;
	}

	@media (max-width: 992px) {
		.projects-card {
			min-height: 210px;
			max-height: 210px;
			min-width: 315px;
			width: 315px;
		}
		.projects-card:hover {
			max-height: 300px;
		}

		.projects-card > .img-container {
			height: 210px;
			width: 315px;
		}

		.projects-card > .img-container > img {
			height: 180px;
		}

		.projects-card .info {
			padding: 4px 12px;
			height: 90px;
		}
	}
</style>
