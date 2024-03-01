function newImage(address, Xcoord, Ycoord) {
    let image = document.createElement('img')
    image.src = address
    image.style.position = 'fixed'
    image.style.left = Xcoord + 'px'
    image.style.bottom = Ycoord + 'px'
    document.body.append(image)
    return image
  }

newImage(green-Character.gif, 100, 100)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '400px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)