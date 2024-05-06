<script lang="ts">
	import CaseConverter from '$lib/components/template/caseConverter.svelte';
	import jsConvert from 'js-convert-case';

	let actions = {
		camelCase: jsConvert.toCamelCase,
		snakeCase: jsConvert.toSnakeCase,
		pascalCase: jsConvert.toPascalCase,
		dotCase: jsConvert.toDotCase,
		pathCase: jsConvert.toPathCase,
		textCase: jsConvert.toTextCase,
		sentenceCase: jsConvert.toSentenceCase,
		headerCase: jsConvert.toHeaderCase,
		lowerCase: jsConvert.toLowerCase,
		upperCase: jsConvert.toUpperCase,
		kebabCase: jsConvert.toKebabCase
	};
</script>

<section class="w-full flex flex-col justify-center items-center text-center py-5 prose">
	<h1>Simple Case Converter</h1>
	<CaseConverter {actions} />
</section>
