<script lang="ts">
	let blob: HTMLElement;

	function moveBlob(event: MouseEvent) {
		const { clientX, clientY } = event;

		requestAnimationFrame(() => {
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
		});
	}

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

	function randomizeLetters(event: MouseEvent | FocusEvent) {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const el = event.target as HTMLHeadingElement;
		const originalText = el.dataset.value as string;
		let iterations = 0;

		const interval = setInterval(() => {
			el.innerText = el.innerText
				.split('')
				.map((letter, index) => {
					if (index < iterations) return originalText[index];

					return letters[Math.floor(Math.random() * letters.length)];
				})
				.join('');

			if (iterations >= originalText.length) clearInterval(interval);
			iterations += 1 / 3;
		}, 30);
	}
</script>

<svelte:head>
	<title>Auri - Inicio</title>
</svelte:head>

<svelte:body onmousemove={moveBlob} />

<section class="backdrop-blur-3xl">
	<div class="flex min-h-dvh justify-between w-full container mx-auto">
		<div class="max-w-2xl w-full text-pretty self-center flex flex-col gap-6">
			<div>
				<hgroup>
					<h1
						onmouseover={randomizeLetters}
						onfocus={randomizeLetters}
						data-value="Auri Tech"
						class="text-display-medium font-medium"
					>
						Auri Tech
					</h1>
					<h2 class="text-title-large text-primary">
						Manutenção, conserto e montagem para todos os seus dispositivos
					</h2>
				</hgroup>

				<p class="mt-4 text-body-large">
					Soluções rápidas e eficazes para sites, crm e aplicativos
				</p>
			</div>

			<div class="flex justify-center gap-4">
				<a class="rounded-xl interactive-bg-secondary px-5 py-2.5 text-label-large" href="/">
					Get Started
				</a>
			</div>
		</div>
		<!-- <Animation/> -->
	</div>

	<section class="container mx-auto p-6">
		<div class="bg-surface shadow-md rounded-lg p-6">
			<h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Nossos Serviços</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

				<!-- Serviço de Criação de Sites -->
				<div class="bg-surface-variant text-on-surface-variant rounded-md p-5 flex flex-col items-center justify-between">
					<h3 class="text-title-large mb-3">Criação de Sites</h3>
					<p class="text-center mb-4 text-body-medium">
						Desenvolvemos sites modernos e responsivos para atender suas necessidades.
					</p>
					<ul class="list-disc text-left pl-5 text-label-large">
						<li>Sites Institucionais</li>
						<li>Blogs e Portfólios</li>
						<li>Loja Virtual (E-commerce)</li>
					</ul>
				</div>

				<!-- Serviço de Desenvolvimento de Aplicativos -->
				<div class="text-on-surface rounded-md shadow-xl shadow-surface-variant/10 hover:shadow-surface-variant/20 transition-shadow p-5 flex flex-col items-center justify-between">
					<h3 class="text-title-large font-semibold mb-3">Desenvolvimento de Aplicativos</h3>
					<p class="text-center mb-4 text-body-medium">
						Criamos aplicativos móveis e desktop personalizados para sua empresa.
					</p>
					<ul class="list-disc text-left pl-5 text-label-large">
						<li>Aplicativos Android e iOS</li>
						<li>Aplicativos Web</li>
						<li>Softwares Customizados</li>
					</ul>
				</div>

				<!-- Serviço de Suporte Técnico -->
				<div class="bg-surface-variant text-on-surface-variant rounded-md p-5 flex flex-col items-center justify-between">
					<h3 class="text-title-large font-semibold mb-3">Suporte Técnico</h3>
					<p class="text-center mb-4 text-body-medium">
						Oferecemos suporte técnico especializado para resolver seus problemas.
					</p>
					<ul class="list-disc text-left pl-5 text-label-large">
						<li>Manutenção de Computadores</li>
						<li>Suporte Remoto</li>
						<li>Configuração de Redes</li>
					</ul>
				</div>

				<!-- Serviço de Limpeza e Manutenção -->
				<div class="bg-red-500 text-on-surface rounded-md shadow-xl shadow-surface-variant/10 hover:shadow-surface-variant/20 transition-shadow p-5 flex flex-col items-center justify-between">
					<h3 class="text-title-large font-semibold mb-3">Limpeza e Manutenção</h3>
					<p class="text-center mb-4 text-body-medium">
						Realizamos limpeza e manutenção em seus dispositivos eletrônicos.
					</p>
					<ul class="list-disc text-left pl-5 text-label-large">
						<li>Limpeza de Hardware</li>
						<li>Remoção de Vírus</li>
						<li>Otimização de Desempenho</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="container mx-auto items-center justify-center flex-col bento">
		<h2 class="text-headline-medium font-bold text-center mb-8">Depoimentos de Clientes</h2>
		<div class="bg-surface/70 rounded-3xl p-4 min-h-[50dvh] w-full bento-container">
			{#each depoimentos as { texto, servico, cliente, rows, columns }}
				<div
					style:--rows={rows}
					style:--columns={columns}
					class="bento-item rounded-2xl flex flex-col text-pretty justify-between w-full p-4 gap-4 bg-surface-variant/10"
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

<div bind:this={blob} class="blob bg-gradient-to-l"></div>

<style>
	.bento {
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;
		padding: 1ch;
	}

	.bento-container {
		display: grid;
		place-items: center;
		grid-template-rows: 1fr 1fr 2fr;
		grid-template-columns: 2fr 3fr 1fr 2fr;
		gap: 1ch;
		min-height: inherit;
		flex: 2 0 320px;
	}

	.bento-item {
		height: 100%;
		width: 100%;
		grid-column: var(--columns, span 1);
		grid-row: var(--rows, span 1);
	}

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
