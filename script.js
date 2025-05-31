function resetPicture() {
    const canvas = document.getElementById("overlay");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function calculate() {
    const canvas = document.getElementById("overlay");
    const context = canvas.getContext("2d");

    // Get values from the first row
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);

    // Canvas dimensions
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Draw orthogonal lines
    context.strokeStyle = "red";
    context.lineWidth = 1;

    // Vertical line: from (x1, 0) to (x1, canvasHeight)
    context.beginPath();
    context.moveTo(x1, 0);
    context.lineTo(x1, canvasHeight);
    context.stroke();

    // Horizontal line: from (0, y1) to (canvasWidth, y1)
    context.beginPath();
    context.moveTo(0, y1);
    context.lineTo(canvasWidth, y1);
    context.stroke();

    // Calculate cross point coordinates (intersection of vertical and horizontal lines)
    const crossX = x1;
    const crossY = y1;

    // Mark the center
    context.fillStyle = "blue";
    context.beginPath();
    context.arc(crossX, crossY, 2, 0, 2 * Math.PI);
    context.fill();

    // Display cross point text
    context.fillStyle = "black";
    context.font = "12px Arial";
    context.fillText("Working Point", crossX + 8, crossY - 4);

    // Update result table
    const resultTableBody = document.querySelector("#result-table tbody");
    resultTableBody.innerHTML = `<tr><td>Cross Point</td><td>(${crossX.toFixed(2)}, ${crossY.toFixed(2)})</td></tr>`;
}

function loadPicture() {
    const select = document.getElementById("picture-select");
    const selectedImage = select.value; // Get the selected picture name
    const picture = document.getElementById("picture");

    // Explicitly clear the src and reload the selected image
    picture.src = "";
    setTimeout(() => {
        picture.src = selectedImage;
    }, 50); // Adding a slight delay for browsers to reset the src
}