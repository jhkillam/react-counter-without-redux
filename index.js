class Counter extends React.Component {
  state = {
    count: 0
  }
  increment() {
    const currentState = this.state.count
    const newState = currentState + 1
    this.setState({ count: newState })
  }
  decrement() {
    const currentState = this.state.count
    const newState = currentState - 1
    this.setState({ count: newState })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Increment</button><button onClick={() => this.decrement()}>Decrement</button>
        <div>
          {this.state.count}
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Counter/>, document.getElementById('root'))