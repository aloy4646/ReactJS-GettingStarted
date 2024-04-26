import React from "react"
import ReactDOM from "react-dom/client"
import unsplash from "./unsplash"

const el = document.getElementById("root")

// tell react to take control of that element
const root = ReactDOM.createRoot(el)

class SearchBar extends React.Component{
    state = { term: "" }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search
                            <input 
                                type="text" 
                                value={this.state.term} 
                                onChange={(event) => this.setState({term: event.target.value})}
                            />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

class App extends React.Component{
    state = { 
        images: []
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        })

        this.setState({ images: response.data.results })
        console.log(response.data.results)
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div style={{ marginTop: '20px' }}>
                    {this.state.images.length > 0 && (
                        this.state.images.map((image, index) => (
                            <img 
                                key={index}
                                src={image.urls.thumb} 
                                alt={index}
                                style={{ marginRight: '10px'}}
                            />
                        )
                    ))}
                </div>
            </div>
        )
    }
}

root.render(<App />)