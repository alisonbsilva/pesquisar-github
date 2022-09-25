import styles from './BoxRepo.module.css'
import { Repo } from './Repo'

export function BoxRepo({value}){
   
    return(
        <div className={styles.boxRepoMain}>
            
            <Repo value={value}/> 
        </div>
    )
}