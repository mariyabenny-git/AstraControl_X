const telemetryDiv = document.getElementById('telemetry-data');
const aiAdvice = document.getElementById('ai-advice');
let state = { alt: 500, speed: 0.7, fuel: 100, jamming: false };

function updateSimulation() {
    state.alt = Math.max(15, state.alt - Math.random() * 5);
    state.fuel -= 0.05;
    telemetryDiv.innerHTML = `Speed: Mach ${state.speed}<br>Altitude: ${state.alt.toFixed(2)}m<br>Fuel: ${state.fuel.toFixed(1)}%`;
    
    if (state.alt < 50 && !state.jamming) {
        aiAdvice.innerText = "Tactical Advisory: Optimal terrain masking achieved.";
    }
}

function toggleJamming() {
    state.jamming = !state.jamming;
    document.getElementById('cyber-status').innerText = state.jamming ? "ALERT: SIGNAL INTERFERENCE" : "Status: SECURE";
    if (state.jamming) aiAdvice.innerText = "Warning: Enemy EW detected. Initiating Frequency Hopping.";
}
setInterval(updateSimulation, 1000);
