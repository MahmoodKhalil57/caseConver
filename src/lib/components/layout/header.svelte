<script lang="ts">
	import Logo from '$lib/components/template/logo.svelte';
	import DarkModeToggle from '$lib/components/ui/DarkModeToggle.svelte';
</script>

<header class="z-20 relative header min-h-header w-full">
	<div class="relative flex justify-center navbar bg-base-100">
		<a href="/"><Logo /></a>
		<ul class="gap-3 px-1 text-lg menu menu-horizontal">
			<li class="flex items-center justify-center absolute">
				<DarkModeToggle themes={['light', 'forest']} />
			</li>
		</ul>
		<!-- <div class="absolute flex w-full pointer-events-none sm:hidden">
			<label
				for="main-menu-drawer"
				class="mx-6 text-3xl cursor-pointer pointer-events-auto hover:scale-105 drawer-button i-material-symbols-list-rounded"
			/>
		</div> -->
	</div>
</header>
