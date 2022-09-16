// const clickImg = (search) => {
//     // event.preventDefault()
//         fetch(`https://www.reddit.com/search.json?q=dogs+nsfw:no`, )
//         .then(res => res.json())
//         .then(data => {
//             images= data.data.children.map(p => {
//                 return{
//                     thumbnail: p.data.thumbnail
//                 }
//             })
//         })}

        
// let lits = (imagedata) => {
//     let counter = 1;
//     let slideshowElement = document.querySelector('container');

//     imageData.forEach((clickImg => {
//         let imgTag = document.createElement('img');
//         imgTag.src = download_url;
//         imgTag.setAttribute('data-id', counter);
//         imgTag.style.height = "350px";
//         imgTag.style.width = "600px";
        
//         slideshowElement.appendChild(imgTag);

//         if (counter === 1) {
//             imgTag.classname = "active";
//         } else {
//             imgTag.className = "inactive";
//         }
        
//     }
