var adding=document.querySelector('.add');
adding.addEventListener('click',myfnc
);


function keypress(e){
    if(e.keyCode==13){
        myfnc();
    }
}

function myfnc(){
    if(document.querySelector('input').value!=''){
    var tag1=document.createElement('div');   
    var tag2=document.createElement('p');
    var btn1=document.createElement('div');
    var btn2=document.createElement('div');
    var text=document.createTextNode(document.querySelector('input').value);
    document.querySelector('input').value="";
    btn2.innerHTML='&#x2718; Delete';
    btn1.innerHTML='&#x2714; Done';
    btn1.classList="btn";
    btn2.classList="btn";
    tag1.id="addednote"
    btn1.id="tick";
    btn2.id="delete";
    btn1.addEventListener('click',()=>{
        if(tag2.hasAttribute('style')){
         tag2.removeAttribute('style');}
        else{
            tag2.setAttribute('style','background-color:green;');
        }
    });
    btn2.addEventListener('click',()=>{
        tag1.setAttribute('style','display:none;')
    });
    tag2.setAttribute('style','max-width:'+window.innerWidth/2+"px;");
    tag2.appendChild(text);
    tag1.appendChild(tag2);
    tag1.appendChild(btn1);
    tag1.appendChild(btn2);
    
    var element=document.querySelector('.saved');
    element.appendChild(tag1);}}

