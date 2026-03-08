function toggleRoadmap() {
    const container = document.querySelector('.roadmap-container');
    container.classList.toggle('roadmap-active');
}

function planeFly(btn, targetId) {
    const section = document.querySelector(targetId);
    
    
    if (section) {
        section.style.display = 'block';
        section.style.opacity = '1';
    }

   
    const arrow = document.createElement('div');
    arrow.className = 'custom-arrow';
    arrow.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 22L12 18L2 22L12 2Z" fill="#38bdf8" stroke="#1e40af" stroke-width="2" stroke-linejoin="round"/>
        </svg>
    `;
    document.body.appendChild(arrow);

    
    const rect = btn.getBoundingClientRect();
    arrow.style.left = (rect.left + rect.width / 2 - 20) + 'px';
    arrow.style.top = rect.top + 'px';

   
    setTimeout(() => {
        arrow.style.transform = 'translate(150px, 400px) rotate(135deg) scale(0.5)';
        arrow.style.opacity = '0';
      
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }, 50);

   
    setTimeout(() => arrow.remove(), 700);
}
