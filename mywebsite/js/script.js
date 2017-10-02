var index =0;
showSlides();

function showSlides(){
	var i;
	var slide = document.getElementsByClassName("slides");
	for(i=0;i<slide.length;i++){
		slide[i].style.display="none";
	}
	index++;
	if(index> slide.length){
		index=1;
	}
	slide[index-1].style.display="block";
	setTimeout(showSlides, 2000);
}
document.onPageLoad = function(){
	window.alert("Allow Notifications?")
};