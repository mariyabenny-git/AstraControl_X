document.addEventListener('DOMContentLoaded', () => {
    // Waveform
    const canvas = document.getElementById('waveform');
    const ctx = canvas.getContext('2d');
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#39ff14';
        ctx.beginPath();
        for(let i=0; i<canvas.width; i++) {
            ctx.lineTo(i, 100 + Math.sin(i*0.02 + Date.now()*0.005) * 40);
        }
        ctx.stroke();
        requestAnimationFrame(draw);
    }
    draw();

    // Matrix
    const grid = document.getElementById('matrix-grid');
    for(let i=0; i<16; i++) {
        const d = document.createElement('div');
        d.className = 'cell ' + (Math.random() > 0.7 ? 'alert' : '');
        grid.appendChild(d);
    }

    // Logs
    const feed = document.getElementById('log-feed');
    setInterval(() => {
        const p = document.createElement('p');
        p.innerText = `[${new Date().toLocaleTimeString()}] >> NODE_ID: 0x${Math.random().toString(16).slice(2,8)} :: SECURE`;
        feed.prepend(p);
    }, 2000);
});
