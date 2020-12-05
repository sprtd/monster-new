import { Component } from 'react'
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.component'


class App extends Component {

  constructor() {
    super() 

    this.state = {
      monsters: [],
      error: null,
      searchField: ''
    }

  }
  

  
  componentDidMount() {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()  
        return this.setState({
          monsters: users
        })
      }
      catch(err) {
        console.log(err)
        return this.setState({error: `Error: ${err.message}`})
        
      }
    }
    fetchData()
  }


  handleChange = (event) => {
    const {value} = event.target
    this.setState({searchField: value}, () => console.log(this.state))
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    

    return (
      <div className='container'>
        <h1>Monster Search App</h1>

        <SearchBox handleChange={this.handleChange}  searchField={this.state.searchField} placeholder='Search monsters' />
        { !filteredMonsters.length  && <p>No matching records found. try again</p> }

        <CardList  monsters={filteredMonsters} />
  
        <p>{this.state.error }</p>

      </div>
    )
  }
}

export default App