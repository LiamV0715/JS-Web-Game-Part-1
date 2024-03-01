function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

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

let horizon = window.innerHeight / 2
let heightSky = window.innerHeight-horizon
let heightGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightGrass/100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

