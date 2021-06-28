var width =window.innerWidth;
var height=window.innerHeight;
if (width<500){
    document.querySelector('.blocks').setAttribute('style','flex-direction:column');
    height=height/2;
}
document.querySelector('.frontimage').setAttribute('style','background-size:'+width+"px "+height+"px; height:"+height+"px;");