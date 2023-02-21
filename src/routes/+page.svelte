<script>
	// @ts-nocheck

	// @ts-ignore
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
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
	<title>Grosu Nicolae</title>
	<meta
		name="description"
		content="Hi, I am Grosu Nicolae. I am a freelance web developer from Moldova and this is my portofolio website."
	/>
</svelte:head>

<header id="navbar" class="h-[5rem] w-screen font-['Space_Grotesk']">
	<div class="container m-auto grid h-full w-full grid-cols-6 grid-rows-1">
		<h1 class="mx-16 my-auto hidden text-4xl font-bold md:col-span-1 md:inline">
			<a href="#top" on:click|preventDefault={scrollIntoView}> NG </a>
		</h1>
		<div
			class="col-span-6 flex items-center justify-center gap-12 md:col-span-4 md:gap-[4rem] xl:gap-[8rem]"
		>
			<a href="#about" on:click|preventDefault={scrollIntoView}>About Me</a>

			<a href="#projects" on:click|preventDefault={scrollIntoView}>My Projects</a>

			<a href="#reviews" on:click|preventDefault={scrollIntoView}>Reviews</a>
		</div>
		<div class="md:col-span-1" />
	</div>
</header>

<section id="hero" class="relative">
	<div class="container mx-auto grid grid-cols-1 grid-rows-1 px-6 lg:grid-cols-2">
		<div class="flex h-full min-h-[380px] flex-col justify-center">
			<span
				class="font-['Space_Grotesk'] text-4xl font-bold md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
			>
				Hi,
				<br />
				I am <strong class="font-bold text-main-purple">Nicolae Grosu</strong>
			</span>

			<span class="text-md font-['Inter'] lg:text-xl">
				Full Stack Web Developer with over 2 years of experience working remote
			</span>
			<div>
				<button
					on:click|preventDefault={null}
					class="contact-btn hero-btn my-8 font-['Inter'] font-medium"
				>
					Contact Me
				</button>
				<button
					on:click|preventDefault={null}
					class="download-btn hero-btn my-8 font-['Inter'] font-medium"
				>
					Download CV
				</button>
			</div>
		</div>
		<div class="hidden h-max items-end justify-end lg:flex">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				class="w-max max-w-[90%]"
				src="images/Hero_Image_Desktop.png"
				alt="A photo of Grosu Nicolae from the side"
			/>
		</div>

		<div class="top-0 left-0 flex lg:hidden">
			<img
				class="absolute left-[30%] bottom-4 h-[80px]"
				src="images/VS_Code.png"
				alt="logo of VS Code"
			/>
			<img
				class="absolute right-[25%] top-8 h-[80px]"
				src="images/Github.png"
				alt="logo of GitHub"
			/>
		</div>
	</div>
</section>

<section id="about" class="h-[1000px] bg-main-dark sm:h-[790px] md:h-[720px]">
	<div class="container mx-auto grid min-h-full grid-cols-1 grid-rows-1 px-6 xl:grid-cols-2">
		<div class="relative hidden h-max min-h-full items-end justify-end xl:flex">
			<div
				class="absolute top-[-40px] right-[-190px] min-h-[105.5%] min-w-[200%] bg-bottom bg-no-repeat 2xl:right-[-280px]"
				style="background-image: url('images/PhoneHandWithProject.png');"
			/>
			<!-- <img
				class="absolute top-0 right-0 aspect-video min-h-full"
				src="images/PhoneHandWithProject.png"
				alt="a phone in a person's hand that shows a project in mobile view"
			/> -->
		</div>
		<div class="flex flex-col items-center justify-center gap-12 text-white">
			<h2 class="max-w-screen-xl text-center text-2xl font-bold sm:text-3xl xl:text-4xl">
				About Me
			</h2>
			<p class="text-center font-['Inter'] font-normal text-white">
				I'm a full stack web developer with expertise in Angular, Svelte, and native technologies
				for front-end development, and Node.js for back-end development. I have experience in
				building dynamic and responsive web applications using these technologies, and I'm adaptable
				and able to learn new technologies quickly. Here are the back-ends I can create alongside
				the front-end application.
			</p>
			<div
				class="mx-8 grid auto-cols-max grid-cols-1 place-content-evenly gap-8 sm:mx-16 sm:grid-cols-2"
			>
				<article class="rounded-2xl border-2 border-[#808080] bg-white p-4">
					<h3 class="my-6 text-center text-2xl font-bold text-main-purple xl:text-4xl">CLASSIC</h3>
					<p class="mb-8 text-center font-['Inter'] font-normal text-black">
						Modern yet classic backend written in Node.JS using Express or Nest.JS with a variety of
						SQL and NOSQL databases.
					</p>
				</article>
				<article class="rounded-2xl border-2 border-[#808080] bg-white p-4">
					<h3 class="my-6 text-center text-2xl font-bold text-main-purple xl:text-4xl">
						PocketBase
					</h3>
					<p class="mb-8 text-center font-['Inter'] font-normal text-black">
						Modern aproach to backend using PocketBase that can provide database, authentication,
						file storage and an admin dashboard.
					</p>
				</article>
			</div>
		</div>
	</div>
</section>

<section id="projects" class="h-screen" />

<section id="reviews" class="h-screen" />
<footer />

<style>
	.hero-btn {
		height: 64px;
		width: 214px;

		font-size: 24px;
		line-height: 24px;
	}

	.contact-btn {
		background: #7355e7;
		box-shadow: 0px 13px 68px -22px #7355e7;
		border-radius: 19px;

		color: #f9f9f9;
	}
	.download-btn {
		background: #f9f9f9;
		border: 1px solid #f9f9f9;
		box-shadow: 5px 13px 68px rgba(154, 154, 154, 0.616);
		border-radius: 19px;

		margin-left: 2rem;
	}

	@media (max-width: 1024px) {
		.hero-btn {
			width: 160px;
			height: 48px;

			font-size: 16px;
			line-height: 16px;
		}

		.download-btn {
			margin-left: 1rem;
		}
	}

	@media (max-width: 400) {
		.hero-btn {
			height: 140px;
			width: 40px;

			font-size: 14px;
			font-weight: 14px;
		}

		.download-btn {
			margin-left: 0.5rem;
		}
	}
</style>
