import React from 'react'
import CarouselBS from './CarouselBS';
import s from './homeStyles.module.css';


function Home() {
  return (
    <div className={s.mainContainer}>
        <div className={s.carouselContainer}>
            <CarouselBS />
        </div>
        
        <section className={s.mainContent}>
            <div className={s.mainContentWrap}>
                {/* carousel */}
                <div className={s.infoContentImg}>
                    <img alt='Imagen de celular Iphone 14' src='https://pngimg.com/uploads/iphone_13/iphone_13_PNG5.png' />
                </div>
                {/* Info about iphone 13 pro max */}
                <div className={s.infoContentText}>
                    <h3>Iphone 13 Pro Max </h3>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque natus hic molestiae mollitia esse nemo ut placeat minus debitis reprehenderit autem nostrum cumque porro, aliquam eius voluptatibus non architecto accusamus cum fuga. Incidunt magni facere voluptatum, odio quis, autem culpa doloribus unde eligendi numquam atque mollitia necessitatibus dolor ipsa beatae alias ut maiores velit qui ex. Blanditiis provident sapiente libero aut suscipit consequatur ea odit repellat ipsam nobis est totam voluptate laboriosam aspernatur exercitationem, numquam odio, vero, labore quas.
                    </p>
                </div>
            </div>

            {/* info about our placement */}

            <div className={s.mapContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6263076255723!2d-58.41294568494821!3d-34.588320980463536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca83d2aa1521%3A0xc7a941fe0d021ba0!2sAlto%20Palermo!5e0!3m2!1sen!2sar!4v1662843379458!5m2!1sen!2sar"></iframe>
            </div>
            <div className={s.ourPlacementInfo}>
                <h3> Veni a visitarnos al <br /> Alto Palermo</h3>
                <p>
                Local 7 <br /> 
                Direccion: Av. Santa Fe 3253 <br /> 
                Ciudad Autonoma de Buenos Aires
                </p>
            </div>

        </section>
    </div>
  )
}

export default Home