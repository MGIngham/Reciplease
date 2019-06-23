import React from 'react';

class TextInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange (event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.inputValue(this.state.value);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ingredients: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }

}

export default TextInput;