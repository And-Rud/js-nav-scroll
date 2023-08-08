window.button.onclick = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

let isDisplay = false

setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true
    window.button.style.display = 'flex'
    return null
  }
  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.button.style.display = 'none'
    return null
  }
}, 500)
