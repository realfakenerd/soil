<script lang="ts">
	import ServicesTab from '$lib/ServicesTab.svelte';
	import { timeline } from 'motion';

	const depoimentos = [
		{
			texto: `"O serviço de limpeza superou minhas expectativas! A equipe foi muito profissional e o resultado foi incrível. Com certeza contratarei novamente."`,
			cliente: 'Maria Silva',
			servico: 'Limpeza',
			rows: 'span 2',
			columns: 'span 1'
		},
		{
			texto: `"O atendimento foi excelente! Resolveram meu problema de forma rápida e com muita gentileza. Com certeza voltarei a utilizar os serviços."`,
			cliente: 'João Souza',
			servico: 'Instalação',
			rows: 'span 1',
			columns: 'span 1'
		},
		{
			texto: `"Tive uma experiência fantástica com o serviço de manutenção! O técnico foi super atencioso e eficiente. Altamente recomendado!"`,
			cliente: 'Carla Oliveira',
			servico: 'Manutenção',
			rows: 'span 2',
			columns: 'span 2'
		},
		{
			texto: `"O produto é de excelente qualidade e a montagem foi realizada de forma rápida e precisa. Fiquei muito satisfeito com o resultado!"`,
			cliente: 'Pedro Lima',
			servico: 'Montagem',
			rows: 'span 1',
			columns: 'span 1'
		},
		{
			texto: `"A reparação foi feita de maneira impecável e o atendimento foi extremamente cortês. Recomendo a todos! O suporte técnico foi incrível! Resolveram meu problema em minutos e foram muito simpáticos. Desde o início, a equipe demonstrou um nível de profissionalismo que me impressionou bastante. A limpeza foi detalhada, atendendo todas as minhas expectativas e deixando meu ambiente impecável. Além disso, eles me forneceram dicas úteis para manter tudo organizado. Super recomendo!"`,
			cliente: 'Ana Pereira',
			servico: 'Reparação',
			rows: 'span 1',
			columns: 'span 2'
		},
		{
			texto: `"O suporte técnico foi incrível! Resolveram meu problema em minutos e foram muito simpáticos. Desde o início, a equipe demonstrou um nível de profissionalismo que me impressionou bastante. A limpeza foi detalhada, atendendo todas as minhas expectativas e deixando meu ambiente impecável. Além disso, eles me forneceram dicas úteis para manter tudo organizado. Super recomendo!"`,
			cliente: 'Bruno Costa',
			servico: 'Limpeza',
			rows: 'span 1',
			columns: 'span 2'
		}
	];

	$effect(() => {
		timeline(
			[
				['.wrapper', { clipPath: 'circle(150% at 0 0)' }, { duration: 2 }],
				['.logo', { clipPath: 'circle(150% at 0 50%)' }, { duration: 2, at: '-.5' }],
				['.light', { top: '50%', filter: 'blur(500px)' }, { duration: 5, at: 2 }],
				[
					'.btn',
					{
						clipPath: ['polygon(100% 0%, 0 0, 0 100%, 100% 100%)']
					},
					{ duration: 1, at: '<' }
				],
				['.title', { backgroundPositionX: '100rem' }, { duration: 5, easing: 'linear' }]
			],
			{
				defaultOptions: {
					easing: [0.83, 0, 0.17, 1]
				}
			}
		);
	});	
</script>

<svelte:head>
	<title>Auri - Inicio</title>
</svelte:head>

