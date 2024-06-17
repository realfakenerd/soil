<script lang="ts">
	import Animation from "$lib/animation.svelte";

	let blob: HTMLElement;

	function moveBlob(event: MouseEvent) {
		const { clientX, clientY } = event;

		blob.animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`
			},
			{
				duration: 3000,
				fill: 'forwards',
				easing: 'ease-in-out'
			}
		);
	}
</script>

<svelte:head>
	<title>Soil - Inicio</title>
</svelte:head>

<svelte:body onmousemove={moveBlob} />

<section class="backdrop-blur-3xl">
	<div class="flex min-h-dvh justify-between w-full px-20">
		<div class="max-w-2xl w-full text-pretty self-center">
			<hgroup>
				<h1 class="text-display-medium font-medium">Soil Tech</h1>
				<h2 class="text-title-large text-primary">
					Manutenção, conserto e montagem para todos os seus dispositivos
				</h2>
			</hgroup>

			<p class="mt-4 text-body-large">
				Soluções rápidas e eficazes para computadores, videogames e smartphones
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a
					class="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
					href="/"
				>
					Get Started
				</a>
			</div>
		</div>
		<!-- <Animation/> -->
	</div>
</section>

<section class="bg-surface-variant container mx-auto min-h-dvh w-full">

</section>

<div bind:this={blob} class="blob bg-gradient-to-l"></div>

<style>
	.blob {
		background: linear-gradient(to left, theme('colors.primary'), theme('colors.tertiary'));
		position: fixed;
		aspect-ratio: 1;
		width: 200px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		animation: rotate 20s infinite linear;
		z-index: -1;
		filter: blur(50px);
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotate(0deg) scale(1);
		}
		50% {
			transform: translate(-50%, -50%) rotate(180deg) scale(1, 1.5);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg) scale(1);
		}
	}
</style>
