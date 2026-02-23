let totalInterView = [];
let totalRejected = [];
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const filterSection = document.getElementById('filter');

const allCard = document.getElementById('allCard');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const totalCard = allCard.children.length;

function allCardCount() {
    totalCount.innerText = totalCard;
    interviewCount.innerText = totalInterView.length;
    rejectedCount.innerText = totalRejected.length;
}
allCardCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B');
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B');
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if(id == 'interview-filter-btn')
    {
        allCard.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }

}

const main = document.getElementById('main');

main.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('interview-btn'));
if(event.target.classList.contains('interview-btn')){

    
    const parentNode = event.target.parentNode.parentNode;
    const cardTitle = parentNode.querySelector('.card-title').innerText;
    const cardSubTitle = parentNode.querySelector('.card-sub-title').innerText;
    const cardSmallTitle = parentNode.querySelector('.small-title').innerText;
    const cardStatus = parentNode.querySelector('.status').innerText;
    const cardDescription = parentNode.querySelector('.card-description').innerText;
    
    const cardInfo = {
        cardTitle,
        cardSubTitle,
        cardSmallTitle,
        cardStatus,
        cardDescription
    }
    
    const checkDuplicate = totalInterView.find(item => item.cardTitle == cardInfo.cardTitle);
    if (!checkDuplicate) {
        totalInterView.push(cardInfo);
    }
    renderInterview();
}

})


function renderInterview() {
    let filterDiv = document.createElement('div');
    filterDiv.className = 'flex flex-col items-center justify-center gap-5 bg-white h-[400px]';
    filterSection.innerHTML = `
    <div>
        <img src="./images/jobs.png" alt="">
    </div>
    <div class="text-center space-y-1">
        h2 class="text-xl md:text-2xl font-semibold text-black">No jobs available</h2>
        <p class="text-[1rem] text-[#64748B]">Check back soon for new job opportunities</p>
    </div>
    `;

    for (let interview of totalInterView) {
        let div = document.createElement('div');
        div.className = 'card space-y-5 p-6 bg-white rounded-md';
        div.innerHTML = `
        <div class="flex justify-between items-center">
                        <div class="space-y-2">
                            <h2 class="card-title font-semibold text-[1.125rem] text-black">Mobile First Corp</h2>
                            <p class="card-sub-title text-[1rem] text-[#64748B]">React Native Developer</p>
                        </div>
                        <div>
                            <div class="rounded-full bg-white p-2 shadow w-8 h-8 flex items-center"><i class="text-[15px] fa-regular fa-trash-can"
                                    style="color: #64748B;"></i></div>
                        </div>
                    </div>
                    <div>
                        <p class="small-title text-[0.875rem] text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="space-y-2">
                        <button class="status py-2 px-3 bg-[#EEF4FF] text-black text-[0.875rem] rounded-md uppercase font-medium">Not Applied</button>
                        <p class="card-description text-[#323B49] text-[0.875rem] leading-5">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="flex flex-wrap md:flex-row gap-2">
                        <button class="py-2 px-3 bg-transparent hover:bg-green-500 text-green-500 text-[0.875rem] font-semibold hover:text-[white] border border-green-500 hover:border-transparent rounded uppercase">interview</button> 
                        <button class="py-2 px-3 bg-transparent hover:bg-red-500 text-red-500 text-[0.875rem] font-semibold hover:text-white border border-red-500 hover:border-transparent rounded uppercase">Rejected</button>
                    </div>
        `
    }
    filterSection.appendChild(div);
}