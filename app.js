const telemetryDiv = document.getElementById('telemetry-data');
const aiAdvice = document.getElementById('ai-advice');
const cyberStatus = document.getElementById('cyber-status');
const canvas = document.getElementById('engineCanvas');
const ctx = canvas.getContext('2d');

let state = { alt: 500, speed: 0.7, fuel: 100, jamming: false };

function drawEngineWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#39ff14';
    ctx.beginPath();
    for(let i=0; i<canvas.width; i++) {
        ctx.lineTo(i, 50 + Math.sin(i*0.1 + Date.now()*0.01) * 20);
    }
    ctx.stroke();
}

function updateSimulation() {
    state.alt = Math.max(15, state.alt - Math.random() * 2);
    state.fuel = Math.max(0, state.fuel - 0.1);
    
    telemetryDiv.innerHTML = `SPEED: MACH ${state.speed}<br>ALTITUDE: ${state.alt.toFixed(2)} M<br>FUEL: ${state.fuel.toFixed(1)} %`;
    
    // MLP-Heuristic Decision Logic
    let threatScore = (state.jamming ? 0.7 : 0) + (state.alt < 50 ? 0.2 : 0);
    aiAdvice.innerText = threatScore > 0.6 
        ? "CRITICAL: Threat Probability High. Evasive Maneuver Required." 
        : "SYSTEM: Flight parameters nominal.";
        
    drawEngineWave();
}

function toggleJamming() {
    state.jamming = !state.jamming;
    cyberStatus.className = state.jamming ? "status-pill alert" : "status-pill";
    cyberStatus.innerText = state.jamming ? "THREAT DETECTED" : "SECURE";
}

setInterval(updateSimulation, 500);
