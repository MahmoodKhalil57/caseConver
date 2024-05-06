<script lang="ts">
	import TextAreaInput from '../form/textAreaInput.svelte';
	import ButtonDefault from '../ui/buttonDefault.svelte';

	export let actions: {
		[key: string]: (str: string) => string;
	};

	let textareaValue = '';
</script>

<div class="max-w-4xl w-full flex flex-col gap-8 px-3">
	<TextAreaInput copy Class="aspect-video" bind:value={textareaValue} />
	<div class="w-full flex flex-wrap items-center justify-center gap-2">
		{#each Object.entries(actions) as [title, action]}
			<ButtonDefault onClick={() => (textareaValue = action(textareaValue))}>
				{actions?.sentenceCase ? actions.sentenceCase(title) : title}
			</ButtonDefault>
		{/each}
	</div>

	<div class="overflow-x-auto max-w-fit place-self-center">
		<table class="table table-xs">
			<thead>
				<tr>
					<th>Action</th>
					<td>In</td>
					<td>Out</td>
				</tr>
			</thead>
			<tbody>
				{#each Object.entries(actions) as [title, action]}
					<tr>
						<th>
							{actions.sentenceCase(title)}
						</th>
						<td>param-case</td>
						<td>
							{action('param-case')}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<p>Credits: <a href="https://www.npmjs.com/package/js-convert-case">js-convert-case</a></p>
</div>
