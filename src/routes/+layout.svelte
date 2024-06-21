<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.css';
	import Icon, { enableCache } from '@iconify/svelte';

	enableCache('all');

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();
</script>

<header style="view-transition-name: navbar;" class="fixed top-0 z-50 w-full sm:p-2 lg:py-8">
	<div
		class="container w-full bg-surface flex items-center justify-between gap-4 px-3 py-2 sm:rounded-2xl"
	>
		<div class="flex items-center gap-12">
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

				<h1 class="text-title-large">Auri Tech</h1>
			</a>
		</div>

		<nav class="hidden md:block" aria-label="Global">
			<ul class="flex items-center text-body-medium text-on-surface">
				<li aria-current={$page.url.pathname === '/servicos' ? 'page' : undefined}>
					<a href="/servicos"> Serviços </a>
				</li>
				<li aria-current={$page.url.pathname === '/contato' ? 'page' : undefined}>
					<a href="/contato"> Contato </a>
				</li>
				<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
					<a href="/blog">Blog</a>
				</li>
			</ul>
		</nav>

		<div class="flex items-center gap-4">
			<a class="rounded-lg interactive-bg-secondary px-5 py-2.5 text-label-large" href="/sobre">
				Saiba mais
			</a>

			<div class="block md:hidden">
				<button class="rounded bg-gray-100 p-2 text-gray-600 transition hocus:text-gray-600/75">
					<Icon icon="mdi:menu" />
				</button>
			</div>
		</div>
	</div>
</header>

<main>
	{@render children()}
</main>

<style>
	li {
		position: relative;

		a {
			padding-inline: 1.25rem;
			padding-block: 0.625rem;
			transition: color 200ms;

			&:hover,
			&:focus {
				color: theme('colors.primary');
			}
		}

		&[aria-current='page']::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: theme('colors.primary');
			bottom: -4px;
			left: calc(50%);
			transform: translateX(-50%);
			view-transition-name: active-page;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
