 

  function prototyp(list,word){
    let index = 0;
    let count = 0;
    while(index < list.length){
      if(word===list[index]){
        count++
      }   
      index++
    }
    if (count == 0) {
       alert("Le mot '" + word + "' n'existe pas dans la liste.");
    }
    
      return count ;
  }

  let list = ["C1","C2","C3","C3","C1","C2","C1"];
  let word = prompt("ecri le code");
  let count =prototyp(list,word);

    if(count > 0){
       alert(word + "   est repet  " + count +"  fois");
    }

  