document.addEventListener("DOMContentLoaded", () => {
  let objectsArray = ['red', 'green', 'blue', 'orange', 'yellow'];
  let cTarget = document.querySelector('#circles');
  let sTarget = document.querySelector('#squares');
  // Redndering Squares and Circles
  let ui = {
    rednderObjects(){
      let elements = objectsArray.map((obj) => {
        let colour = obj;
        console.log(colour);
        return objectTemplate(colour)
      });

      cTarget.innerHTML = elements.join("");
      sTarget.innerHTML = elements.join("");
    }
  }
  function objectTemplate(colour){
    let template = `<div id="${colour}" class="object">${colour}</div>`;
    return template;
  };
  ui.rednderObjects();

  //The behaviour when clicking on objects
  for (var i = 0, size = cTarget.children.length; i < size; i++) {
    ((index) => {
      //hide circles show squares
      cTarget.children[i].onclick = function(){
        this.style.visibility = "hidden";
        sTarget.children[index].style.visibility = "visible";
        console.log(index);
      }
    })(i);
  }
  for (var i = 0, size = cTarget.children.length; i < size; i++) {
    ((index) => {
      //hide square show circle as first object
      sTarget.children[i].onclick = function(){
        cTarget.removeChild(cTarget.querySelector(`#${this.id}`));
        this.style.visibility = "hidden";
        cTarget.children[0].insertAdjacentHTML('beforebegin', objectTemplate(this.id));

      }
    })(i);
  }
});
