import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'



const App=()=>{
  console.log('render')
    const [searchField,setSearchField] = useState('')
    const [monsters,setMonsters] = useState([])
    const [filteredMonsters,setFilteredMonster] = useState([monsters])
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res)=>res.json())
      .then((users)=>setMonsters(users))
  
    },[])

   useEffect(()=>{
   const newFilteredMonsters =monsters.filter(
    (monster)=>{
        return monster.name.toLowerCase().includes(searchField);
    }
  )
  setFilteredMonster(newFilteredMonsters)
   },[monsters,searchField])
   
   const onSearch = (e)=>{
    const searchTerm = e.target.value.toLowerCase()
        setSearchField(searchTerm)
   }


  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
       <SearchBox onChangeHandler={onSearch} placeholder = 'Search Monsters'/>
       <CardList monsters={filteredMonsters}/>
    </div>
   
  )
}

// class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//       monsters:[],
//       searchTerm:''
//     }
//   }
  
//   componentDidMount(){
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res)=>res.json())
//     .then(user=>{
//       this.setState(()=>{
//        return {monsters:user}
//       })
//     })
//   }

//    onSearch=(e)=>{
//     const searchTerm = e.target.value.toLowerCase()
//         this.setState(()=>{
//             return {searchTerm}
//         })
//    }

//   render(){



//   return (
//     <div className="App">
//        <SearchBox onChangeHandler={this.onSearch} placeholder = 'Search Monsters'/>
//        <CardList monsters={filteredMonsters}/>
//     </div>
   
//   );
//   }
// }

export default App;
