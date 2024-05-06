<script lang="ts">
	export let menu = false;

	const links: { text: string; href: string }[] = [
		// {
		// 	text: 'Home',
		// 	href: '/'
		// }
	];
</script>

{#each links as { href, text }}
	<li>
		<a {href}>{text}</a>
	</li>
{/each}
