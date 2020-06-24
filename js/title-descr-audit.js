var titleDescription = function () {
var title = document.title;
var meta = document.querySelector("meta[name=\'description\']");
var metaDescr = meta.getAttribute("content");

console.log("Title: " + title);
console.log("Meta-Description: " + metaDescr);
}

titleDescription();
