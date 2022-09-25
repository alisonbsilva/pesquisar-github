import {  useState } from 'react'
import { BoxBios } from './components/BoxBios'
import { BoxRepo } from './components/BoxRepo'
import styles from './Home.module.css'
import {Search} from 'react-feather'

export function App() {
  
  
  function handleButton(event) {    
    event.preventDefault() 
    const urlHome = `https://api.github.com/users/${name}` 
    const urlRepos = `https://api.github.com/users/${name}/repos`   
    
    fetch(urlHome)
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
    event.target.value = ''
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
          <img src={dados.avatar_url} />
        </div>
        <BoxBios value={dados} />
        <BoxRepo  value={reporData}/>
      </div>
    </div>
  )
}

