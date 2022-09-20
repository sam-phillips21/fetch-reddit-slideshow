const container = document.querySelector('#container')
const form = document.querySelector('#form')
const pictures = document.querySelector('#images')
// const singleImg = document.querySelector('#single-image')
let rotation
const imgArr = []
let imgIndex = 0
const nextImage = () => {
    imgIndex++
    const currentImage = imgArr[imgIndex]
    const image = document.createElement('img')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
        }
    
    image.src = currentImage
            container.appendChild(image)
    // console.log(currentImage)
}
const onGetPhotoSuccess = (data) => {
//  console.log(data) 
        data.data.children.forEach(photo => {
            
            imgArr.push(photo.data.thumbnail)  
        })
       rotation =  setInterval(nextImage, 2000)
       
    }

document.addEventListener('DOMContentLoaded', () => {
        fetch('https://www.reddit.com/search.json?q=dogs+nsfw:no')
        .then(res => res.json())
        .then((data) => {
            // console.log(data)
            onGetPhotoSuccess(data)
    })
        .catch(console.error)

})

const clickImg = (search) => {
// event.preventDefault()
    fetch(`https://www.reddit.com/search.json?q=${search}+nsfw:no`, )
    .then(res => res.json())
    .then(data => {
        images= data.data.children.map(p => {
            return(data)
                thumbnail: p.data.thumbnail
            
        })
        onGetPhotoSuccess(data)
    })
    .catch(console.error)
}
    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault()
        const search = document.getElementById('input').value
        clickImg(search)
    })
//     form.addEventListener('submit', event => {
//     event.preventDefault()
//     imgArr = input.text

// console.log(input.text)

// })
let stopButton = () => {
    clearInterval(rotation)
}
document.getElementById('stop').addEventListener('click', stopButton)

