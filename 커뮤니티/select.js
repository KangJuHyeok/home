function classification(value){
  tr=document.getElementsByTagName('tbody')[0].children;
  for(let i=0;i<tr.length;i++){
    if(value=='all' || value==tr[i].children[1].className){
      tr[i].removeAttribute('class');
    }
    else if(value!=tr[i].children[1].className){
      tr[i].setAttribute('class','inactive');
    }
  }
}
