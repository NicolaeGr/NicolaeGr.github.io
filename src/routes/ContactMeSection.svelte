<script lang="ts">
	import axios from 'axios';

	let form: HTMLFormElement | null = null;
	let nameInput: HTMLInputElement | null = null;
	let emailInput: HTMLInputElement | null = null;
	let messageInput: HTMLTextAreaElement | null = null;

	let submitButton: HTMLButtonElement;
	let toast: HTMLDivElement;
	let closeIcon: HTMLElement;
	let progress: HTMLDivElement;

	async function sendData(event: SubmitEvent) {
		if (!form) return;
		if (!validateForm()) return;
		const formData = new FormData(form);

		try {
			await axios.post('/contact-form', formData);

			let timer1: NodeJS.Timeout, timer2: NodeJS.Timeout;

			toast.classList.add('active');
			progress.classList.add('active');

			timer1 = setTimeout(() => {
				toast.classList.remove('active');
			}, 5000);

			timer2 = setTimeout(() => {
				progress.classList.remove('active');
			}, 5300);

			closeIcon.addEventListener('click', () => {
				toast.classList.remove('active');

				setTimeout(() => {
					progress.classList.remove('active');
				}, 300);

				clearTimeout(timer1);
				clearTimeout(timer2);
			});

			form.reset();
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function validateForm() {
		let isValid: boolean = true;

		if (!form) return false;

		if (!nameInput || !emailInput || !messageInput) return false;

		// Reset field styles
		nameInput.classList.remove('flash');
		nameInput.classList.remove('share');
		nameInput.classList.remove('invalid');

		emailInput.classList.remove('flash');
		emailInput.classList.remove('share');
		emailInput.classList.remove('invalid');

		messageInput.classList.remove('share');
		messageInput.classList.remove('flash');
		messageInput.classList.remove('invalid');

		// Validate name field
		if (nameInput.value.trim() === '') {
			nameInput.classList.add('shake', 'flash', 'invalid');
			isValid = false;
		}

		// Validate email field
		const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		if (!emailPattern.test(emailInput.value.trim())) {
			emailInput.classList.add('shake', 'flash', 'invalid');
			isValid = false;
		}

		// Validate message field
		if (messageInput.value.trim() === '') {
			messageInput.classList.add('shake', 'flash', 'invalid');
			isValid = false;
		}

		setTimeout(() => {
			if (!nameInput || !emailInput || !messageInput) return false;
			nameInput.classList.remove('shake', 'flash');
			emailInput.classList.remove('shake', 'flash');
			messageInput.classList.remove('shake', 'flash');
		}, 1000);

		return isValid;
	}
</script>

<section id="contact-me">
	<div class="container">
		<div class="greeting">
			<h2>Contact Me</h2>
			<p>
				Let's connect and discover how my skills can fuel your business growth in the online realm.
				Get in touch today and unlock the full potential of your digital presence.
			</p>
		</div>
		<form on:submit|preventDefault={sendData} method="post" class="form" bind:this={form}>
			<input
				bind:this={nameInput}
				class="input-name"
				type="text"
				name="name"
				id=""
				placeholder="Name"
			/>
			<input
				bind:this={emailInput}
				class="input-email"
				type="text"
				name="email"
				id=""
				placeholder="Email"
			/>
			<textarea
				bind:this={messageInput}
				class="input-message"
				name="message"
				id=""
				placeholder="Message"
			/>
			<button bind:this={submitButton} type="submit">Submit</button>
		</form>
		<div class="image">
			<img src="images/contact-me.svg" alt="" />
		</div>
		<div class="socials">
			<div class="social-link">
				<a rel="noreferrer" target="_blank" href="mailto:nicolaegr@proton.me">
					<img src="images/socials/mail-rounded.svg" alt="" />
				</a>
				<a rel="noreferrer" target="_blank" href="mailto:nicolaegr@proton.me" class="">
					Email | nicolaegr@proton.me
				</a>
			</div>
			<div class="social-link">
				<a rel="noreferrer" target="_blank" href="https://github.com/NicolaeGr">
					<img src="images/socials/github-alt.svg" alt="" />
				</a>
				<a rel="noreferrer" target="_blank" href="https://github.com/NicolaeGr" class="">
					GitHub | NicolaeGr
				</a>
			</div>
			<div class="social-link">
				<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nicolaegr/">
					<img src="images/socials/linkedin-fill.svg" alt="" />
				</a>
				<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nicolaegr/" class="">
					LinkedIn | nicolaegr
				</a>
			</div>
			<div class="social-link">
				<a rel="noreferrer" target="_blank" href="https://fosstodon.org/@nicolaegr">
					<img src="images/socials/mastodon.svg" alt="" />
				</a>
				<a rel="noreferrer" target="_blank" href="https://fosstodon.org/@nicolaegr" class="">
					Mastodon | nicolaegr
				</a>
			</div>
		</div>
	</div>
</section>

<div hidden class="toast active" />
<div bind:this={toast} class="toast">
	<div class="toast-content">
		<i class="fas fa-solid fa-check check" />

		<div class="message">
			<span class="text text-1">Success</span>
			<span class="text text-2">Your message has been sent!</span>
		</div>
	</div>
	<i bind:this={closeIcon} class="fa-solid fa-xmark close" />

	<!-- Remove 'active' class, this is just to show in Codepen thumbnail -->
	<div bind:this={progress} class="progress" />
	<div hidden class="progress active" />
</div>

<style>
	#contact-me {
		margin-top: 80px;
		position: relative;
	}

	.container {
		max-height: 680px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(8, 1fr);
		gap: 42px;

		max-width: 920px;
	}

	.greeting {
		grid-area: 1 / 1 / 3 / 2;
		flex-direction: column;
		gap: 16px;
	}

	.form {
		grid-area: 3 / 1 / 9 / 2;
		flex-direction: column;
		max-width: 400px;
		gap: 1rem;

		font-size: 18px;

		display: flex;
		flex-wrap: nowrap;

		padding: 0;

		min-height: 32px;
	}

	.image {
		grid-area: 1 / 2 / 6 / 3;
		position: relative;
	}

	.socials {
		grid-area: 6 / 2 / 9 / 3;
		flex-direction: column;
		gap: 1rem;
	}

	.image img {
		width: 100%;
	}

	.greeting h2 {
		font-size: 42px;
		padding: 0px;
		text-align: left;
	}

	.form input,
	.form .input-message {
		height: 48px;
		border: 1px solid #edebf4;
		outline: transparent;
	}

	.form input:hover,
	.form .input-message:hover,
	.form input:active,
	.form .input-message:active,
	.form input:focus,
	.form .input-message:focus {
		border: 1px solid #7c5ef1;
	}
	.input-message {
		min-height: 240px;
		height: 240px;
		resize: none;
	}

	.form button {
		background: #7355e7;
		color: #fff;

		border: none;
		height: 54px;
		margin-top: 32px;
		transition-duration: 0.4s;
	}

	.form button:hover {
		background-color: #6240e9;
	}

	.form button:active {
		background-color: #fff;
		border: 1px solid #6240e9;
	}

	.form > * {
		border-radius: 16px;
		padding: 8px;
	}

	.social-link {
		height: 40px;
		min-height: 40px;
		color: #636363;
		align-items: center;
		gap: 8px;
	}

	.social-link:hover {
		transition-duration: 0.4s;
		color: #9a9a9a;
	}

	.social-link img {
		height: 40px;
		padding: 4px;
		border: 2px solid #7355e7;
		border-radius: 50%;
	}

	@media (max-width: 680px) {
		.container {
			max-height: 780px;

			grid-template-columns: 1fr;
			grid-template-rows: repeat(6, 1fr);
			gap: 32px;
			max-width: 400px;
		}

		.greeting {
			grid-area: 1 / 1 / 2 / 2;
			gap: 4px;
		}

		.form {
			grid-area: 4 / 1 / 7 / 2;
		}

		.input-message {
			min-height: 160px;
			height: 160px;
			resize: none;
		}

		.image {
			display: none;
		}

		.socials {
			grid-area: 2 / 1 / 4 / 2;
		}
	}

	.toast {
		position: fixed;
		top: 25px;
		right: 30px;
		border-radius: 12px;
		background: #fff;
		padding: 20px 35px 20px 25px;
		box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transform: translateX(calc(100% + 30px));
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);

		z-index: 10000;
	}

	.toast.active {
		transform: translateX(0%);
	}

	.toast .toast-content {
		display: flex;
		align-items: center;
	}

	.toast-content .check {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 35px;
		min-width: 35px;
		background-color: #4070f4;
		color: #fff;
		font-size: 20px;
		border-radius: 50%;
	}

	.toast-content .message {
		display: flex;
		flex-direction: column;
		margin: 0 20px;
	}

	.message .text {
		font-size: 16px;
		font-weight: 400;
		color: #666666;
	}

	.message .text.text-1 {
		font-weight: 600;
		color: #333;
	}

	.toast .close {
		position: absolute;
		top: 10px;
		right: 15px;
		padding: 5px;
		cursor: pointer;
		opacity: 0.7;
	}

	.toast .close:hover {
		opacity: 1;
	}

	.toast .progress {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		min-height: 1px;
		width: 100%;
	}

	.toast .progress:before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: #4070f4;
	}

	.progress.active:before {
		animation: progress 5s linear forwards;
	}

	@keyframes progress {
		100% {
			right: 100%;
		}
	}
</style>
