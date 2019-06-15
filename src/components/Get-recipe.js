import React from 'react';
import axios from 'axios';

class GetRecipe extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hits: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        axios.get("https://api.edamam.com/search?q=bacon,cheese,avocado&app_id=9440941b&app_key=b631529b983cd2f88a9437b1c9e22851&from=0&to=5&calories=591-722&health=alcohol-free")
        .then(response => {
            console.log(response.data);
            this.setState({ hits: response.data.hits });
        })
        .catch(error => {
            console.log(error); 
        });
    }

    render() {

        return(
            <div>
                <button onClick={this.handleClick}>Go</button>

                <br />

                {this.state.hits.map((hit,index) => 
                <div key={index}>
                    <h3>
                        {hit.recipe.label}
                    </h3>
                    <li>
                        {hit.recipe.ingredientLines.map((ingredient, index) => <span key={index}>{ingredient}</span>)}
                    </li>
                </div>)}
            </div>
        );
    }
}

export default GetRecipe;