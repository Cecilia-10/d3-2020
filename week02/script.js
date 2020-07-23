const w = 500;
const h = 500;

//let viz=document.getElementById('viz');
//getelementbyid=
const viz = d3.select('#viz')
const svg = viz.append('svg')
    //apend相当于‘+’
    .attr('width', w)
    .attr('height', h)
//svg.attr('width',500);
//svg.attr('height',500);

let faceGroup = svg.append('g')
    .attr('transform', `translate(${w/2},${h/2})`)

// let tryit = svg.append('path')
//     .attr('d', d3.arc()({
//         innerRadius: 250,
//         outerRadius: 150,
//         startAngle: Math.PI / 2,
//         endAngle: Math.PI * 3 / 2
//     })); // "M0,-100A100,100,0,0,1,100,0L0,0Z"

let circle = faceGroup.append('circle')
    .attr("r", w / 2)
    .attr('fill', 'pink')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

let eyeSpacing = 100;
let eyeOffset = -100;


let eyeGroup = faceGroup.append('g')
    .attr('transform', `translate(0,${eyeOffset}) scale(1,1.5) rotate(40)`)
    //反单引号
    .attr('fill', 'black')

let leftEye = eyeGroup.append('circle')
    .attr("r", 20)
    .attr("cx", -eyeSpacing)

let rightEye = eyeGroup.append('circle')
    .attr("r", 20)
    .attr("cx", eyeSpacing)

let eyebrowWidth = 80;
let eyebrowHeight = 15;
let eyebrowOffset = -50;

// let eyeballGroup = eyeGroup.append('g')
//     .attr('transform', `translate(0,${eyebrowOffset})`)
//     .attr("r", 5)
//     .attr('fill', 'yellow')
// let leftEyeball = eyeballGroup.append('circle')
//     .attr('cx', 200)
// let rightEyeball = eyeballGroup.append('circle')
//     .attr('cx', 200)

let eyebrowGroup = eyeGroup.append('g')
    .attr('transform', `translate(0,${eyebrowOffset})`)


let leftEyebrow = eyebrowGroup.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', -eyeSpacing - eyebrowWidth * 0.5)

let rightEyebrow = eyebrowGroup.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', eyeSpacing - eyebrowWidth * 0.5)

let mouth = faceGroup.append('path')

    .attr('d', d3.arc()({
        innerRadius: 135,
        outerRadius: 150,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    })); // "M0,-100A100,100,0,0,1,100,0L0,0Z"

// function moveEyebrow() {
//     eyebrowGroup.transition().duration(2000)
//         .attr('transform', `translate(0,${-100})`)
// }

// function moveEye() {
//     eyeGroup.transition().duration(2000)
//         .attr('transform', `translate(${100},0)`)
// }


d3.select('#button').on('click', () => {
    eyebrowGroup.transition().duration(2000)
        .attr('transform', `translate(${0},${-100})`)
    eyeGroup.transition().duration(2000)
        .attr('transform', `translate(${100},${0})`)
    mouth.transition().duration(2000)
        .attr('transform', `rotate(-20)`)

})



d3.select('#button2').on('click', () => {
    eyebrowGroup.transition().duration(2000)
        .attr('transform', `translate(${0},${-50})`)
    leftEyebrow.transition().duration(2000)
        .attr('transform', `rotate(0)`)
    rightEyebrow.transition().duration(2000)
        .attr('transform', `rotate(0)`)
    eyeGroup.transition().duration(2000)
        .attr('transform', `translate(${0},${0})`)
    mouth.transition().duration(2000)
        .attr('transform', `rotate(0)`)

})

d3.select('#button3').on('click', () => {
    leftEyebrow.transition().duration(2000)
        .attr('transform', `rotate(-10)`)
    rightEyebrow.transition().duration(2000)
        .attr('transform', `rotate(10)`)

})


// d3.select('#button4').on('click', () => {
//     let surprise = faceGroup.append('circle')
//         .attr('r', 50)
//         .attr('nofill')
//         .attr('stroke', 10)
//         .attr('cx', 0)
//         .attr('cy', 100)

// })