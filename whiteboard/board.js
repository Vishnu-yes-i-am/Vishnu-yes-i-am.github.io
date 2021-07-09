var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var r=50
ctx.canvas.width = window.innerWidth-50;
ctx.canvas.height = window.innerHeight-100;
var penwidth=document.querySelector('#penwidth').value;
var selectcolor=document.querySelector('.selectcolor');
var snapshots = new Array();
var sl=-1;
stdraw=false;
var circledraw=false;
var color='white';
var type='default';
var open=false;
var crsr='default';
var width1=3;
var draw=false;
var a;
var x;
var y;
var newx;
var newy;
function addtext(){
    var s=document.querySelector('.text').value;
    var a=document.querySelector('.xcord').value;
    var b=document.querySelector('.ycord').value;
    var w=document.querySelector('.fwidth').value;
    ctx.font='bold '+parseInt(w)+'px Arial';
    ctx.fillText(s, parseInt(a), parseInt(b));
    snapshots.push(canvas.toDataURL());
    sl+=1;
}
function text(){
    if(document.querySelector('.definetext').hasAttribute('style')){
        document.querySelector('.definetext').removeAttribute('style');
    }
    else{
    document.querySelector('.definetext').setAttribute('style','display:flex;');
}}
function stldraw(){
    canvas.setAttribute('style','cursor:'+'url("https://icons.iconarchive.com/icons/designcontest/vintage/32/Patent-Pen-icon.png"),default;');
    if(stdraw==false){
        document.querySelector('#stline').setAttribute('style','background-image: url(Ruler.ico);border:solid green;');
        stdraw=true;}
    else{
        document.querySelector('#stline').setAttribute('style','background-image: url(Ruler.ico);border:solid black;');
        stdraw=false;
    }}
    function cirdraw(){
        canvas.setAttribute('style','cursor:'+'url("https://icons.iconarchive.com/icons/designcontest/vintage/32/Patent-Pen-icon.png"),default;');
        if(circledraw==false){
            document.querySelector('#circle').setAttribute('style','background-image: url(circle.png); border:solid green;');
            circledraw=true;}
        else{
            document.querySelector('#circle').setAttribute('style','background-image: url(circle.png); border:solid black;');
            circledraw=false;
        }}

function undo(){
    if(sl>0){
        sl-=1;
        var canvasPic = new Image(canvas.width,canvas.height);
        a=snapshots[sl];
        canvasPic.src = a;
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        canvasPic.onload = function() { ctx.drawImage(canvasPic, 0, 0); }
        // document.querySelector('.test').setAttribute('src',snapshots[sl]);
        // console.log("drawn");
    }}
function redo(){
        if(sl<snapshots.length-1){
            sl+=1;
            var canvasPic = new Image(canvas.width,canvas.height);
            a=snapshots[sl];
            canvasPic.src = a;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvasPic.onload = function() { ctx.drawImage(canvasPic, 0, 0); }
            //  document.querySelector('.test').setAttribute('src',snapshots[sl]);
            //  console.log("drawn");
        }}
function clearboard(){
    console.log('clearing');
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
        }
document.querySelector('#pen').addEventListener('click',()=>{
    if(open==false){
        open=true;
        selectcolor.removeAttribute('style');
        document.querySelector('.fathercolor').setAttribute('style','display:unset;')
        selectcolor.setAttribute('style','display:inline-block;');
    }
    else{
       open=false; 
       document.querySelector('.fathercolor').removeAttribute('style');
    selectcolor.removeAttribute('style');
    selectcolor.setAttribute('style','display:none;');}
})
function drawstop(event) {
    newx=event.clientX-canvas.offsetLeft;
    newy=event.clientY-canvas.offsetTop+23;
    if(stdraw==true){
        ctx.beginPath();
        ctx.lineWidth=width1;
        ctx.lineCap = type;
        ctx.strokeStyle=color;
        console.log(x,y,newx,newy);
        ctx.moveTo(x,y); 
        ctx.lineTo(newx,newy);
        ctx.stroke();}
    if(circledraw==true){
        console.log(color);
        console.log(x,y,newx,newy);
        ctx.strokeStyle=color;
        ctx.beginPath();
        ctx.arc(x,y,Math.sqrt((x-newx)*(x-newx)+(y-newy)*(y-newy)),0,(Math.PI)*2);
        ctx.stroke();}
    draw=false;

}
function colorchange(clr){
    color=clr;
    document.querySelector('#pen').setAttribute('style','background-color:'+color+';')
    if(clr=='white'){
        width1=50;
        stdraw=false;
        document.querySelector('#stline').setAttribute('style','background-image: url(Ruler.ico);border:solid black;');
        circledraw=false;
        document.querySelector('#circle').setAttribute('style','background-image: url(circle.png); border:solid black;');
        canvas.setAttribute('style','cursor:'+'url("erase.png"),default;');
    }
    else{
        penwidth=document.querySelector('input').value;
        width1=penwidth;
        canvas.setAttribute('style','cursor:'+'url("https://icons.iconarchive.com/icons/designcontest/vintage/32/Patent-Pen-icon.png"),default;');
    }
    if(width1>4){
        type='round';
    }
}

canvas.addEventListener("mousedown", getClickPosition, false);
canvas.addEventListener("touchstart", getClickPosition, false);
function getClickPosition(e) {
    if(open==true){
        open=false; 
       document.querySelector('.fathercolor').removeAttribute('style');
    selectcolor.removeAttribute('style');
    selectcolor.setAttribute('style','display:none;');
    }
    draw=true
    x = e.clientX-canvas.offsetLeft;
    y = e.clientY-canvas.offsetTop+23;
    // if (sl < snapshots.length) { snapshots.length = sl; }
    snapshots.push(canvas.toDataURL());
    sl+=1;
    canvas.addEventListener("mouseup",drawstop,false);
    canvas.addEventListener("touchend",drawstop,false);  
    canvas.addEventListener("mousemove",drawstart,false );
    canvas.addEventListener("touchmove",drawstart,false );    
}
function drawstart(event) {
    if(draw==true){
    if(stdraw==false &&circledraw==false){
    ctx.beginPath();
    ctx.lineWidth=width1;
    ctx.lineCap = type;
    ctx.strokeStyle=color;
    ctx.moveTo(x,y);
    ctx.lineTo((event.clientX-canvas.offsetLeft),(event.clientY-canvas.offsetTop+23));
    ctx.stroke();
    x=event.clientX-canvas.offsetLeft;
    y=event.clientY-canvas.offsetTop+23;
}
}

}
