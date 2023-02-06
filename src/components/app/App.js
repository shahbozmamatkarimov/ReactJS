import './App.css';
<<<<<<< HEAD
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
=======
import Info from "../info/info";
import Filter from '../filter/filter';
import Search from '../search/search';
import Movelist from '../movie_list/movie_list';
import AddMovie from '../add_movie/add_movie';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Info />
        <div className='content'>
          <Search />
          <Filter />
        </div>
        <div className="content">
          <Movelist />
        </div>
        <div className='content'>
          <AddMovie />
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> 28c2096ab4b970f8377649a1259e684d9f72080d
