<section id="about-me">
	<div class="container">
		<div class="img-contianer">
			<img id="" src="images/PhoneHandWithProject.png" alt="" />
		</div>
		<div class="content-wrapper">
			<h2>About Me</h2>
			<p>
				Experienced full-stack developer with 3+ years of expertise in delivering high-quality web
				applications. Skilled in various front-end and back-end technologies including React,
				Node.js, Express, and MongoDB.
			</p>

			<div class="card-container">
				<div class="about-me-card">
					<h3>Classic</h3>
					<p>You get a backend written in Node.js using Express or Nest.JS and a database.</p>
				</div>
				<div class="about-me-card">
					<h3>PockerBase</h3>
					<p>
						You get a backend using PocketBase that can provide database, authentication and more.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	#about-me {
		height: 640px;

		color: #ffffff;
		background-color: #080d1d;
	}

	.container > div {
		flex: 1 0 40%;
	}

	.img-contianer {
		position: relative;
	}

	.img-contianer img {
		position: absolute;
		bottom: 0px;
		right: -120px;
		height: 104%;
		max-width: unset;
		z-index: 0;
	}

	.content-wrapper {
		flex-direction: column;
		gap: 2rem;

		min-width: 500px;
		z-index: 10;
	}

	p {
		text-align: center;
	}

	.card-container {
		gap: 3rem;
		max-width: 100%;
	}

	.about-me-card {
		flex-direction: column;
		flex: 1 1 40%;

		padding: 16px 32px;

		color: #000000;
		background-color: #ffffff;

		border: 1px solid #eaeaea;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
		border-radius: 2rem;
	}

	.about-me-card h3 {
		margin: 0px;

		font-size: 28px;
		text-align: center;

		color: #7355e7;

		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 992px) {
		.img-contianer {
			display: none;
		}

		.content-wrapper {
			min-width: 0px;
			max-width: 520px;
			margin: 0 auto;
			text-align: center;
			font-size: 1rem;
		}

		.card-container {
			gap: 2rem;
		}
	}

	@media (max-width: 680px) {
		#about-me {
			height: 720px;
		}

		.card-container {
			gap: 2rem;
			flex-direction: column;
		}

		.about-me-card {
			max-width: 300px;
			margin: 0 auto;
		}
	}
</style>
