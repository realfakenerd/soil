<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createTabs, melt } from '@melt-ui/svelte';
	import { circInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		orientation: 'vertical',
		defaultValue: 'servico-1'
	});

	const [send, receive] = crossfade({
		duration: 250,
		easing: circInOut
	});

	const triggers = [
		{
			id: 'servico-1',
			tittle: 'Criação de Sites',
			icon: 'mdi:web',
			href: '/servicos',
			description: `Desenvolvemos sites modernos e responsivos para atender suas necessidades.`
		},
		{
			id: 'servico-2',
			tittle: 'Desenvolvimento de Aplicativos',
			icon: 'mdi:application-braces',
			href: '/servicos#desenvolvimentoApps',
			description: `Desenvolvemos sites modernos e responsivos para atender suas necessidades.`
		},
		{
			id: 'servico-3',
			tittle: 'Suporte Técnico',
			icon: 'mdi:auto-fix',
			href: '/servicos#suporteTecnico',
			description: `Oferecemos suporte técnico especializado para resolver seus problemas.`
		},
		{
			id: 'servico-4',
			tittle: 'Limpeza e Manutenção',
			icon: 'mdi:monitor-clean',
			href: '/servicos#limpezaManuntencao',
			description: `Realizamos limpeza e manutenção em seus dispositivos eletrônicos.`
		}
	];
</script>

<section
	use:melt={$root}
	class="section-servicos container mx-auto flex flex-col md:flex-row-reverse items-center w-full min-h-dvh relative md:gap-4 lg:gap-20"
>
	<div class="bg-pattern"></div>
	<div class="flex flex-col gap-6 bg-surface rounded-2xl px-4 py-3">
		<header class="flex flex-col gap-2">
			<Icon class="bg-surface-variant p-2 rounded-lg w-10 h-10" icon="mdi:performance" />
			<h2 class="text-title-large">Maximize sua produtividade</h2>
		</header>

		<ul class="flex flex-col gap-1" use:melt={$list}>
			{#each triggers as { id, tittle, icon, description, href }}
				<li
					class="px-3 pb-3 pt-1 relative trigger rounded-xl transition-all hocus:ring-1 hocus:ring-primary"
					use:melt={$trigger(id)}
				>
					<main class="relative cursor-pointer z-10 inline-flex items-center gap-4 w-full">
						<Icon width="58px" {icon} />

						<div class="flex flex-col gap-2">
							<h2 class="text-label-large">{tittle}</h2>
							<p class="text-body-small">{description}</p>
							<a
								{href}
								class="text-label-medium text-primary inline-flex items-center gap-1 underline"
							>
								<Icon icon="mdi:link" />
								<span> saiba mais </span>
							</a>
						</div>
					</main>	
				</li>
			{/each}
		</ul>
	</div>
	<div class="w-full hidden md:block">
		<div class="bg-surface md:px-6 py-5 rounded-2xl" use:melt={$content('servico-1')}>
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
				Com nosso serviço de <strong>Desenvolvimento de Aplicativos</strong>, você pode transformar
				suas ideias em realidade. Criamos aplicativos para Android e iOS, além de aplicativos web
				que se adaptam às suas necessidades específicas. Também desenvolvemos softwares customizados
				para atender demandas particulares do seu negócio, com foco em inovação e eficiência.
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
				Nossos <strong>Serviços de Suporte Técnico</strong> estão prontos para ajudar você a manter a
				sua infraestrutura de TI funcionando perfeitamente. Oferecemos manutenção de computadores, suporte
				remoto para resolver problemas à distância e configuração de redes para assegurar uma conectividade
				eficiente e segura.
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
