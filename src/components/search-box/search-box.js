
import './search-box.styles.css'
const searchBox = (props)=>{
        return(
            <div>
        <input type="search" placeholder={props.placeholder} 
            className = 'search-box'
           onChange={props.onChangeHandler}
        />
            </div>
        )
}

export default searchBox