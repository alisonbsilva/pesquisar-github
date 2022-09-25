
import styles from './Repo.module.css'
export function Repo({value}){  

        
    return(<div> 
        {value.map(item =>{
        return(
            <div
            key={item.id} 
            className={styles.repo}
            >      
            <strong>
            <a 
            target='_blank' 
            href={item.svn_url}
            >
             {item.name} 
            </a> 
            </strong>
                <p>{item.description} </p>
            
            </div>)
        })}
                
        </div>
            
       
    )
}