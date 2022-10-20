

    let count = 0;
    let imageArray = ['../../../img/istockphoto-508423060-170667a.jpg','../../../img/스핑크스.jpg','../../../img/5bddba7b6574b95d37b6079c199d7101.jpg','../../../img/1.jpg']
    let img = document.getElementsByClassName('img')
    let slider = document.getElementsByClassName('slider')
    let next = document.getElementsByClassName('gg')
    let previous = document.getElementsByClassName('hh')

      for(let i = 0; i < imageArray.length; i++) {
        let tag =  document.createElement('img');
        tag.src = imageArray[i]
        tag.style.width= `700px`
        tag.style.height= `auto`
        tag.style.backgroundRepeat = "no-repeat"
        tag.style.backgroundPosition = "center"
        tag.style.backgroundSize = "cover"
        tag.style.flex= 1;
        img[0].appendChild(tag)
      }

   
  
      
    
      
  


    // 오른쪽
    next[0].addEventListener('click',()=>{
      count -= 700
      for(let i = 0; i < imageArray.length; i++){
        console.log(imageArray.length)
          console.dir(img[i])
          img[0].children[i].style.transform=`translateX(${(count)}px)`
      }
      
    })

    // 왼쪽
    previous[0].addEventListener('click',()=>{
      count += 700

      
      for(let i = 0; i < imageArray.length; i++){
        console.log(imageArray.length)
          console.dir(img[i])
          img[0].children[i].style.transform=`translateX(${(count)}px)`
      }

      for(let i = 0; i < imageArray.length; i++){
        slider[i].src = imageArray[count++]
        slider[i].style.transform=`translateX(-${count}px)`
      }

})

// setTimeout(() => {
//   slider[i].style.transform=`translateX(0px)`
// }, 300);

