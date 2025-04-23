var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var closeModal = document.querySelector('.modal__action--negative');

// console.log(backdrop);
// console.dir(backdrop);

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';  
    });
}

console.dir(closeModal);

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';  
});
