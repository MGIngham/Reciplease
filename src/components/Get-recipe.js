import React from 'react';
import axios from 'axios';

class GetRecipe extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hits: ''
        }
    }



    componentDidMount(){

        axios.get("https://api.edamam.com/search?q=bacon,cheese,avocado&app_id=9440941b&app_key=b631529b983cd2f88a9437b1c9e22851&from=0&to=5&calories=591-722&health=alcohol-free")
        .then(response => {
            console.log(response.data);
            this.setState({ hits: response.data });
        })
        .catch(error => {
            console.log(error); 
        });

    };

    render() {
        const { hits } = this.state;
        return(
            <p>{hits}</p>            
        );
    }
}

export default GetRecipe;