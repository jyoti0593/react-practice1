import React, { Component } from 'react';
import Ninjas from './Ninjas';
import NinjasFunction from './NinjasFunction';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      { name: "Rahul", age: 30, belt: "blue", id: 1 },
      { name: "Jyoti", age: 28, belt: "pink", id: 2 },
      { name: "Smita", age: 25, belt: "orange", id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    })
    this.setState({
      ninjas : ninjas
    })
  }
  componentDidMount(){
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState){
console.log('component updated');
console.log(prevProps,prevState);
  }
  render() {
    return (
      <div className="App">
        <p>Welcome :)</p>
        {/* <Ninjas ninjas={this.state.ninjas} /> */}
        <NinjasFunction deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