<section class="section-container">
	<div class="section-hero">
		<div class="light"></div>
		<div class="wrapper-text">
			<div class="wrapper">
				<hgroup>
					<h1 class="title">Auri Tech</h1>
					<h2>Manutenção, conserto e montagem para todos os seus dispositivos</h2>
				</hgroup>

				<p>Soluções rápidas e eficazes para sites, crm e aplicativos</p>
			</div>

			<div class="flex justify-center gap-4">
				<a class="btn rounded-xl interactive-bg-secondary px-5 py-2.5 text-label-large" href="/">
					Get Started
				</a>
			</div>
		</div>

		<svg
			class="logo"
			width="350"
			height="400"
			viewBox="0 0 350 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M167.474 8.60088C171.458 4.04761 178.542 4.04761 182.526 8.60088L344.238 193.415C347.537 197.185 347.537 202.815 344.238 206.585L182.526 391.399C178.542 395.952 171.458 395.952 167.474 391.399L5.76191 206.585C2.46293 202.815 2.46294 197.185 5.76192 193.415L167.474 8.60088Z"
				fill="#F2DB64"
			/>
			<path d="M174.667 390.488L7.99996 200.244H174.667V390.488Z" fill="#6A92D5" />
			<path d="M174.667 390.488L341.333 200.244H258H174.667V390.488Z" fill="#173574" />
			<path d="M174.667 10V105.122V200.244H258H341.333L258 105.122L174.667 10Z" fill="#09369E" />
		</svg>
	</div>

	<ServicesTab />

	<section class="container items-center justify-center flex-col bento gap-2">
		<h2 class="text-headline-medium font-bold text-center">Depoimentos de Clientes</h2>
		<div
			class="bg-surface/70 rounded-3xl p-4 min-h-[50dvh] w-full grid-cols-1 lg:grid-rows-[1fr_1fr_2fr] lg:grid-cols-[2fr_3fr_1fr_2fr] bento-container"
		>
			{#each depoimentos as { texto, servico, cliente, rows, columns }}
				<div
					style:--rows={rows}
					style:--columns={columns}
					class="bento-item lg:row-[var(--rows)] lg:col-[var(--columns)] rounded-2xl flex flex-col text-pretty justify-between w-full p-4 gap-4 bg-surface-variant/10"
				>
					<p class="text-body-medium">
						{texto}
					</p>
					<div class="flex gap-x-4 items-center">
						<img
							class="w-10 h-10 rounded-full ring ring-primary bg-tertiary/30"
							loading="lazy"
							src={`https://api.dicebear.com/9.x/personas/svg?size=40&seed=${cliente.split(' ')[0]}`}
							alt="Foto de Maria"
						/>
						<div>
							<p class="text-primary text-label-large">{cliente}</p>
							<p class="text-secondary text-label-small">{servico}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</section>

<style>
	.section-container {
		display: flex;
		flex-direction: column;
		gap: theme('size.16');
	}

	.section-hero {
		display: flex;
		gap: theme('size.4');
		flex-direction: column-reverse;
		min-height: 100dvh;
		justify-content: space-evenly;
		width: 100%;
		align-items: center;
		position: relative;
	}

	.wrapper-text {
		max-width: 42rem;
		width: 100%;
		text-wrap: pretty;
		display: flex;
		flex-direction: column;
		gap: theme('size.6');
	}

	.bento {
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;
	}

	.bento-container {
		display: grid;
		place-items: center;
		gap: 1ch;
		min-height: inherit;
		flex: 2 0 320px;
	}

	.bento-item {
		height: 100%;
		width: 100%;
	}

	.light {
		background: linear-gradient(to left, theme('colors.primary'), theme('colors.yellow'));
		position: absolute;
		aspect-ratio: 1;
		top: -60%;
		left: 50%;
		width: 50%;
		transform: translate(-50%, -60%);
		border-radius: 50%;
		animation: rotate 20s infinite linear;
		filter: blur(0px);
	}

	.wrapper {
		padding-inline: theme('size.4');
		clip-path: circle(0 at 0 0);

		& h2 {
			color: theme('colors.primary');
			@apply text-title-large;
		}

		& p {
			margin-top: theme('size.4');
			@apply text-body-large;
		}
	}

	.title {
		font-weight: bold;
		background-clip: text;
		color: transparent;
		background-position-x: 0px;
		background-image: linear-gradient(
			to right,
			theme('colors.primary-container'),
			theme('colors.yellow'),
			theme('colors.primary-container')
		);

		@apply text-display-small;
	}

	.logo {
		clip-path: circle(0 at 0 50%);
		display: none;
	}

	.btn {
		clip-path: polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%);
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	@media (min-width: 768px) {
		.section-hero {
			flex-direction: row;
		}

		.title {
			@apply text-display-large;
		}

		.logo {
			display: block;
		}
	}

	@media (min-width: 1024px) {
		.wrapper {
			& h2 {
				@apply text-headline-large;
			}
		}
	}
</style>
