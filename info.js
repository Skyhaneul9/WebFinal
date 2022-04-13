function begin() {
     
  let hidden= document.querySelector("#options-hiring");
  let showContactMeBtn = document.querySelector("#contactme");

  showContactMeBtn.addEventListener("click", function(){window.open("#contactmeform",'_self');});

  hidden.addEventListener("click",hiddenOption);
}
window.onload = begin();


let form = document.querySelector('#contactme-');
let submitButton = document.querySelector('#submit');
let resetButton = document.querySelector('#reset');

submitButton.onclick = (event) => {
    form.classList.add('was-validated');
};

resetButton.onclick = (event) => {
   form.classList.remove('was-validated');
};

form["postal-code"].oninput = (event) => {
  let postalCode = form['postal-code'].value;
  let r = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
  if (r.test(postalCode)) form['postal-code'].setCustomValidity('');
  else form['postal-code'].setCustomValidity('Please input a valid Canadian postal code.');
};

    function hiddenOption() {

      let salary1 = document.querySelector('.wage1');
      let salary2 = document.querySelector('.wage2');
      salary1.style.visibility="visible";
      salary2.style.visibility="visible";
    }
