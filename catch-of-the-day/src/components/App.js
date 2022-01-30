import React from 'react'
import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  }

  addFish = (fish) => {
    console.log('adding a fish')
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes: fishes,
    })
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    console.log(this.state.fishes)
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
