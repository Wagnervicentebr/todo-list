import { Trash } from 'phosphor-react'

import CheckboxImg from '../assets/checkbox.svg';
import CheckboxCheckedImg from '../assets/checkbox-checked.svg';
import styles from './Card.module.css'
import { useState } from 'react';

interface CardProps {
    id: string
    checked: boolean,
    content: string ,
    onChangeChecked: (id: string) => void,
    onDeleteTask: (id: string) => void
}
export function Card({ id, checked, content, onChangeChecked, onDeleteTask }: CardProps) {

    const [isChecked, setIsChecked] = useState(checked)

    function handdleCheckBox() {
        setIsChecked((state) => {
            return !state;
        });

        onChangeChecked(id);
    }

    function handdleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.card}>
            <div onClick={handdleCheckBox}>
                {isChecked ? <img src={CheckboxCheckedImg} /> :  <img src={CheckboxImg} />}
            </div>
            <div className={styles.contentText}>
                <span 
                    className={isChecked ? styles.lineThrough : styles.lineWithoutThrough}
                >
                    {content}
                </span>
            </div>
            <div onClick={handdleDeleteTask}>
                <Trash size={24} />
            </div>
        </div>
    )
}