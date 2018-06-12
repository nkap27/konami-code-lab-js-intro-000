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

function init() {
  document.body.addEventListener('keydown', function(event) {

  const key = event.which;
  if(key === codes[i]){
      i++;

      if(i === codes.length){

        alert("You did it!");

        i = 0;
      }
    } else {

        i = 0;
      }
    });
  }
