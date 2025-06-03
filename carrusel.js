let images = [
  {
    title: 'Los médanos de Coro',
    description: 'Vamos a pretender que si son xdxd',
    url: 'url(./img/desert-6755127_1920.jpg)'
  },
  {
    title: 'Una abeja fachera',
    description: 'fachera facherita, se ve bastante chill la vdd',
    url: 'url(./img/bee-9500879_1920.jpg)'
  },
  {
    title: 'Pelando bola',
    description: 'I mean, le tomaba fotos a las hojas, evidentemente estaba pelando bola',
    url: 'url(./img/autumn-6708984_1920.jpg)'
  },
  {
    title: 'Eso cachón',
    description: 'El pana que salió con una {inserte nombre promedio de bandida aquí}',
    url: 'url(./img/antelope-6908215_1920.jpg)'
  },
  {
    title: 'Pejelagarto',
    description: 'El de Monsters Inc., referencia de cultura general',
    url: 'url(./img/lizard-9571499_1920.png)'
  },
  {
    title: 'Un fokin Lucky Strike',
    description: `Ustedes y yo sabemos por qué está ésto aquí\nVen la caja? dice que da cancer de pulmon\nConclusion: no fumen <3`,
    url: 'url(./img/457062348293_oxkmpkewimfa_649752020589_wvjcnwaytbnm_444394_1.jpeg)'
  }
]

let forward = document.getElementById('forward')
let backwards = document.getElementById('backwards')
let imgcontainer = document.getElementById('imgcontainer')
let title = document.getElementById('title')
let description = document.getElementById('description')
let dots = document.getElementById('dots')
let count = 0

forward.addEventListener('click', function(){
  count += 1
  if (count == images.length) {
    count = 0
  }

  
  let nextImage = images[count]
  let imageUrl = nextImage.url
  let imageTitle = nextImage.title
  let imageDescription = nextImage.description
  imgcontainer.style.backgroundImage = `${imageUrl}`
  title.innerHTML = `${imageTitle}`
  description.innerHTML = `${imageDescription}`

})

backwards.addEventListener('click', function(){
  count -= 1
  if (count < 0) {
    count = images.length - 1
  }

  let nextImage = images[count]
  let imageUrl = nextImage.url
  let imageTitle = nextImage.title
  let imageDescription = nextImage.description
  imgcontainer.style.backgroundImage = `${imageUrl}`
  title.innerHTML = `${imageTitle}`
  description.innerHTML = `${imageDescription}`

})