<script>
	import Select from 'svelte-select'
	import Item from './item'

	const greatings = 'HELLO FROM SVELTE'

	const noOptionsMessage = 'Нет результатов'
	const placeholder = 'Начните вводить текст поиска'
	let hideEmptyState = true

	const loadOptions = async () => {
		try {
			const response = await fetch('/data/items.json')
			const items = await response.json()
			return items.byValue	
		} catch (error) {
			return []
		}
	}

	const getOptionLabel = (option) => option.label;
	
</script>

<style>
	:root {
		--main-color: #bc8f8f;
		--complement-color: #8fbc8f;
	}

	.site-search {
		--placeholderColor: var(--main-color);
		
		--border: 1px solid var(--main-color);
		--borderRadius: 10px;
		--borderFocusColor: var(--complement-color);
		
		--itemIsActiveBG: var(--main-color);
		--itemHoverBG: var(--complement-color);
	}

	.site-search__title--light {
	  color: var(--main-color);
	}

	@media screen and (min-width: 560px) {
		.site-search {
			width: 50%;
		}
	}
</style>

<section class='site-search'>
	<h1 class='site-search__title site-search__title--light'>{greatings}</h1>
	<Select
		{placeholder}
		{loadOptions}
		{getOptionLabel}
		{noOptionsMessage}
		{Item}
	/>
</section>
