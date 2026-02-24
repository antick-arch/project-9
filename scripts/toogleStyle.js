const interViewBtn = document.getElementById('interview-filter-btn');
const rejectedViewBtn = document.getElementById('rejected-filter-btn');
const allBtn = document.getElementById('all-filter-btn');

function toggleStyle(id) {
    allBtn.classList.remove('text-white', 'bg-[#3B82F6]');
    interViewBtn.classList.remove('text-white', 'bg-[#3B82F6]');
    rejectedViewBtn.classList.remove('text-white', 'bg-[#3B82F6]');

    allBtn.classList.add('text-[#64748B]', 'bg-[#FFFFFF]');
    interViewBtn.classList.add('text-[#64748B]', 'bg-[#FFFFFF]');
    rejectedViewBtn.classList.add('text-[#64748B]', 'bg-[#FFFFFF]');

    const selected = document.getElementById(id);
    selected.classList.remove('text-[#64748B]', 'bg-[#FFFFFF]');
    selected.classList.add('text-white', 'bg-[#3B82F6]');
    

    if (id === 'all-filter-btn') {
        allCard.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

    if (id === 'interview-filter-btn') {
        renderInterview();           
    }

    if (id === 'rejected-filter-btn') {
        renderRejected();          
    }
}