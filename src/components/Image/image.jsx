//import React from 'react';
import styles from './image.module.css';

export default function Image(props){
    return <>
        <div>
            <img src={props.image} alt="" />
        </div>
  </>
}
