function toggleRoadmap() {
    document.querySelector('.roadmap-container').classList.toggle('roadmap-active');
}

function planeFly(btn, targetId) {
    const section = document.querySelector(targetId);
    section.style.display = 'block';

   
    const plane = document.createElement('div');
    plane.innerHTML = '✈️'; 
    plane.className = 'plane-arrow';
    document.body.appendChild(plane);

    
    const rect = btn.getBoundingClientRect();
    plane.style.left = (rect.left + rect.width / 2) + 'px';
    plane.style.top = rect.top + 'px';

   
    setTimeout(() => {
        plane.style.transform = 'translateY(500px) rotate(45deg) scale(0.5)';
        plane.style.opacity = '0';
        
       
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    }, 50);

   
    setTimeout(() => plane.remove(), 800);
}
   
    
