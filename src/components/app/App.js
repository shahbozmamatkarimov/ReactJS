import './App.css';
import { Component } from "react"

class Change extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    Up = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    Reset = () => {
        this.setState({ counter: 0 })
    }

    render() {
        return (
            <div>
                <div className="tasbeh" id="maindev">
                    <h1 id="number" className="p-1">{this.state.counter}</h1>
                    <p className="btn btn-secondary button p1 bgcolor" onClick={this.Up}></p>
                    <p className="reset bgcolor" onClick={this.Reset}></p>
                </div>
            </div>
        )
    }
}

export default Change;
