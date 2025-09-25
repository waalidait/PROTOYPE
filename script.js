function prototype(list , word){
  let index = 0;
  let count = 0;
  while(index < list.length){
    if(word===list[index]){
      count++
    }
    index++
  }
  if(count==0){
    alert("ce "+word+" n'est pas existe dans la list");
  }
  return count;
}                
  let list =  ["C1","C2","C3","C3","C1","C2","C1"]; /*the list and the fuction are not the same*/
                 
  let word = prompt("entre "); /*the word and the fuction are not the same */
  let count = prototype(b,a);/*the count and the fuction are not the same */
  
  if(count > 0){
    alert(word + "est repete "+count + " fois");
  }