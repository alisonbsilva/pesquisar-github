import {  useState } from 'react'
import { BoxBios } from './components/BoxBios'
import { BoxRepo } from './components/BoxRepo'
import styles from './Home.module.css'
import {AlertTriangle, Search} from 'react-feather'

export function App() {
  
  
  function handleButton(event) {    
    event.preventDefault() 
    const urlHome = `https://api.github.com/users/${name}`
    const urlRepos = `https://api.github.com/users/${name}/repos`   
    
    fetch(urlHome )
    .then(reponse => reponse.json())
    .then(data => {
      setDados(data)
      .catch(error => console.log(error))
      
    })
      
    fetch(urlRepos)
    .then(reponse => reponse.json())
    .then(repoDate => {
      setReporData(repoDate)
    })
    .catch(error => console.log(error))
  }  

  const [name, setName] = useState('') 
  const [reporData, setReporData] = useState([])
  const [dados,setDados] = useState([]) 
    

  return (
    
    <div>
      <div
      className={styles.container}
      >
        <form onSubmit={handleButton} className={styles.form}>
          <input            
          onChange={(e)=> {
            setName(e.target.value)            
            }}  
          placeholder='Digite seu GitHub...' 
          type="text" 
          />
          <button onClick={handleButton}><Search size={15}/> Enviar</button> 
        </form>
        <div className={styles.img}>
          <img src={name ? dados.avatar_url: 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'}  />
        </div>
        <BoxBios value={dados } />
        <BoxRepo  value={reporData}/>
      </div>
    </div>
  )
}

