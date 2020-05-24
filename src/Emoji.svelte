<script>
  import copy from './helpers/copyToClipboard';

  export let character, slug;
  let copied = false;

  function handleClick(e) {
    copy(character);
    copied = true;
    setTimeout(() => (copied = false), 200);
  }
</script>

<div class:copied on:click={handleClick}>
  <div class="character">{character}</div>
  <div class="slug">{slug}</div>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: background 150ms ease-out;
  }

  div.copied {
    background: #81ecec;
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
