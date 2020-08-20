<script>
  export let item = undefined
</script>

<style>
  .page-snippet:hover {
    background-color: var(--itemHoverBG);
  }

  .page-snippet:active {
    background-color: var(--itemIsActiveBG);
  }
</style>

<a class="page-link" href={item.permalink}>
  <div class="page-snippet">
    <h3 class="page-snippet__title">{item.title}</h3>
    <span class="page-snippet__content-preview">{item.contents.slice(0, 10).concat('...')}</span>
  </div>
</a>