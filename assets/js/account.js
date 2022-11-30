// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// Filter

const filterBtn = $('.availableTicket-header-choose__filter')
const filter = $('.filter-wrap')
const filterBody = $('.filter__body')
const closeFilter = $('.filter__header i')

filterBtn.onclick = function() {
    filter.classList.add('active')
}
closeFilter.onclick = function() {
    filter.classList.remove('active')
}
filter.onclick = function() {
    filter.classList.remove('active')
}
filterBody.onclick = function(event) { event.stopPropagation(); }

// Sign up
const modal = $('.modal-wrap')
const signUpBtn = $('.btn-signup')
const modalBody = $('.modal-body')
const closeModal = $('.auth-form__controls-back')

signUpBtn.onclick = function() {
    modal.classList.add('active')
}

closeModal.onclick = function() {
    modal.classList.remove('active')
}