import { useEffect, useState } from 'react'
import styles from './BoxBios.module.css'


export function BoxBios(props){

    return(
        <div className={styles.boxMain}>
            <strong>{props.value.name || 'Digite Algo Acima 👆'}</strong>
            <span> {props.value.bio || 'Para obter informações do usuário! 👩🏽👨🏽'}</span>
        </div>
    )
}