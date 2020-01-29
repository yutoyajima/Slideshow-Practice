// ---------------Version 4------------------
{
   const woman = document.querySelectorAll(".woman")
   const toRight = document.getElementById("to-right")
   const toLeft = document.getElementById("to-left")

   let i = 0
   let i2 = 1
   let i3 = 2

   const slideRight = () => {
      if (i === woman.length - 1) {
         woman[i].classList.toggle("waiting-on-right")
         i = 0
         woman[i].classList.toggle("waiting-on-right")
      } else {
         woman[i].classList.toggle("waiting-on-right")
         i += 1 
         woman[i].classList.toggle("waiting-on-right")
      }
      
      if (i2 === woman.length - 1) {
         woman[i2].classList.toggle("current")
         i2 = 0
         woman[i2].classList.toggle("current")
      } else {
         woman[i2].classList.toggle("current")
         i2 += 1 
         woman[i2].classList.toggle("current")
      }

      if (i3 === woman.length - 1) {
         woman[i3].classList.toggle("waiting-on-left")
         i3 = 0
         woman[i3].classList.toggle("waiting-on-left")
      } else {
         woman[i3].classList.toggle("waiting-on-left")
         i3 += 1 
         woman[i3].classList.toggle("waiting-on-left")
      }
   }



   const slideLeft = () => {
      if (i === 0) {
         woman[i].classList.toggle("waiting-on-right")
         i = woman.length - 1
         woman[i].classList.toggle("waiting-on-right")
      } else {
         woman[i].classList.toggle("waiting-on-right")
         i -= 1 
         woman[i].classList.toggle("waiting-on-right")
      }
      
      if (i2 === 0) {
         woman[i2].classList.toggle("current")
         i2 = woman.length - 1
         woman[i2].classList.toggle("current")
      } else {
         woman[i2].classList.toggle("current")
         i2 -= 1 
         woman[i2].classList.toggle("current")
      }

      if (i3 === 0) {
         woman[i3].classList.toggle("waiting-on-left")
         i3 = woman.length - 1
         woman[i3].classList.toggle("waiting-on-left")
      } else {
         woman[i3].classList.toggle("waiting-on-left")
         i3 -= 1
         woman[i3].classList.toggle("waiting-on-left")
      }
   }


   toRight.addEventListener("click", slideRight)
   toLeft.addEventListener("click", slideLeft)
}


//----------------Version3---------------------
{
   const pig = document.querySelectorAll(".pig")
   
   let i = 0
   let i2 = 1
   const slide = () => {
      if (i === pig.length - 1) {
         pig[i].classList.remove("first")
         i = 0
         pig[i].classList.add("first")
      } else {
         pig[i].classList.remove("first")
         i++
         pig[i].classList.add("first")
      }
      if (i2 === pig.length - 1) {
         pig[i2].classList.remove("second")
         i2 = 0
         pig[i2].classList.add("second")
      } else {
         pig[i2].classList.remove("second")
         i2++
         pig[i2].classList.add("second")
      }
   }
   setInterval(slide, 2000)
   
   
   // setInterval(whoIsPig, 26000)
   


   
   // ----別解----
   const pigAlt = document.querySelectorAll(".pig-alt")
   
   let i3 = 0
   const slideAlt = () => {
      if (i3 === pig.length - 1) {
         pigAlt[i3].classList.remove("fadeIn")
         i3 = 0
         pigAlt[i3].classList.add("fadeIn")
      } else {
         pigAlt[i3].classList.remove("fadeIn")
         i3++
         pigAlt[i3].classList.add("fadeIn")
      }
   }
   setInterval(slideAlt, 2000)



}
// -----------------------------------------


//----------------Version 2---------------------
{
   let i = 0
   const right = document.getElementById("right")
   const left = document.getElementById("left")
   const pics = document.getElementsByClassName("pic")
   
   const rightSlide = () => {
      pics[i].classList.add("move")
      if (i === imgs.length - 1) {
         for (let i = 0; i <= imgs.length - 1; i++) {
            pics[i].classList.remove("move")
         }
         i = 0
      } else {
         i++
      }
   }
   
   const leftSlide = () => {
      if (i === 0) {
         for (let i = 0; i <= imgs.length - 1; i++) {
            pics[i].classList.add("move")
         }
         i = imgs.length - 1
      } else {
         i--
      }
      pics[i].classList.remove("move")
   }
   
   right.addEventListener("click", rightSlide)
   left.addEventListener("click", leftSlide)
   
   
   const lini = document.getElementById("lini")
}





//----------------Version1---------------------

   
   //1.ノード取得
   const next = document.getElementById("next")
   const previous = document.getElementById("previous")
   const imgs = document.getElementsByClassName("img")

   //3.イベント時に呼び出される関数の定義

   let i = 0
   const goNext = () => {
      imgs[i].classList.toggle("appear")
      if (i === imgs.length - 1) {
         i = 0
      } else {
         i += 1
      }
      imgs[i].classList.toggle("appear")
   }

   const goBaci = () => {
      imgs[i].classList.toggle("appear")
      if (i === 0) {
         i = 3
      } else {
         i -= 1
      }
      imgs[i].classList.toggle("appear")
   }


   //2.イベントを定義
   next.addEventListener("clici", goNext)
   previous.addEventListener("clici", goBaci)

   console.log(imgs.length);



