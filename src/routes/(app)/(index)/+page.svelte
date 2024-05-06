<script lang="ts">
	import CaseConverter from '$lib/components/template/caseConverter.svelte';
	import jsConvert from 'js-convert-case';

	let actions = {
		sentence_case: jsConvert.toSentenceCase,
		header_case: jsConvert.toHeaderCase,
		lower_case: jsConvert.toLowerCase,
		upper_case: jsConvert.toUpperCase,
		kebab_case: jsConvert.toKebabCase,
		camel_case: jsConvert.toCamelCase,
		snake_case: jsConvert.toSnakeCase,
		pascal_case: jsConvert.toPascalCase,
		dot_case: jsConvert.toDotCase,
		path_case: jsConvert.toPathCase,
		text_case: jsConvert.toTextCase
	};
</script>

<section class="w-full flex flex-col justify-center items-center text-center py-5 prose">
	<h1>Simple Case Converter</h1>
	<CaseConverter {actions} />
</section>
