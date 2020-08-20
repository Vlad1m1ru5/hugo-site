<script>
  import Select from 'svelte-select'
  
  export let Item = undefined
  
	const optionIdentifier = "id"
  const noOptionsMessage = 'Нет результатов'
	const placeholder = 'Начните вводить текст поиска'

	const getSelectionLabel = (option, ...args) => {
		console.log(option)
		return option.title
	}
	
	const loadOptions = async (filterText) => {

		const pattern = filterText.trim().toLocaleLowerCase()

		const itemFilter = ({ title, contents, permalink }) => {

			const isInTitileFilterText = title.toLocaleLowerCase().includes(pattern)
			const isInContentsFilterText = contents.toLocaleLowerCase().includes(pattern)

			const result = (
				isInContentsFilterText ||
				isInTitileFilterText
			)

			return result
		}

		try {
			const response = await fetch('/index.json')
			const items = await response.json()
			
			const result = items.filter(itemFilter)

			return result
		} catch (error) {
			return []
		}
	}
</script>

<Select
	{placeholder}
	{loadOptions}
	{noOptionsMessage}
	{getSelectionLabel}
	{Item}
/>