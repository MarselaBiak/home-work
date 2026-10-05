'use strict';

const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', function (event) {
    const button = event.target.closest('[data-read-more-btn]');
    
    if (!button) return;
    const card = button.closest('.card');
    card.classList.toggle('expanded');
    button.textContent = card.classList.contains('expanded')
        ? 'спрятать'
        : 'читать больше';
});
