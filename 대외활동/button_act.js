region=document.getElementById('region');
field=document.getElementById('field');
region_child=document.getElementById('region_child');
field_child=document.getElementById('field_child');
classfication=document.getElementsByClassName('classification')[0];
poster=document.getElementsByClassName('poster')[0].children;


region.addEventListener('click',function(){
  region_child.style.display='block';
  field_child.style.display='none';
  classfication.innerHTML='모임지역 - ';
})

field.addEventListener('click',function(){
  region_child.style.display="none";
  field_child.style.display="block";
  classfication.innerHTML='활동분야 - ';
});

//지역 하위 버튼 리스너
for(let z=0;z<region_child.children.length;z++){
  region_child.children[z].addEventListener('click',function(){
    classfication.innerHTML='모임지역 - '+region_child.children[z].innerHTML;
    for(let i=0;i<poster.length-1;i++){
      let tmp=false;
      arr=poster[i].dataset.region.split(",");
      for(let j=0;j<arr.length;j++){
        if(arr[j]==region_child.children[z].id){
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

//활동분야 하위 버튼 리스너
for(let z=0;z<field_child.children.length;z++){
  field_child.children[z].addEventListener('click',function(){
    classfication.innerHTML='활동분야 - '+field_child.children[z].innerHTML;
    for(let i=0;i<poster.length-1;i++){
      let tmp=false;
      arr=poster[i].dataset.field;
      if(arr==field_child.children[z].id){
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