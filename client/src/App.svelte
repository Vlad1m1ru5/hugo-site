<script>
	import Item from './item'
	import AsyncSelect from './async-select'

	const greatings = 'HELLO FROM SVELTE'
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
</style>

<section class='site-search'>
	<h1 class='site-search__title site-search__title--light'>{greatings}</h1>
	<AsyncSelect {Item} />
</section>
