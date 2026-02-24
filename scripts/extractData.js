const mainSection = document.getElementById('main');

function extractData() {
    mainSection.addEventListener('click', function (event) {

        if (event.target.classList.contains('interview-btn')) {

            const parentNod = event.target.parentNode.parentNode;

            const title = parentNod.querySelector('.card-title').innerText;
            const subTitle = parentNod.querySelector('.card-sub-title').innerText;
            const smallTitle = parentNod.querySelector('.small-title').innerText;
            const description = parentNod.querySelector('.card-description').innerText;

        
            parentNod.querySelector('.status').innerText = "Interview";

            const cardInfo = {
                title,
                subTitle,
                smallTitle,
                status: "Interview",
                description
            };
            rejectedList = rejectedList.filter(item => item.title !== title);
            

            const titleExist = interviewList.find(item => item.title == cardInfo.title );

            if (!titleExist) {
                interviewList.push(cardInfo);
            }
            calculation();
        }

        else if (event.target.classList.contains('rejected-btn')) {

            const parentNod = event.target.parentNode.parentNode;

            const title = parentNod.querySelector('.card-title').innerText;
            const subTitle = parentNod.querySelector('.card-sub-title').innerText;
            const smallTitle = parentNod.querySelector('.small-title').innerText;
            const description = parentNod.querySelector('.card-description').innerText;

            parentNod.querySelector('.status').innerText = "Rejected";

            const cardInfo = {
                title,
                subTitle,
                smallTitle,
                status: "Rejected",
                description
            };
            interviewList = interviewList.filter(item => item.title !== title);
            const titleExist = rejectedList.find(item => item.title == cardInfo.title);

            if (!titleExist) {
                rejectedList.push(cardInfo);
            }

            calculation();
        }

    });
}