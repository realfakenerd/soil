<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createTabs, melt } from '@melt-ui/svelte';
	import { animate, timeline } from 'motion';
	import { circInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

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

	let h1: HTMLHeadingElement;
	$effect(() => {
		timeline(
			[
				['.wrapper', { clipPath: ['circle(0 at 0 0)', 'circle(150% at 0 0)'] }, { duration: 2 }],
				[
					'.logo',
					{ clipPath: ['circle(0 at 0 50%)', 'circle(150% at 0 50%)'] },
					{ duration: 2, at: '-.5' }
				],
				[h1, { backgroundPositionX: '100rem' }, { duration: 5, easing: 'linear' }],
				['.light', { top: '50%', filter: ['blur(0)', 'blur(500px)'] }, { duration: 5, at: 2 }],
				[
					'.btn',
					{
						clipPath: [
							'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
							'polygon(100% 0%, 0 0, 0 100%, 100% 100%)'
						]
					},
					{ duration: 1, at: '<' }
				]
			],
			{
				defaultOptions: {
					easing: [0.83, 0, 0.17, 1]
				}
			}
		);
	});

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		orientation: 'vertical',
		defaultValue: 'servico-1'
	});

	const triggers = [
		{
			id: 'servico-1',
			tittle: 'Criação de Sites',
			icon: 'mdi:web',
			description: `Desenvolvemos sites modernos e responsivos para atender suas necessidades.`
		},
		{
			id: 'servico-2',
			tittle: 'Desenvolvimento de Aplicativos',
			icon: 'mdi:application-braces',
			description: `Desenvolvemos sites modernos e responsivos para atender suas necessidades.`
		},
		{
			id: 'servico-3',
			tittle: 'Suporte Técnico',
			icon: 'mdi:auto-fix',
			description: `Oferecemos suporte técnico especializado para resolver seus problemas.`
		},
		{
			id: 'servico-4',
			tittle: 'Limpeza e Manutenção',
			icon: 'mdi:monitor-clean',
			description: `Realizamos limpeza e manutenção em seus dispositivos eletrônicos.`
		}
	];

	const [send, receive] = crossfade({
		duration: 250,
		easing: circInOut
	});
</script>

<svelte:head>
	<title>Auri - Inicio</title>
</svelte:head>

