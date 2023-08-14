function countAppender() {
  let index = 1
  const target = 2000
  while (index <= target) {
    const random = ((Math.random() * 100 * index) / index) * window.innerWidth
    console.log(window.innerWidth)
    append(random)
    index++
  }
}

function append(content) {
  const element = document.createElement('p')
  element.innerText = content
  const target = document.getElementById('appendZone')
  target.appendChild(element)
}

countAppender()
