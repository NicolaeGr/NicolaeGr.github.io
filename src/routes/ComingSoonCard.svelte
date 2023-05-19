<script lang="ts">
</script>

<div class="projects-card" style="background-image: url('images/bgs/blob-end.svg');">
	<div class="content-container">
		<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 12 12"
			><path
				fill="#7355e7"
				d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"
			/></svg
		>
		<p>More Coming Soon</p>
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
		box-shadow: inset 0px 3px 19px rgba(0, 0, 0, 0.125);
	}

	.projects-card > .content-container {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 24px;

		height: 280px;
		width: 420px;
	}

	.projects-card > .content-container p {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1.5rem;
		font-weight: 700;

		color: #7355e7;
	}

	.projects-card:not(:hover) {
		transition-delay: 0.5s;
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

		.projects-card > .content-container {
			height: 210px;
			width: 315px;
		}
	}
</style>
