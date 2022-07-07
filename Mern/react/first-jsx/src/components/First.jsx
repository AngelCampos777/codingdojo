import { Component } from 'react';

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    render(){
        const { fullName } = this.props;
        return(
            <>
            <h2>{ fullName }</h2>
            <p>Clicks: {this.state.counter}</p>
            <button onClick={ () => this.setState({counter: this.state.counter+1})}>Mystery Button</button>
            </>
        );
    }
}

export default First;