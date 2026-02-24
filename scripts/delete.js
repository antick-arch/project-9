document.getElementById('main').addEventListener('click', function(event) {

    if (event.target.classList.contains('delete-icon')) {

        const card = event.target.parentNode.parentNode.parentNode.parentNode;
        console.log(card);
        card.remove(); 

        calculation();
    }

});