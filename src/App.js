import React, {Component} from 'react'
import UserCard from './container/UserCard'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user : [],
      display: false
    }
  }
  componentDidMount(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => this.setState({
      user: data.results,
      display: true
    }))
  }

  onClickConsole = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => this.setState({
      user: data.results,
      display: true
    }))
    
  }

  render(){
    const {user,display} = this.state;
    const stateData = user;

    return display?
      <div className="App">
        <UserCard stateData = {stateData} click = {this.onClickConsole}/>      
      </div>
      :
      <h1>Loading</h1>
    
  }
  
}

export default App;
