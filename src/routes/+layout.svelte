<script>
	import '../app.css';

	let { children } = $props();
</script>

<header class="shadow-lg shadow-surface/20 fixed top-0 z-10 w-full">
	<div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="md:flex md:items-center md:gap-12">
				<a class="inline-flex gap-4 items-center" href="/">
					<svg
						class="group"
						width="32"
						height="32"
						viewBox="0 0 34 34"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17.0124 1H13.8752C13.8306 1 13.7915 1.02868 13.7798 1.07002L13.3548 2.56793C13.1324 3.25687 12.6876 4.06459 11.353 4.70601L8.31333 6.39272C7.57193 6.77283 7.34952 7.08166 5.71845 6.89161L4.2551 6.66472C4.21381 6.65832 4.1728 6.67759 4.15269 6.71284L1.01219 12.2166C0.989665 12.256 0.999045 12.3053 1.03465 12.3345L2.15975 13.2584C3.19771 14.1136 3.29656 15.1826 3.29656 16.513V19.6488C3.29656 20.7892 2.8023 21.3118 2.0609 21.977L1.13503 22.7113C1.09862 22.7401 1.08853 22.7897 1.11094 22.8297L4.24564 28.416C4.26844 28.4566 4.31834 28.4756 4.3639 28.461L5.76787 28.0111C6.68226 27.7498 7.57193 27.8686 8.53575 28.3675L12.3169 30.4818C13.1077 31.0045 13.256 31.5509 13.3301 31.9785L13.5361 32.9244C13.5457 32.9685 13.586 33 13.6328 33H16.9876H20.3672C20.414 33 20.4544 32.9685 20.4639 32.9244L20.6699 31.9785C20.744 31.5509 20.8923 31.0045 21.6831 30.4818L25.4643 28.3675C26.4281 27.8686 27.3177 27.7498 28.2321 28.0111L29.6361 28.461C29.6817 28.4756 29.7316 28.4566 29.7544 28.416L32.8891 22.8297C32.9115 22.7897 32.9014 22.7401 32.865 22.7113L31.9391 21.977C31.1977 21.3118 30.7034 20.7892 30.7034 19.6488V16.513C30.7034 15.1826 30.8023 14.1136 31.8402 13.2584L32.9653 12.3345C33.001 12.3053 33.0103 12.256 32.9878 12.2166L29.8473 6.71284C29.8272 6.67759 29.7862 6.65832 29.7449 6.66472L28.2816 6.89161C26.6505 7.08166 26.4281 6.77283 25.6867 6.39272L22.647 4.70601C21.3124 4.06459 20.8676 3.25687 20.6452 2.56793L20.2202 1.07002C20.2085 1.02868 20.1694 1 20.1249 1H16.9876"
							class="stroke-primary stroke-2 group-hover:stroke-1 transition-all duration-200"
						/>
						<path
							d="M26.6096 17C26.6096 22.1041 22.2937 26.3085 16.8859 26.3085C11.4781 26.3085 7.16223 22.1041 7.16223 17C7.16223 11.8958 11.4781 7.69141 16.8859 7.69141C22.2937 7.69141 26.6096 11.8958 26.6096 17Z"
							class="stroke-primary stroke-2 group-hover:stroke-1 transition-all duration-75"
						/>
						<path
							d="M18.1992 15.9786C18.0376 15.885 17.8318 15.9986 17.8318 16.1799L17.8318 18.2293L16.6966 19.0088L15.5614 18.2293V16.1799C15.5614 15.9975 15.354 15.886 15.1913 15.9801C14.3438 16.4712 13.7773 17.3644 13.7772 18.3848C13.7772 19.4773 14.4444 20.4194 15.3991 20.8825L15.3991 26.4646C15.3991 26.4646 15.98 26.9116 16.6964 26.9116C17.4129 26.9116 17.9937 26.4646 17.9937 26.4646L17.9937 20.8874C18.9517 20.427 19.6157 19.4848 19.6157 18.3851C19.6157 17.3635 19.0478 16.4694 18.1992 15.9786Z"
							class="fill-primary"
						/>
					</svg>
					<h1 class="text-body-large">Soil Tech</h1>
				</a>
			</div>

			<div class="hidden md:block">
				<nav aria-label="Global">
					<ul class="flex items-center gap-6 text-body-medium text-on-surface">
						<li>
							<a class="px-5 py-2.5 hover:text-primary/75 transition-colors duration-200" href="/servicos"> Serviços </a>
						</li>

						<li>
							<a class="px-5 py-2.5 hover:text-primary/75 transition-colors duration-200" href="/blog">Blog</a>
						</li>

						<li>
							<a class="px-5 py-2.5 hover:text-primary/75 transition-colors duration-200" href="/contato"> Contato </a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<a class="rounded-xl interactive-bg-secondary px-5 py-2.5 text-label-large" href="/sobre">
					Saiba mais
				</a>

				<div class="block md:hidden">
					<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
