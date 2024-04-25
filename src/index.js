import React from "react"
import ReactDOM from "react-dom/client"
import { faker } from "@faker-js/faker"

const el = document.getElementById("root")

// tell react to take control of that element
const root = ReactDOM.createRoot(el)

// function perkenalan(nama, pekerjaan){
//   return <p>Hi nama Saya {nama} dan pekerjaan saya adalah {pekerjaan}</p>
// }

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }
  return new Date(date).toLocaleString("en-US", options)
}

// create a component
class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render(){
    return (
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={this.props.avatar} width={30} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.author}
            </a>
            <div className="metadata">
              <span className="date">{formatDate(this.props.date)}</span>
            </div>
            <span> | Liked: {this.state.count}</span>
            <div className="text">{this.props.comment}</div>
            <button onClick={() => this.setState({count : this.state.count + 1})}>click on me!</button>
          </div>
        </div>
)
  }
}

class App extends React.Component {
  render(){
    const comments = []
    const counter = 50

    for (let i = 0; i < counter; i++) {
      comments.push(
        <div>
          <Comment
            key={i}
            avatar={faker.image.avatar()}
            author={faker.person.fullName()}
            date={faker.date.past()}
            comment={faker.word.words({ count: { min: 1, max: 30 } })}
          />
          <br></br>
        </div>  
      )
    }

    return <div className="ui container comments">{comments}</div>
  }
}

// show the component on the screen
root.render(<App />)
