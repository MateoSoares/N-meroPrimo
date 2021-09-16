let n = document.getElementById('num')
let num = Number(n.value)
let res = document.getElementById('res')
let p = []
let ps = []

function isPrimo(r) {

  let v = r.indexOf(0)

  if (v != -1) {
    return false

  } else {
    return true

  }
}

function isPrimos(n) {

  let c = n.indexOf(0)
  
  if (c != -1) {
    return false
    
  } else {
    return true

  }
}

function verificar() {
  let p = []
  res.innerHTML = ''
  
  for (let i = 2; i < n.value; i++) {

    let p2 = n.value % i
    p.push(Number(p2))

  }
  

  for (let i = 2; i <= n.value; i++) {

    let ps = []

    for (let m = 2; m < i; m++) {

      let p3 = i % m
      ps.push(Number(p3))

    }
    
    if (isPrimos(ps)) {

      let item = document.createElement('option')
      item.text = i
      res.appendChild(item)

    }
  }
  
  if (isPrimo(p)) {

    let item = document.createElement('option')
    item.text = 'Primo'
    res.appendChild(item)

  } else {

    let item = document.createElement('option')
    item.text = 'Não Primo'
    res.appendChild(item)

  }
  n.focus()
}