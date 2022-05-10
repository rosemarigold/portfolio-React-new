import styles from './imageSlider.module.css';
import { SliderData } from './SliderData';

export default function ImageSlider() {
  
    return <>
           {SliderData.map((slide, index) => {
               return (
                    <img src={slide.image} alt="image1"/>      
               )
           })}
    </>
}