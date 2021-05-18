function deleteAllHref(){
    var getHref = document.getElementsByTagName("a");
    var arrLen = getHref.length;
    for(var i =0; i < arrLen; i++){
        var hrefLoop = getHref[i];
        var getLoopAttribute = hrefLoop.getAttribute("href")
        hrefLoop.setAttribute("href", splitTheShitOut(getLoopAttribute));
    }
}
function splitTheShitOut(link){
	if(link.includes('?__cft__')){
		return link.split('?__cft__')[0];
	} else if (link.includes('&__cft__')){
		return link.split('&__cft__')[0];
	} else {
		return link.split('__cft__')[0];
	}
}
function startTheUseless(){
    setInterval(deleteAllHref, 0); // much faster if 0 
}
$(document).ready(startTheUseless);
