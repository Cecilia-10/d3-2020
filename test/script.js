const number=document.getElementById("number-input")
const submit=document.getElementById("submit-botton")
const container=document.getElementById("square-container")

submit.addEventListener('click',createSquares);
//这里的click是被植入的动作么
function createSquares(){
    console.log(1231);
    let num=number.value;
    container.innerHTML = "";

    for (let i=0;i<num;i++){
        let square=document.createElement('div');
        square.className="square";
        container.appendChild(square);
    }
}
