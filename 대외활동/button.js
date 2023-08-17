who=document.getElementById('who');
comp_field=document.getElementById('comp_field');
who_child=document.getElementById('who_child');
comp_field_child=document.getElementById('comp_field_child');
classfication=document.getElementsByClassName('classification')[0];
poster=document.getElementsByClassName('poster')[0].children;

who.addEventListener('click',function(){
  who_child.style.display='block';
  comp_field_child.style.display='none';
  classfication.innerHTML='응모대상 - ';
})

 comp_field.addEventListener('click',function(){
  who_child.style.display="none";
  comp_field_child.style.display="block";
  classfication.innerHTML='공모분야 - ';
});

//응모대상 하위 버튼 리스너
for(let z=0;z<who_child.children.length;z++){
  who_child.children[z].addEventListener('click',function(){
    classfication.innerHTML='응모대상 - '+who_child.children[z].innerHTML;
    for(let i=0;i<poster.length-1;i++){
      let tmp=false;
      arr=poster[i].dataset.who.split(",");
      for(let j=0;j<arr.length;j++){
        if(arr[j]==who_child.children[z].id){
          tmp=true;
          break;
        }
      }
      if(tmp){
        poster[i].style.display="block";
      }
      else{
        poster[i].style.display="none";
      }
    }
  })
}

//공모분야 하위 버튼 리스너
for(let z=0;z<comp_field_child.children.length;z++){
  comp_field_child.children[z].addEventListener('click',function(){
    classfication.innerHTML='공모분야 - '+comp_field_child.children[z].innerHTML;
    for(let i=0;i<poster.length-1;i++){
      let tmp=false;
      arr=poster[i].dataset.field;
      if(arr==comp_field_child.children[z].id){
        tmp=true;
      }
      if(tmp){
        poster[i].style.display="block";
      }
      else{
        poster[i].style.display="none";
      }
    }
  })
}
