<script>
  import copy from './helpers/copyToClipboard';

  export let character, slug;

  function handleClick(e) {
    copy(character);
  }
</script>

<div on:click={handleClick}>
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
