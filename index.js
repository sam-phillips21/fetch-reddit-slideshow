const container = document.querySelector('#container')
const form = document.querySelector('#form')
const pictures = document.querySelector('#images')
// const singleImg = document.querySelector('#single-image')
const images = photos
// const imgArr = ['','','','','',]
const onGetPhotoSuccess = (images) => {
 // console.log(images) 
        images.forEach(photo => {
            const image = document.createElement('img')
            // images.classList.add('pictures')
            image.src = images[i].thumbnail
            container.appendChild(image)
            console.log(image)
            // console.log(container)
        })
    }
    let nextImage = (slideShowImages) => {
        let i = image.src
        for (i=0; i<img.length; i++) {
            console.log(i)
        }
        
    }

//         // console.log(photo.data.thumbnail)
//         imgArr.classList.add('images.data.children')
//         imgArr.innerHTML = `
//             <img src= '${photo.data.thumbnail}'/>`
//             container.appendChild(imgArr)
//             imgArr.style.height = "350px";
//             imgArr.style.width = "600px";

//             if (photo.data.thumbnail === self)
//     })}
//         // let nextImage = () => {
//         //     for (i = 0; i < imgArr.length; i++);
//         }
// let arrIndex = 0
// const loadImage =() => {
//     let pic = document.getElementByid('imgArr')
//     loadImage.innerHTML = " "
//     }
// const nextImage = () => {
//     arrIndex++
//     if (arrIndex >= imgArr.length) {
//         loadImage()
//          }
//     }
// const imgLoop = () => {
//     let interval = setInterval('nextImage', 1000,)
//     if (nextImage = 'self')
//     }

const childR = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
        }
    }

document.addEventListener('DOMContentLoaded', () => {
        fetch('https://www.reddit.com/search.json?q=dogs+nsfw:no')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            onGetPhotoSuccess()
    })
        .catch(console.error)

})

const clickImg = (search) => {
// event.preventDefault()
    fetch(`https://www.reddit.com/search.json?q=${search}+nsfw:no`, )
    .then(res => res.json())
    .then(data => {
        images= data.data.children.map(p => {
            return{
                thumbnail: p.data.thumbnail
            }
        })
        onGetPhotoSuccess(images)
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