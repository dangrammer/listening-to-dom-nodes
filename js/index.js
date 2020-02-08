const main = document.getElementById('main')
const input = document.querySelector('input')

main.addEventListener('click', function() {
  alert('I was clicked!')
})

// input.addEventListener('keydown', function(e) {
  //   console.log(e.key);
  // })
  
input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
})
  
function bubble(e) {
  e.stopPropagation()
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
  
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

let divs = document.querySelectorAll('div')

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble)
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

