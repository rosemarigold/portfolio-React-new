// source: https://www.youtube.com/watch?v=l1MYfu5YWHc&ab_channel=BrianDesign
// https://github.com/briancodex/react-image-slider-carousel/tree/main/src

import styles from './imageSlider1.module.css';
import SliderData1 from './SliderData1';
import { useRef, useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider1 = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
  
    const previousSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    {/*console.log(current);*/}

    {/* if there's no data, array is empty */}
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return <>
    <section className={styles.slider}>
        
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={previousSlide} />
            {SliderData1.map((slide, index) => {
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

export default ImageSlider1;