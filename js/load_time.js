function calculatePageLoadTime() {
    return window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.domContentLoadedEventStart;
}

function addInfoElement(loadTime) {
    let info = document.createElement('p');
    info.className = 'footer-item';

    info.innerHTML = `page load time: ${loadTime} s`;

    let footer = document.querySelector('footer');
    footer.append(info);
}

window.addEventListener('load', (function() {
    const loadTime = calculatePageLoadTime();
    addInfoElement(loadTime / 1000);
}))