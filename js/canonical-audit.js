var canonicalCheck = function () {
var canonical = document.querySelector("link[rel='canonical']");  

if (canonical == null) {
console.log("Diese Seite hat keinen Canonical.");
} else {
var getCan = function () {
var canonical = document.querySelector("link[rel='canonical']").href;  
var url = document.location.href;  	  
if (canonical == url) {  
console.log("Canonical zeigt mit " + canonical + " auf sich selbst.");  
} else {  
console.log("Canonical zeigt auf eine andere URL: " + canonical + ".");  
}  }
getCan();   
}
}

canonicalCheck();
