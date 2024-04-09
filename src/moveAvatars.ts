function moveAvatars() {
  let ww = window.innerWidth
  let wh = window.innerHeight
  let photos = document.querySelectorAll<HTMLDivElement>('div.photo_container')

  const rand = (multi: number) => multi * Math.random()

  const move = () => {
    photos.forEach((div) => {
      let w = 150 // width of image in px
      let x = rand(ww - w)
      let y = rand(wh - w)

      // images styles
      div.style.top = y + 'px'
      div.style.left = x + 'px'
      div.style.transition = '1200ms'
      div.style.transform = 'scale(1)'
    })
  }

  move()
  window.setInterval(move, 1200)
}

export { moveAvatars }
