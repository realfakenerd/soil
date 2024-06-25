<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Icon, { enableCache } from '@iconify/svelte';
	import { melt, createDropdownMenu } from '@melt-ui/svelte';

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

	const {
		elements: { trigger, menu, item },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true
	});

	let { children } = $props();
</script>

<header>
	<section class="container">
		<div class="logo-container">
			<a href="/">
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

				<h1>Auri Tech</h1>
			</a>
		</div>

		<nav aria-label="Global">
			<ul>
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

		<div class="menu-container">
			<a class="btn interactive-bg-secondary" href="/sobre"> Saiba mais </a>

			<div class="menu-wrapper">
				<button use:melt={$trigger} class="btn-trigger">
					<span class="sr-only">Menu</span>
					<Icon width="24px" icon="mdi:menu" />
				</button>

				<menu transition:fly use:melt={$menu}>
					<li use:melt={$item}>
						<a href="/servicos">
							<Icon width="24px" icon="mdi:performance" />
							<span>Serviços</span>
						</a>
					</li>
					<li use:melt={$item}>
						<a href="/contato">
							<Icon width="24px" icon="mdi:contact" />
							<span>Contato</span>
						</a>
					</li>
					<li use:melt={$item}>
						<a href="/blog">
							<Icon width="24px" icon="mdi:newspaper" />
							<span>Blog</span>
						</a>
					</li>
				</menu>
			</div>
		</div>
	</section>
</header>

<main>
	{@render children()}
</main>

<style>
	header {
		position: fixed;
		top: 0;
		z-index: 50;
		width: 100%;
		view-transition-name: navbar;
	}

	.container {
		background-color: theme('colors.surface');
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: theme('size.4');
		padding-inline: theme('size.3');
		padding-block: theme('size.2');

		.logo-container {
			display: flex;
			align-items: center;
			gap: theme('size.12');

			a {
				display: flex;
				gap: theme('size.4');
				align-items: center;
			}

			h1 {
				@apply text-title-large;
			}
		}
	}

	nav {
		display: none;
	}

	ul {
		display: flex;
		align-items: center;
		color: theme('colors.on-surface');

		@apply text-body-medium;

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
	}
	
	.btn-trigger {
		color: theme('colors.on-surface');
		padding: theme('size.2');
		border-radius: 999px;
		transition: color 150ms;

		&[data-state='open'] {
			color: theme('colors.primary');
		}
	}

	.menu-container {
		display: flex;
		align-items: center;
		gap: theme('size.1');
	}

	.menu-wrapper {
		display: flex;
		align-items: center;
	}

	menu {
		position: relative;
		z-index: 50;
		background-color: theme('colors.surface-variant');
		border-radius: theme('borderRadius.md');
		padding: theme('size.2') theme('size.3');
		min-width: 112px;
		max-width: 280px;
		transform: scale(1);
		transform-origin: top center;
		transition: transform 200ms ease, opacity 150ms ease;

		@apply text-label-large;

		&[data-state='closed'] {
			opacity: 0;
			transform: scale(0);
		}


		li {
			display: flex;
			align-items: center;
			justify-content: start;
			height: 48px;
			transition: color 150ms;

			&:hover {
				color: theme('colors.primary');
			}
		}

		a {
			display: inline-flex;
			gap: theme('size.3');
			align-items: center;
		}
	}

	@media (min-width: 640px) {
		header {
			padding: theme('size.2');
		}

		.container {
			border-radius: theme('borderRadius.2xl');
		}
	}

	@media (min-width: 768px) {
		nav {
			display: block;
		}

		.menu-wrapper {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		header {
			padding-block: theme('size.8');
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
