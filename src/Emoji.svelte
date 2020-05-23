<script>
  export let character, slug;
</script>

<div>
  <div class="character">{character}</div>
  <div class="slug">{slug}</div>
</div>

<style>
  div {
    display: flex;
    align-items: center;
  }

  .character,
  .slug {
    display: inline-block;
  }

  .character {
    font-size: 48px;
    width: 1.5em;
  }

  .slug {
    font-size: 24px;
  }

  .slug:before,
  .slug:after {
    content: ':'
  }
</style>
