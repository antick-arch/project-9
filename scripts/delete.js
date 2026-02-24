document.getElementById('main').addEventListener('click', function (event) {

    if (event.target.classList.contains('delete-icon')) {

        const card = event.target.closest('.card');
        const title = card.querySelector('.card-title').innerText;

        interviewList = interviewList.filter(item => item.title !== title);
        rejectedList = rejectedList.filter(item => item.title !== title);

        card.remove();

        headerTotal.innerText = allCard.children.length;
        calculation();

    }

});