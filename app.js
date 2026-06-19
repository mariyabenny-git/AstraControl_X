document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Threat Matrix
    const matrix = document.getElementById('matrix');
    for(let i=0; i<16; i++) {
        const div = document.createElement('div');
        div.className = 'cell ' + (Math.random() > 0.8 ? 'threat' : '');
        matrix.appendChild(div);
    }

    // 2. Initialize Telemetry Waveform
    const canvas = document.getElementById('waveform');
    const ctx = canvas.getContext('2d');
    function animateWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#39ff14';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for(let i=0; i<canvas.width; i++) {
            ctx.lineTo(i, 50 + Math.sin(i*0.05 + Date.now()*0.005) * 20);
        }
        ctx.stroke();
        requestAnimationFrame(animateWave);
    }
    animateWave();

    // 3. Simulated Event Logs (MCP-Ready Data)
    const logFeed = document.getElementById('log-feed');
    const logData = ["SYS_INIT: OK", "UPLINK: STABLE", "THREAT_DETECTED: SEC_07", "AI_ADVISORY: ENGAGE"];
    setInterval(() => {
        const p = document.createElement('p');
        p.innerText = `[${new Date().toLocaleTimeString()}] ${logData[Math.floor(Math.random()*logData.length)]}`;
        logFeed.prepend(p);
        if(logFeed.children.length > 20) logFeed.lastChild.remove();
    }, 2000);
});
