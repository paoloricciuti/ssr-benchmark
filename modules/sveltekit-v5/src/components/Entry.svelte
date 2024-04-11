<script lang="ts">
	const { entry }: { entry: { id: string; name: string } } = $props();
</script>

<tr>
	<td>{entry.id}</td>
	<td>{entry.name}</td>
</tr>
