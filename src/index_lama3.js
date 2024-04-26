import React from "react"
import ReactDOM from "react-dom/client"

const el = document.getElementById("root")

// tell react to take control of that element
const root = ReactDOM.createRoot(el)

class RealTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }

    componentDidUpdate() {
        setTimeout(() => {
          this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }

    render() {
        return  <div>
                <h2>Hello, World!</h2>
                <h2>It is {this.state.time}</h2>
                </div>
    }
}

root.render(<RealTime />)