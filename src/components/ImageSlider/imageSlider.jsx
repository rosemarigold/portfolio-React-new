import styles from './imageSlider.module.css';
import SliderData from './SliderData';
import { useRef, useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
  
    const previousSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    console.log(current);

    {/* if there's no data, array is empty */}
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return <>
    <section className={styles.slider}>
        
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={previousSlide} />
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="project-images" className={styles.image}/>)}
                        {/* <div> {slide.description}</div>*/}
                    </div>
                ) 
            })}
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide}/>
    </section>
    </>
};

export default ImageSlider;