let interviewList = [];
let rejectedList = [];
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const allCard = document.getElementById('allCard');
let headerTotal = document.querySelector('.total-count');
function calculation() {
    totalCount.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}