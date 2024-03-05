function CalculateTriangleArea(){
    // get rectangle base value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);

    // get rectangle 
    const rectangleWeightInput = document.getElementById('rectangle-weight');
    const rectangleWeightText = rectangleWeightInput.value;
    const weight = parseFloat(rectangleWeightText);
    // console.log(weight);

    // calculate rectangle area
    const area = length * weight;
    console.log('area of the rectangle:', area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}