import React from 'react';

class GetRecipe extends React.Component {

    render() {

        return(
            <div>
                <br />

                {this.props.hits.map((hit,index) => 
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