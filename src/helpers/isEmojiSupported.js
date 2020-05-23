// https://raw.githubusercontent.com/Modernizr/Modernizr/master/feature-detects/emoji.js
export default function isEmojiSupported(character) {
  const node = document.createElement('canvas');
  const ctx = node.getContext('2d');
  const backingStoreRatio =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
  const offset = 12 * backingStoreRatio;
  ctx.fillStyle = '#f00';
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText(character, 0, 0);
  const isSupported = ctx.getImageData(offset, offset, 1, 1).data[0];
  return isSupported;
}
