import React, { Component } from 'react'

export default class Loading extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        text: 'Loading'
      };
    }
    componentDidMount() {
      const stopper = this.state.text + '...';

      this.interval = window.setInterval(() => {
        this.state.text === stopper
          ? this.setState(() => ({ text: 'Loading' }))
          : this.setState((prevState) => ({ text: prevState.text + '.' }))
      }, 300)
    }
    componentWillUnmount() {
      window.clearInterval(this.interval);
    }
    render() {
      return (
        <div className="text-align-center">
            <h1>
            {this.state.text}
            </h1>
        </div>
      )
    }
}
// export default class loading extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             loading: true,
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     {this.state.loading === true ? <Loading /> : 
//                     <div>
//                         <h1>asdfasf</h1>
//                     </div>}
//                 </div>
//             </div>
//         )
//     }
// }
