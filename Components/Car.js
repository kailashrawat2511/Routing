import React from 'react'

function Car() {
  return (
    <>
    <h2 className='text-white text-center mt-3'>Latest Cars</h2>
    <div className='container mt-4'>
        <div className='row text-center'>
           <div className='col-lg-4 col-md-12 col-12'>
           <img src='https://images.hindustantimes.com/auto/img/2022/08/21/600x338/BMW_Vision_M_1643109906741_1661053810065_1661053810065.jpg' height="250px" width="340px"></img>
             <h4>Lambhorgini</h4>
           </div>
           <div className='col-lg-4 col-md-12 col-12'>
           <img src='https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg' height="250px" width="340px"></img>
           <h4>Mercedes</h4>
           </div>
           <div className='col-lg-4 col-md-12 col-12'>
           <img src='https://etimg.etb2bimg.com/photo/103088451.cms' height="250px" width="340px"></img>
           <h4>BMW</h4>
           </div>
        </div>
    </div>
    <div className='container mt-3'>
        <div className='row text-center'>
           <div className='col-lg-4 col-md-12 col-12'>
           <img src='https://images.hindustantimes.com/auto/img/2023/03/16/600x338/Volkswagen-ID2all_Concept-2_1678942179609_1678946714484_1678946714484.jpg' height="250px" width="340px"></img>
             <h4>Polo</h4>
           </div>
           <div className='col-lg-4 col-md-12 col-12'>
           <img src='https://images.hindustantimes.com/auto/img/2022/08/21/600x338/BMW_Vision_M_1643109906741_1661053810065_1661053810065.jpg' height="250px" width="340px"></img>
           <h4>Mustang</h4>
           </div>
           <div className='col-lg-4 col-md-12 col-12'>
           <img src='https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg' height="250px" width="340px"></img>
           <h4>Harrier</h4>
           </div>
        </div>
    </div>
    </>
  )
}

export default Car