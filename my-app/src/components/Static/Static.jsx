import React from 'react'
import "./Static.scss"
const Static = () => {
  return (
    <div className='static'>
        <div className='static__left'>
            <div className='static__leftt'>
                <h2>Select Your New <br /> Perfect Style</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus qui quia saepe ducimus <br /> optio sapiente exercitationem dolorum. </p>
                <a href="/buttons/41" class="btn41-43 btn-41">
  Shop Now
</a>
            </div>
            <div className='ig'><img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" /></div>

        </div>
        <div className='static__right'>
          <h1>New Arrivals</h1>
          <div className='static__rightt'>
             <div className='staticc__rightt'>
               <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp" alt="" />
               <h4>Thermo Ball Etip Gloves</h4>
               <p>$ 45,743</p>
             </div>
             <div className='staticc__rightt'>
               <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp" alt="" />
               <h4>Thermo Ball Etip Gloves</h4>
               <p>$ 45,743</p>
             </div>
             <div className='staticc__rightt'>
               <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp" alt="" />
               <h4>Thermo Ball Etip Gloves</h4>
               <p>$ 45,743</p>
             </div>

          </div>

        </div>
    </div>
  )
}

export default Static