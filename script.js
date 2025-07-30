//your JS code here. If required.


const change = document.getElementById("change_button")
const reset = document.getElementById("reset_button")
change.addEventListener("click",()=>{
	for(let i=1; i<=9; i++){
		document.getElementById(i.toString()).style.backgroundColor = "transparent"
	}
	
	const num = document.getElementById("block_id").value
const colorr = document.getElementById("colour_id").value
	const box = document.getElementById(num.toString())
	box.style.backgroundColor = colorr;
	
})

reset.addEventListener("click",()=>{
	for(let i=1; i<=9; i++){
		document.getElementById(i.toString()).style.backgroundColor = "transparent"
	}
})