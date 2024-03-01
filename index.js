function newImage(address, Xcoord, Ycoord) {
    let image = document.createElement('img')
    image.src = address
    image.style.position = 'fixed'
    image.style.left = Xcoord + 'px'
    image.style.bottom = Ycoord + 'px'
    document.body.append(image)
    return image
  }

function newItem(address, Xcoord, Ycoord){
    let image = newImage(address, Xcoord, Ycoord)
    image.addEventListener('dblclick', () => {
      image.remove()
    })
}

newImage('assets/green-Character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)