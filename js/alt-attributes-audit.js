var img = document.getElementsByTagName("img");
var countImg = img.length;

function imagesWithEmptyAltTag() {
  const emptyAltTag = [];
  for (const image of document.getElementsByTagName('img')) {
    const hasAltTag = !!image.getAttribute('alt') && image.getAttribute('alt') !== '';
    if (!hasAltTag) {
      emptyAltTag.push(image.src);
    }
  }
  
  return emptyAltTag;
}

var countMissingAlt = imagesWithEmptyAltTag().length;

console.log("Auf dieser Seite gibt es " + countImg + " img-Tags. " + "Bei " + countMissingAlt + " img-Tag(s) ist das Alt-Attribut nicht befüllt.");
console.log(imagesWithEmptyAltTag());
