import React from "react"
import ReactDOM from "react-dom/client"

const el = document.getElementById("root")

const root = ReactDOM.createRoot(el)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    // hitungClick = () => {
    //     this.setState({count: this.state.count + 1})
    // }

    render() {
        return  <div>
                    <h1>you clicked {this.state.count} times</h1>
                    <button onClick={this.hitungClick}>click on me!</button>
                    {/* <button onClick={() => this.setState({count : this.state.count + 1})}>click on me!</button> */}
                </div>
    }
}

root.render(<App />)
