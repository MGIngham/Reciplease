import React from 'react';
import './App.css';
import Header from './components/Header';
import GetRecipe from './components/Display-recipes';
import TextInput from './components/TextInput';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        hits: [],
        searchInput: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSeachInput = this.handleSeachInput.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    //Variables make up uri for API call. 
    let baseUri = "https://api.edamam.com/search?q=";
    let ingredients = this.state.searchInput;
    let appId = "&app_id=9440941b";
    let appKey = "&app_key=b631529b983cd2f88a9437b1c9e22851";
    let nutritionalParameters = "&from=0&to=5&calories=591-722&health=alcohol-free"

    //Axios (HTTP library) get request.
    axios.get(baseUri + ingredients + appId + appKey + nutritionalParameters)
    .then(response => {
        console.log(response.data);
        this.setState({ hits: response.data.hits });
    })
    .catch(error => {
        console.log(error); 
    });
  }

  handleSeachInput (searchValue) {
    this.setState({ searchInput: searchValue });
  }

  render () {
    return(
      <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
      <TextInput inputValue={this.handleSeachInput}/>
      <button onClick={this.handleClick}>Go</button>
      <GetRecipe hits={this.state.hits} />
      </div>
    </div>
    )
  }

  
}

export default App;
