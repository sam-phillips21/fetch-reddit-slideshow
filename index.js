const container = document.querySelector('#container')
const form = document.querySelector('#form')
// const singleImg = document.querySelector('#single-image')
const imgArr = ['','','','','',]
const onGetPhotoSuccess = (images) => {
    // console.log(images) 
    const imgArr = document.createElement('div')
        // imgArr.setAttribute('div', 'images.data.children')
        images.data.children.forEach(photo => {
        // console.log(photo.data.thumbnail)
        imgArr.classList.add('images.data.children')
        imgArr.innerHTML = `
            <img src= '${photo.data.thumbnail}'/>`
            container.appendChild(imgArr)
            // imgArr.style.height = "350px";
            // imgArr.style.width = "600px";

            // if (photo.data.thumbnail === self)
    })}
        // // let nextImage = () => {
        // //     for (i = 0; i < imgArr.length; i++);
        // }
        
        
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
        .then(onGetPhotoSuccess)
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
        console.log(images)
    })
    .catch(console.error)
}

// form.addEventListener('submit', event => {
//     event.preventDefault()
//     imgArr = input.text

// console.log(input.text)

// })

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault()
        const search = document.getElementById('input').value
        clickImg(search)
    })
