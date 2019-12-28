function xiangcheng(num1,num2){
    let result=num1*num2;
    return result;
}


let myImage=document.querySelector('img');

myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/22.jpg'){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/22.jpg');
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('请输入你的名字');
    if(!myName||myName==null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='大海喜欢'+myName;
    }  
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='大海喜欢'+storedName;
}
myButton.onclick=function(){
    setUserName();
}