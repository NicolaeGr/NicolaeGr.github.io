<script lang="ts">
	import '../app.css';

	function scrollIntoView(event: MouseEvent): void {
		const target = event.target as HTMLAnchorElement;
		const href = target.getAttribute('href');
		if (!href) return;

		const el = document.querySelector(href);
		if (!el) return;

		el.scrollIntoView({
			behavior: 'smooth'
		});

		const currentUrl = window.location.href;
		const indexOfTag = currentUrl.indexOf('#');
		if (indexOfTag !== -1) {
			const newUrl = currentUrl.substring(0, indexOfTag);
			window.history.replaceState({}, '', newUrl);
		}
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Hi, I am Grosu Nicolae. I am a freelance web developer from Moldova and this is my portofolio website."
	/>
</svelte:head>

<!--  Header  -->
<section id="header">
	<div class="container">
		<div class="title"><h2>NG</h2></div>
		<div class="nav">
			<div class="nav-item">
				<a on:click|preventDefault={scrollIntoView} href="#about-me">About Me</a>
			</div>
			<div class="nav-item">
				<a on:click|preventDefault={scrollIntoView} href="#projects">My Projects</a>
			</div>
			<div class="nav-item">
				<a on:click|preventDefault={scrollIntoView} href="#contact-me">Contact Me</a>
			</div>
		</div>
		<div class="null" />
	</div>
</section>

<slot />

<!--  Footer  -->
<section id="footer">
	<div class="container">
		<hr class="footer-br" />
		<div class="title"><h2>NG</h2></div>
		<div class="nav">
			<div class="nav-item">
				<a on:click|preventDefault={scrollIntoView} href="#about_me">About Me</a>
			</div>
			<div class="nav-item">
				<a on:click|preventDefault={scrollIntoView} href="#projects">My Projects</a>
			</div>
			<div class="nav-item">
				<a on:click|preventDefault={scrollIntoView} href="#contact_me">Contact Me</a>
			</div>
		</div>
		<div class="copyright"><span>@2023, All right reserved</span></div>
	</div>
</section>

<style lang="scss">
	#header,
	#footer {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 500;
	}

	.container,
	.container {
		height: 64px;
	}

	#header .title,
	#header .null {
		flex: 0 0 15%;
	}

	#header .title {
		justify-content: flex-start;
		align-items: flex-start;
	}

	.title > h2 {
		font-size: 38px;
		padding: 0px;
		margin: auto 0px;
		width: min-content;
	}

	#header .nav {
		flex: 1 0 70%;
	}

	.nav {
		justify-content: center;
		align-items: center;

		gap: 4rem;

		min-height: none;
	}

	#header .nav-item {
		align-items: center;
	}

	#footer > .container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	#footer .title {
		grid-area: 1 / 1 / 3 / 2;
	}
	#footer .nav {
		grid-area: 1 / 2 / 3 / 6;
	}
	#footer .copyright {
		grid-area: 1 / 6 / 3 / 7;

		font-size: 14px;

		color: #9a9a9a;
		align-items: center;
	}

	#footer .footer-br {
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;

		border-top: 1px solid #d1d1d1;
		border-bottom: 1px solid #f0f0f0;
	}

	#footer {
		margin-top: 64px;
	}

	@media (max-width: 992px) {
		#header .nav {
			gap: 2rem;
		}
	}

	@media (max-width: 680px) {
		#footer {
			height: 80px;
		}

		#footer .container {
			height: 100%;
			padding-top: 12px;
		}

		#footer .title {
			display: none;
		}

		#footer .nav {
			grid-area: 1 / 1 / 2 / 7;
			gap: 2rem;
		}

		#footer .copyright {
			grid-area: 2 / 1 / 3 / 7;
		}
		#footer span {
			text-align: center;
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		#header .nav {
			gap: 1rem;
			flex: 1 0 100%;
		}

		#header .title,
		#header .null {
			display: none;
		}

		#footer .nav {
			gap: 1rem;
		}
	}
</style>
