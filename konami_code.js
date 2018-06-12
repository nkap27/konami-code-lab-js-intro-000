const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let i =0;

function init(e) {
  const key = e.keyCode;
  if(key === codes[i]){
      i++;

      if(i === codes.length){

        alert("You did it!");

        i = 0;

      } else {

        i = 0;

      }
    }
};
