import React from "react"
import ReactDOM from "react-dom/client"

const el = document.getElementById("root")

// tell react to take control of that element
const root = ReactDOM.createRoot(el)

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            firstname: "",
            lastname: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event, jenisNama){
        this.setState({[jenisNama]: event.target.value })
    }

    handleSubmit(event){
        alert("A name was submitted: " + this.state.firstname + " " + this.state.lastname)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name: 
                    <input 
                        type="text" 
                        value={this.state.firstname} 
                        onChange={(event) => this.handleChange(event, "firstname")}
                    />
                </label>
                <span> </span>
                <label>
                    Last Name: 
                    <input 
                        type="text" 
                        value={this.state.lastname} 
                        onChange={(event) => this.handleChange(event, "lastname")}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form> 
        )
    }
}

root.render(<Form />)