// Initializing the game canvas

// Initialize the game canvas
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Example drawing
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
