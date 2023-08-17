function check(value){
  if(value=='no'){
    alert('공지 게시판은 운영자만 쓸 수 있습니다.')
  }
}

function submit(event){
  event.preventDefault();
  alert('서버가 존재x이므로 여기까지만 만들었습니다.');
}

function font_change(value){
  let txt=document.getElementById('txt');
  if(value=='a'){
    txt.style.fontFamily='바탕'
  }
  else if(value=='b'){
    txt.style.fontFamily='고딕'
  }
  else if(value=='c'){
    txt.style.fontFamily='궁서'
  }
}

function font_size_change(value){
  let txt=document.getElementById('txt');
  if(value=='14'){
    txt.style.fontSize='14px';
  }
  else if(value=='16'){
    txt.style.fontSize='16px';
  }
  else if(value=='18'){
    txt.style.fontSize='18px';
  }
  else{
    txt.style.fontSize='13px'; //기본값
  }
}

function font_active(event){
  let txt=document.getElementById('txt');
  event.preventDefault();
  font_child=document.getElementsByClassName('font_child');
  for(let i=0;i<font_child.length;i++){
    if(event.target==font_child[i] && event.target.style.backgroundColor!='gray'){
      font_child[i].style.backgroundColor='gray';
      txt.setAttribute('class',font_child[i].id);
    }
    else{
      font_child[i].style.backgroundColor='white';
      if(txt.hasAttribute(font_child[i].id)){
        txt.remove.Attribute('class',font_child[i].id);
      } 
    }
  }
}