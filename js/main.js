const btnSizeUp = document.querySelector('.sizeUp')
const btnSizeDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')
let fontSize = 36

// const sizeUp = () => {
// 	text.style.fontSize = number
// }

function sizeUp() {
    if (fontSize >= 100) return
	fontSize += 10
	p.style.fontSize = fontSize + 'px'
}

btnSizeUp.addEventListener('click', sizeUp)

function sizeDown() {
	if (fontSize <= 21) return
	fontSize -= 10
	p.style.fontSize = fontSize + 'px'
}

btnSizeDown.addEventListener('click', sizeDown)

function color() {
	// p.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`

    const r = Math.floor(Math.random() *255)
    const g = Math.floor(Math.random() *255)
    const b = Math.floor(Math.random() *255)

    p.style.color = `rgb(${r},${g},${b})`
}

btnColor.addEventListener('click', color)
