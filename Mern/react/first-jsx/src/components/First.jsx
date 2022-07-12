// import { Component } from 'react';

// class First extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             counter: this.props.counter
//         }
//     }
//     render(){
//         const { fullName } = this.props;
//         return(
//             <>
//             <h2>{ fullName }</h2>
//             <p>Clicks: {this.state.counter}</p>
//             <button onClick={ () => this.setState({counter: this.state.counter+1})}>Mystery Button</button>
//             </>
//         );
//     }
// }

// export default First;
// ~~~~~~~~~~~~~~~~~~~~ functional ~~~~~~~~~~~~~~~~~~~~~~~~ //
import { useState } from 'react';
const First = props => {
    const { fullName, counter } = props;
    const [ aCounter, setCounter ] = useState(counter)
    const increaseCounter = () => setCounter(aCounter + 1)
    return(
        <div>
            <h2>{ fullName }</h2>
            <p>Clicks: { aCounter }</p>
            <button onClick={ increaseCounter }>Mystery Button</button>
        </div>
    );
}
export default First;