// import { getImageRef, storage } from '@/config/firebase';
// import { getDownloadURL, ref } from 'firebase/storage';

// export type ImageFormat = 'png' | 'webp' | 'jpg';

// export class Image extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     // const shadow = this.attachShadow({ mode: 'open' });
//     const $target = document.querySelector('#target') as HTMLDivElement;

//     const $image = document.createElement('img');
//     $image.setAttribute('loading', 'lazy');

//     const imageName = this.getAttribute('data-name') as string;
//     const format = this.getAttribute('data-format') as ImageFormat;
//     const style = this.getAttribute('data-style') as string;
//     console.log(imageName, format);
//     const imageRef = getImageRef(imageName, format);
//     // console.log(imageRef);
//     // $image.src = `https://firebasestorage.googleapis.com/b/${import.meta.env.VITE_PROJECT_ID}.appspot.com/o/${
//     //   imageRef.fullPath
//     // }?alt=media`;

//     getDownloadURL(ref(storage, 'images/prison-break_michael.webp'))
//       .then((url) => {
//         // `url` is the download URL for 'images/stars.jpg'
//         console.log('🥰', url);
//         // // This can be downloaded directly:
//         // const xhr = new XMLHttpRequest();
//         // xhr.responseType = 'blob';
//         // xhr.onload = (event) => {
//         //   const blob = xhr.response;
//         // };
//         // xhr.open('GET', url);
//         // xhr.send();

//         // Or inserted into an <img> element

//         $image.setAttribute('src', url);
//       })
//       .catch((error) => {
//         // Handle any errors
//       });

//     // const style = document.createElement('style');

//     $image.classList.add(style);

//     // style.textContent = `
//     // img{
//     //   width: 150px;
//     //   height: 150px;
//     //   margin-top: 20px;
//     //   border-radius: 50%;
//     //   border: 2px solid white;
//     //   padding: 10px;
//     //   box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
//     // }
//     // `;

//     // shadow.appendChild(style);
//     // shadow.appendChild($image);
//     $target.appendChild($image);
//   }
// }

// customElements.define('custom-image', Image);
