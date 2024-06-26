<script lang="ts">
	import { animate } from 'motion';

	$effect(() => {
		animate(
			'.bg-pattern',
			{
				clipPath: 'circle(100% at 50% 50%)',
				backgroundSize: ['3vmin 3vmin']
			},
			{
				clipPath: {
					duration: 4,
					easing: [0.68,-0.55,0.27,1.55]
				},
				backgroundSize: {
					duration: 3,
					easing: [0.45, 0, 0.55, 1],
				},
				allowWebkitAcceleration: true
			}
		);
	});
</script>

<svelte:head>
	<title>Auri - Serviços</title>
</svelte:head>

<section class="bg-pattern">
	<h1 class="text-display-large">Serviços</h1>

	<div id="criacaoSites">Criação de sites</div>
	<div id="desenvolvimentoApps">Criação de apps</div>
	<div id="suporteTecnico">Criação de suporte</div>
	<div id="limpezaManuntencao">Criação de limpeza</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		clip-path: circle(0 at 50% 50%);
		background-size: 2.75vmin 2.75vmin;
	}
</style>