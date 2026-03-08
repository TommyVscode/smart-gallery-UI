function toggleRoadmap() {
    const wrapper = document.querySelector('.roadmap-wrapper');
    const subButtons = document.getElementById('subButtons');
    subButtons.style.display = 'block';
    wrapper.classList.toggle('roadmap-active');
}

function flyTo(targetId) {
   
    const section = document.querySelector(targetId);
    section.style.display = 'block'; 
    const plane = document.createElement('div');
    plane.innerHTML = '✈️';
    plane.className = 'plane-anim';
    document.body.appendChild(plane);

    const btn = event.target.getBoundingClientRect();
    plane.style.left = btn.left + 'px';
    plane.style.top = btn.top + 'px';

   
    setTimeout(() => {
        plane.style.left = '50%';
        plane.style.top = '90vh';
        plane.style.opacity = '0';
        
        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
        });
    }, 100);

   
    setTimeout(() => plane.remove(), 700);
}
