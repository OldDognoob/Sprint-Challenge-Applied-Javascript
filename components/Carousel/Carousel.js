/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


  //2. You will need to grab a reference to all of the images
  //add images in an array
  const currentIndex = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];
   
   
  
  
  //  const imgChange=(imgIndex)=>{
  //   carouselContainer.forEach((img, index) =>{
  //     img.style.display ='none';
  //   });
  //   carouselContainer[currentIndexImg].style.display = 'flex';
  //   console.log(currentImgIndex)
  //   if(currentImgIndex === 0 && imgChangeleft === -1) {
  //     currentImgIndex = imgIndex - 1;
  //   }else if (currentImgIndex === (imgIndex -1) && imgChangeright === 1){
  //     currentImgIndex =0;
  //   }else {
  //     currentImgIndex += imgChange;
  //   }
  // }


 
    


   //1. You will need to write a function that creates the carousel component.

   function createCarousel(cur) {
  // 1. Create an HTML Marckup
   
 
  const carousel=document.createElement("div");
  const leftButton = document.createElement("div");
  const img1=document.createElement("img");
  const img2=document.createElement("img");
  const img3=document.createElement("img");
  const img4=document.createElement("img");
  const rightButton=document.createElement("div");
 // 2. Define HTML structure
  // carousel.appendChild(leftbutton);
  // carousel.appendChild(rightbutton);
  // carousel.appendChild(img1);
  // carousel.appendChild(img2);
  // carousel.appendChild(img3);
  // carousel.appendChild(img4);
  carousel.append(leftButton, img1, img2, img3, img4, rightButton);
 // 3. Add some classes
 carousel.classList.add('carousel');
 leftButton.classList.add('left-button');
 rightButton.classList.add('right-button');
 // 4. Add some content
 leftButton.textContent = '\u25C4';
 rightButton.textContent = '\u25BA';
  img1.src = cur[0];
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";
//  img1.src=imgIndex[0];
//  img2.src=imgIndex[1];
//  img3.src=imgIndex[2];
//  img3.src=imgIndex[3];
 //5. Add some functionality
 
 // my imgIndex has 4 images
// let Index = [img1,img2,img3,img4];
// // displayImg is equal to 0(assuming)
// let displayImg = 0;

// leftButton.addEventListener('click', ()=>{
//   if(displayImg == 3){
//      displayImg = 0;
//   }else {
//    displayImg +=1
//   }
//   Index.forEach(cur =>{
//     cur.style.display = 'none';
// })
//  Index[displayImg].style.display = 'block';
// });
// rightButton.addEventListener('click', () => {
//   if(displayImg == 0) {
//     display = 3;
//   }else {
//     display -=1
//   }
//   Index.forEach(cur =>{
//     cur.style.display = 'none';
//   })
//   Index[displayImg].style.display = 'block';
// });


 return carousel;
  }
  
  const carouselContainer = document.querySelector(".carousel-container");
 
  // 6 .Generate

  carouselContainer.append(createCarousel(currentIndex));

  console.log(carouselContainer);