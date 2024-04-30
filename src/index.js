import React from "react"
import ReactDOM from "react-dom/client"
import unsplash from "./unsplash"
import './ImageList.css'

const el = document.getElementById("root")

// tell react to take control of that element
const root = ReactDOM.createRoot(el)

class ImageList extends React.Component{
    render(){
        const images = this.props.images.map((image, index) => (
                            <ImageCard 
                                image = {image}
                            />
                        ))

        return <div className="image-list">{images}</div>
    }
}

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }

    render(){
        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}


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
                        <ImageList 
                            images={this.state.images}
                        />
                    )}
                </div>
            </div>
        )
    }
}

root.render(<App />)