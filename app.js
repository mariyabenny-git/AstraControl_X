document.addEventListener('DOMContentLoaded', () => {
    // Generate Threat Matrix
    const matrix = document.getElementById('matrix');
    for(let i=0; i<16; i++) {
        const div = document.createElement('div');
        div.className = 'cell ' + (Math.random() > 0.7 ? 'active' : '');
        matrix.appendChild(div);
    }

    // Generate Massive Logs (Simulating high-data ingestion)
    const logs = document.getElementById('log-container');
    for(let i=0; i<100; i++) {
        const p = document.createElement('p');
        p.innerText = `[${1200+i}] NODE_SYNC_SUCCESS :: ID:0x${Math.random().toString(16).slice(2,8)}`;
        logs.appendChild(p);
    }

    // Dynamic Waveform
    const canvas = document.getElementById('waveform');
    const ctx = canvas.getContext('2d');
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#39ff14';
        ctx.beginPath();
        for(let i=0; i<canvas.width; i++) {
            ctx.lineTo(i, 75 + Math.sin(i*0.05 + Date.now()*0.01) * 30);
        }
        ctx.stroke();
        requestAnimationFrame(draw);
    }
    draw();
});
