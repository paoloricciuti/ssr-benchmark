<script lang="ts">
	import Entry from '../components/Entry.svelte';

	const { data }: any = $props();
</script>

<main>
	<table>
		{#each data.entries as entry}
			<Entry {entry} />
		{/each}
	</table>
</main>
