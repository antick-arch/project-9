calculation();
extractData();

const filterSection = document.getElementById('filter');

function renderInterview() {
    allCard.classList.add('hidden');           
    filterSection.classList.remove('hidden'); 


    if (interviewList.length === 0) {
        filterSection.innerHTML = `
        <div class="flex flex-col items-center justify-center gap-5 bg-white h-[400px]">
            <div>
                <img src="./images/jobs.png" alt="">
            </div>
            <div class="text-center space-y-1">
                <h2 class="text-xl md:text-2xl font-semibold text-black">No jobs available</h2>
                <p class="text-[1rem] text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        </div>
        `;
        return;
    }


    filterSection.innerHTML = "";

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'card space-y-5 p-6 bg-white rounded-md';

        div.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="space-y-2">
                <h2 class="card-title font-semibold text-[1.125rem] text-black">${interview.title}</h2>
                <p class="card-sub-title text-[1rem] text-[#64748B]">${interview.subTitle}</p>
            </div>
        </div>
        <div>
            <p class="small-title text-[0.875rem] text-[#64748B]">${interview.smallTitle}</p>
        </div>
        <div class="space-y-2">
            <button class="status py-2 px-3 bg-green-100 text-green-600 text-[0.875rem] rounded-md uppercase font-medium">
                Interview
            </button>
            <p class="card-description text-[#323B49] text-[0.875rem] leading-5">
                ${interview.description}
            </p>
        </div>
        `;
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    allCard.classList.add('hidden');           
    filterSection.classList.remove('hidden');  


    if (rejectedList.length === 0) {
        filterSection.innerHTML = `
        <div class="flex flex-col items-center justify-center gap-5 bg-white h-[400px]">
            <div>
                <img src="./images/jobs.png" alt="">
            </div>
            <div class="text-center space-y-1">
                <h2 class="text-xl md:text-2xl font-semibold text-black">No jobs available</h2>
                <p class="text-[1rem] text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        </div>
        `;
        return;
    }

  
    filterSection.innerHTML = "";

    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card space-y-5 p-6 bg-white rounded-md';
        div.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="space-y-2">
                <h2 class="card-title font-semibold text-[1.125rem] text-black">${rejected.title}</h2>
                <p class="card-sub-title text-[1rem] text-[#64748B]">${rejected.subTitle}</p>
            </div>
        </div>
        <div>
            <p class="small-title text-[0.875rem] text-[#64748B]">${rejected.smallTitle}</p>
        </div>
        <div class="space-y-2">
            <button class="status py-2 px-3 bg-red-100 text-red-600 text-[0.875rem] rounded-md uppercase font-medium">
                Rejected
            </button>
            <p class="card-description text-[#323B49] text-[0.875rem] leading-5">
                ${rejected.description}
            </p>
        </div>
        `;
        filterSection.appendChild(div);
    }
}