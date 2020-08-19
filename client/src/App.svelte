<script>
	import Select from 'svelte-select'

	const greatings = 'HELLO FROM SVELTE'

	const noOptionsMessage = 'Загрузка...'

	const loadOptions = async () => {
		try {
			const data = await fetch('/data/items.json')
			const items = JSON.parse(data)
			return itemsByValue.byValue	
		} catch (error) {
			return []
		}
	}

	const items = [
		{ value: "smth", label: "Smth" },
		{ value: "marko", label: "Marko" },
		{ value: "uno", label: "Uno" },
		{ value: "polo", label: "Polo" },
		{ value: "foo", label: "Foo" },
		{ value: "bar", label: "Bar" },
		{ value: "baz", label: "Baz" }
	]
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
	<Select {loadOptions} {noOptionsMessage} />
</section>
