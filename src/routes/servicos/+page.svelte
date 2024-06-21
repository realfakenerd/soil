<script lang="ts">
	import { animate } from 'motion';

	$effect(() => {
		animate(
			'.bg-pattern',
			{
				clipPath: ['circle(0 at 50% 50%)', 'circle(100% at 50% 50%)'],
				backgroundSize: ['2.75vmin 2.75vmin', '3vmin 3vmin']
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

<section class="bg-pattern flex items-center" style="will-change: clip-path;">
	<h1 class="text-display-large">Serviços</h1>
</section>