<section class="flex flex-col gap-16">
	<div
		class="flex gap-4 flex-col-reverse md:flex-row min-h-dvh justify-evenly w-full container items-center relative"
	>
		<div class="light w-1/2"></div>
		<div class="max-w-2xl w-full text-pretty flex flex-col gap-6">
			<div class="wrapper">
				<hgroup>
					<h1
						bind:this={h1}
						style="background-position-x: 0px;"
						class="text-display-large font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow to-primary"
					>
						Auri Tech
					</h1>
					<h2 class="text-headline-small lg:text-headline-large text-primary">
						Manutenção, conserto e montagem para todos os seus dispositivos
					</h2>
				</hgroup>

				<p class="mt-4 text-body-large">
					Soluções rápidas e eficazes para sites, crm e aplicativos
				</p>
			</div>

			<div class="flex justify-center gap-4">
				<a class="btn rounded-xl interactive-bg-secondary px-5 py-2.5 text-label-large" href="/">
					Get Started
				</a>
			</div>
		</div>
		<svg
			class="logo hidden md:block"
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

	<section
		use:melt={$root}
		class="container flex flex-col md:flex-row-reverse items-center w-full min-h-dvh relative md:gap-4 lg:gap-20"
	>
		<div class="bg-pattern"></div>
		<div class="flex flex-col gap-6 bg-surface rounded-2xl px-4 py-3">
			<header class="flex flex-col gap-2">
				<Icon class="bg-surface-variant p-2 rounded-lg w-10 h-10" icon="mdi:performance" />
				<h2 class="text-title-large">Maximize sua produtividade</h2>
			</header>

			<ul class="flex flex-col gap-1" use:melt={$list}>
				{#each triggers as { id, tittle, icon, description }}
					<li
						class="px-3 pb-3 pt-1 relative trigger rounded-xl transition-all hocus:ring-1 hocus:ring-primary"
						use:melt={$trigger(id)}
					>
						<main class="relative cursor-pointer z-10 inline-flex items-center gap-4 w-full">
							<Icon width="58px" {icon} />

							<div class="flex flex-col gap-2">
								<h2 class="text-label-large">{tittle}</h2>
								<p class="text-body-small">{description}</p>
							</div>
						</main>
						{#if $value === id}
							<span
								in:send={{ key: 'trigger' }}
								out:receive={{ key: 'trigger' }}
								class="absolute z-0 inset-0 bg-surface-variant w-full h-full rounded-[inherit]"
							></span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<div class="w-full">
			<div class="bg-surface px-6 py-5 rounded-2xl" use:melt={$content('servico-1')}>
				<div class="flex flex-col gap-4">
					<h2 class="text-title-large font-medium">Soluções de Desenvolvimento de Sites</h2>
					<p class="text-body-medium text-pretty">
						Nosso serviço de <strong>Desenvolvimento de Sites</strong> oferece soluções completas e personalizadas
						para criar a presença online perfeita para o seu negócio. Desenvolvemos desde sites institucionais
						e blogs até portfólios e lojas virtuais, garantindo um design moderno e funcionalidade otimizada
						para a melhor experiência do usuário.
					</p>
					<ul class="flex flex-col text-label-large">
						<li class="p-2 inline-flex gap-2 items-center">
							<Icon icon="mdi:code" />Sites Institucionais
						</li>
						<li class="p-2 inline-flex gap-2 items-center">
							<Icon icon="mdi:code" />Blogs e Portfólios
						</li>
						<li class="p-2 inline-flex gap-2 items-center">
							<Icon icon="mdi:code" />Loja Virtual (E-commerce)
						</li>
					</ul>
				</div>
			</div>
			<div class="bg-surface px-6 py-5 rounded-2xl" use:melt={$content('servico-2')}>
				<h2 class="text-title-large font-medium">Soluções de Desenvolvimento de Sites</h2>
				<p class="text-body-medium">
					Com nosso serviço de <strong>Desenvolvimento de Aplicativos</strong>, você pode
					transformar suas ideias em realidade. Criamos aplicativos para Android e iOS, além de
					aplicativos web que se adaptam às suas necessidades específicas. Também desenvolvemos
					softwares customizados para atender demandas particulares do seu negócio, com foco em
					inovação e eficiência.
				</p>
				<ul class="list-disc text-left pl-5 text-label-large">
					<li>Aplicativos Android e iOS</li>
					<li>Aplicativos Web</li>
					<li>Softwares Customizados</li>
				</ul>
			</div>
			<div class="bg-surface px-6 py-5 rounded-2xl" use:melt={$content('servico-3')}>
				<h2 class="text-title-large font-medium">Soluções de Desenvolvimento de Sites</h2>
				<p class="text-body-medium">
					Nossos <strong>Serviços de Suporte Técnico</strong> estão prontos para ajudar você a manter
					a sua infraestrutura de TI funcionando perfeitamente. Oferecemos manutenção de computadores,
					suporte remoto para resolver problemas à distância e configuração de redes para assegurar uma
					conectividade eficiente e segura.
				</p>
				<ul class="list-disc text-left pl-5 text-label-large">
					<li>Manutenção de Computadores</li>
					<li>Suporte Remoto</li>
					<li>Configuração de Redes</li>
				</ul>
			</div>
			<div class="bg-surface px-6 py-5 rounded-2xl" use:melt={$content('servico-4')}>
				<h2 class="text-title-large font-medium">Soluções de Desenvolvimento de Sites</h2>

				<p class="text-body-medium">
					Nosso serviço de <strong>Manutenção de Hardware</strong> garante que seus equipamentos estejam
					sempre em ótimo estado de funcionamento. Realizamos a limpeza completa do hardware, removemos
					vírus e otimizamos o desempenho do seu sistema, para que você possa usufruir de um computador
					rápido e seguro.
				</p>
				<ul class="list-disc text-left pl-5 text-label-large">
					<li>Limpeza de Hardware</li>
					<li>Remoção de Vírus</li>
					<li>Otimização de Desempenho</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="container mx-auto items-center justify-center flex-col bento gap-2">
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
	.bg-pattern {
		height: 100dvh;
		width: 100%;

		background-image: radial-gradient(theme('colors.primary') 5%, transparent 5%);
		background-position: 0% 0%;
		background-size: 3vmin 3vmin;

		position: absolute;
		left: 0;
		right: 0;
		z-index: -10;
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
		transform: translate(-50%, -60%);
		border-radius: 50%;
		animation: rotate 20s infinite linear;
		filter: blur(500px);
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
</style>
