<script>
  export let item = undefined
</script>

<style>

</style>

<a class="page-snippet" href={item.permalink}>
  <h3 class="page-snippet__title">{item.title}</h3>
  <span class="page-snippet__content-preview">{item.contents.slice(0, 10).concat('...')}</span>
</a>