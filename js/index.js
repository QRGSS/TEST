var li=document.getElementsByClassName("top_ul")[0].children;
var img=document.getElementsByClassName("lunbo_1")[0].firstElementChild;
var img_2=document.getElementsByClassName("img_2")[0];
var dianji=document.getElementsByClassName("dianji")[0].children;
var but_1=document.getElementsByClassName("but_1")[0];
var a_1=document.getElementsByClassName("a_1")[0];
var a_2=document.getElementsByClassName("a_2")[0];
var a_3=document.getElementsByClassName("a_3")[0];
var j=0;
for(var i=0;i<li.length;i++){
	li[i].onmouseover=function(){
		this.firstElementChild.style.color="red"
	}
	li[i].onmouseout=function(){
		this.firstElementChild.style.color="white"
	}
}
but_1.onmouseover=function(){
	this.style.backgroundColor="#ff377b"
	this.style.color="white"
}
but_1.onmouseout=function(){
	this.style.backgroundColor="transparent"
	this.style.color="#f54581"
}
setInterval(function(){
	j++
	if(j==1){
		img.style.display="none"
		a_1.style.backgroundColor="white"
		a_2.style.backgroundColor="#b3020c"
		a_3.style.backgroundColor="#white"
	}
	if(j==2){
		img_2.style.display="none"
		a_1.style.backgroundColor="white"
		a_2.style.backgroundColor="white"
		a_3.style.backgroundColor="#b3020c"
	}
	else if(j>=3){
		img.style.display="block"
		img_2.style.display="block"
		a_1.style.backgroundColor="#b3020c"
		a_2.style.backgroundColor="white"
		a_3.style.backgroundColor="white"
		j=0
	}

},2000)
console.log(li)
console.log(img)