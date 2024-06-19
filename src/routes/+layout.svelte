<script lang="ts">
	import '../app.css';
	import {enableCache} from '@iconify/svelte'

	enableCache('all');
	function animateNavBar(node: HTMLElement) {
		let lastScrolltop = $state(0);
		let ticking = $state(false);

		function onScroll() {
			const scrollTop = document.documentElement.scrollTop;

			if (!ticking) {
				requestAnimationFrame(() => {
					if (scrollTop > lastScrolltop) {
						node.animate(
							{ backgroundColor: 'rgb(var(--color-surface))' },
							{ duration: 1000, fill: 'forwards' }
						);
					}
					lastScrolltop = scrollTop <= 0 ? 0 : scrollTop;
					ticking = false;
				});
				ticking = true;
			}
		}

		addEventListener('scroll', onScroll);
	}

	let { children } = $props();
</script>

<header use:animateNavBar class="shadow-lg shadow-surface/20 fixed top-0 z-10 w-full">
	<div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="md:flex md:items-center md:gap-12">
				<a class="inline-flex gap-4 items-center" href="/">
					<svg
						width="32"
						height="32"
						viewBox="0 0 294 410"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M134.81 16.9995C140.794 8.65427 153.206 8.65428 159.19 16.9995L287.732 196.259C291.479 201.484 291.479 208.516 287.732 213.741L159.19 393C153.206 401.346 140.794 401.346 134.81 393L6.26798 213.741C2.52119 208.516 2.52119 201.484 6.26798 196.259L134.81 16.9995Z"
							fill="#F2DB64"
						/>
						<path d="M151 390L11 205H151V390Z" fill="#6A92D5" />
						<path d="M151 390L283.82 205H217.41H151V390Z" fill="#173574" />
						<path d="M151 20V112.5V205H217.41H283.82L217.41 112.5L151 20Z" fill="#09369E" />
					</svg>

					<h1 class="text-body-large">Soil Tech</h1>
				</a>
			</div>

			<div class="hidden md:block">
				<nav aria-label="Global">
					<ul class="flex items-center gap-6 text-body-medium text-on-surface">
						<li>
							<a
								class="px-5 py-2.5 hocus:text-primary/75 transition-colors duration-200"
								href="/servicos"
							>
								Serviços
							</a>
						</li>

						<li>
							<a
								class="px-5 py-2.5 hocus:text-primary/75 transition-colors duration-200"
								href="/blog">Blog</a
							>
						</li>

						<li>
							<a
								class="px-5 py-2.5 hocus:text-primary/75 transition-colors duration-200"
								href="/contato"
							>
								Contato
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<a class="rounded-xl interactive-bg-secondary px-5 py-2.5 text-label-large" href="/sobre">
					Saiba mais
				</a>

				<div class="block md:hidden">
					<button class="rounded bg-gray-100 p-2 text-gray-600 transition hocus:text-gray-600/75">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</header>

{@render children()}
