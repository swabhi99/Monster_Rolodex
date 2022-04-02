
import './card.styles.css'
import './card-list.styles.css'
const card =(props)=>{
         const {monsters} = props
        return(
            <div className="card-list">
                 {monsters.map((monster)=>{
                    return(
                     <div key={monster.id} className="card-container">
                     <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`${monster.name} monster` }/>
                     <h1>{monster.name}</h1>
                     <p>{monster.email}</p>
                     </div>
                    )
                
            })}
            </div>
        )
}

export default card