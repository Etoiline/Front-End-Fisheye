
// let chevronUp, chevronDown
// eslint-disable-next-line prefer-const
// chevronUp = document.createElement('I')
// chevronUp.setAttribute('class', 'fas fa-chevron-up')
// a.appendChild(chevronUp)
// eslint-disable-next-line prefer-const
// chevronDown = document.createElement('I')
// chevronDown.setAttribute('class', 'fas fa-chevron-down')
// a.appendChild(chevronDown)

let j, c
/* Look for any elements with the class "custom-select": */
const divSelect = document.getElementsByClassName('custom-select')
const selElmnt = divSelect[0].getElementsByTagName('select')[0]
const nbOptions = selElmnt.length

/* For each element, create a new DIV that will act as the selected item: */
const a = document.createElement('DIV')
a.setAttribute('class', 'select-selected')
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
divSelect[0].appendChild(a)
/* For each element, create a new DIV that will contain the option list: */
const b = document.createElement('DIV')
b.setAttribute('class', 'select-items select-hide')
for (j = 1; j < nbOptions; j++) {
  /* For each option in the original select element,
    create a new DIV that will act as an option item: */
  c = document.createElement('DIV')
  c.innerHTML = selElmnt.options[j].innerHTML
  c.addEventListener('click', function (e) {
    /* When an item is clicked, update the original select box,
        and the selected item: */
    let y, i, k, yl
    const s = this.parentNode.parentNode.getElementsByTagName('select')[0]
    const sl = s.length
    const h = this.parentNode.previousSibling
    for (i = 0; i < sl; i++) {
      if (s.options[i].innerHTML === this.innerHTML) {
        s.selectedIndex = i
        h.innerHTML = this.innerHTML
        y = this.parentNode.getElementsByClassName('same-as-selected')
        yl = y.length
        for (k = 0; k < yl; k++) {
          y[k].removeAttribute('class')
        }
        this.setAttribute('class', 'same-as-selected')
        break
      }
    }
    h.click()
  })
  b.appendChild(c)
}
divSelect[0].appendChild(b)
a.addEventListener('click', function (e) {
  /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
  e.stopPropagation()
  closeAllSelect(this)
  this.nextSibling.classList.toggle('select-hide')
  this.classList.toggle('select-arrow-active')
})

function closeAllSelect (elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let i; const arrNo = []
  const x = document.getElementsByClassName('select-items')
  const y = document.getElementsByClassName('select-selected')
  const xl = x.length
  const yl = y.length
  for (i = 0; i < yl; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove('select-arrow-active')
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide')
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect)
