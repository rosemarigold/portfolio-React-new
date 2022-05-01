import styles from './skill.module.css';
//import Image from '../Image/image';
import React from 'react';

const image1 = "";
export default function Skill(props) {
    return <>
        <div className={styles.skillcontainer}>  
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.paragraph}>
                {props.paragraph}
            </div>
                  
        </div>
    </>
}