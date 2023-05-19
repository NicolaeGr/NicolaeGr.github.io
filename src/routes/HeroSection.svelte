<script lang="ts">
	import { onMount } from 'svelte';

	import DownloadPage from './DownloadPage.svelte';

	let isPopupOpen = false;

	function togglePopup() {
		isPopupOpen = !isPopupOpen;
	}

	import Typed from 'typed.js';
	let typedElement: HTMLElement;
	const typedOptions = {
		strings: [
			'Full-stack developer with a strong foundation in web development and a passion for solving complex problems.',
			'Full Stack Web Developer with almost 3 years of experience working remote.'
		],
		typeSpeed: 40,
		backDelay: 4000,
		smartBackspace: true,
		fadeOutClass: 'typed-fade-out',
		fadeOutDelay: 500,
		shuffle: false,
		loop: true,
		loopCount: Infinity,
		showCursor: true,
		cursorChar: '|',
		autoInsertCss: true,
		contentType: 'html'
	};

	let getInTouchButton: HTMLButtonElement | null = null;

	onMount(() => {
		const typed = new Typed(typedElement, typedOptions);

		if (getInTouchButton)
			getInTouchButton.addEventListener('click', () => {
				const contactForm = document.querySelector('#contact-me');
				if (contactForm) {
					contactForm.scrollIntoView({
						behavior: 'smooth'
					});
				}
			});
	});
</script>

<section id="hero">
	<div class="container">
		<div class="widgets">
			<img class="vscode-widget" src="images/widgets/VS_Code.png" alt="" />
			<img class="github-widget" src="images/widgets/Github.png" alt="" />
		</div>
		<div class="call-to-action">
			<h1>Hi,<br />I am <strong>Nicolae Grosu</strong></h1>
			<div class="typed-wrapper">
				<span bind:this={typedElement}>
					Full Stack Web Developer with almost 3 years of experience working remote.
				</span>
			</div>
			<div class="btn-wrapper">
				<button bind:this={getInTouchButton} class="contact-btn">Get in Touch</button>
				<button on:click={togglePopup} class="download-btn">Download CV</button>
				{#if isPopupOpen}
					<DownloadPage on:close={togglePopup} />
				{/if}
			</div>
		</div>
		<div class="picture">
			<img src="images/Hero_Image_Desktop.png" alt="" />
		</div>
		<img class="developer-widget" src="images/widgets/Developer.svg" alt="" />
	</div>
</section>

<style>
	#hero {
		height: 520px;
	}

	.widgets {
		height: 0;
		width: 0;
		display: none;
	}

	.widgets > img {
		position: absolute;
		height: 100px;
	}

	.widgets .vscode-widget {
		top: 56px;
		right: 100px;
	}

	.widgets .github-widget {
		bottom: -4px;
		left: 48px;
	}

	.developer-widget {
		position: absolute;
		bottom: 32px;
		right: 38%;

		height: 160px;
	}

	.call-to-action {
		flex: 1 0 50%;
		flex-direction: column;
		justify-content: center;

		gap: 16px;
	}

	.call-to-action h1 {
		font-size: 3rem;
	}

	.call-to-action strong {
		color: #7355e7;
	}

	.typed-wrapper {
		display: block;
		height: 3rem;
	}

	.btn-wrapper {
		display: flex;
		gap: 1.5rem;
	}

	button {
		height: 52px;
		width: 160px;
		border-radius: 1rem;
		border: none;
		font-size: 1.2rem;

		transition-duration: 0.6s;
	}

	.contact-btn {
		background-color: #7355e7;
		color: #ffffff;
		box-shadow: 0px 13px 68px -24px #7355e7;
	}
	.download-btn {
		background-color: #f9f9f9;
		box-shadow: 0px 13px 68px 0px rgba(154, 154, 154, 0.5);
	}

	.contact-btn:hover {
		background-color: #6240e9;
	}

	.download-btn:hover {
		background-color: #7355e7;
		color: #ffffff;
		box-shadow: 0px 13px 68px 0px rgba(114, 85, 231, 0.5);
	}

	.picture {
		flex: 1 0 50%;
		justify-content: start;
		align-items: end;
		position: relative;
	}

	.picture > img {
		height: 95%;
		max-width: unset;
	}

	@media (max-width: 992px) {
		.call-to-action h1 {
			font-size: 2.4rem;
		}

		.typed-wrapper {
			height: 4.5rem;
		}

		button {
			font-size: 1rem;
			height: 48px;
			width: 140px;
		}

		.picture > img {
			height: 85%;
		}

		.developer-widget {
			right: 28%;
			bottom: -24px;

			height: 140px;
		}
	}

	@media (max-width: 680px) {
		.widgets {
			display: flex;
		}

		.typed-wrapper {
			height: 4rem;
		}

		.picture {
			display: none;
		}
	}
	@media (max-width: 480px) {
		.call-to-action h1 {
			font-size: 2rem;
		}

		.developer-widget {
			right: -8%;
			bottom: -16px;
		}
	}
</style>
