import React,{Component} from 'react';
import Subheader from '../core/Subheader'
class Home extends Component{
  constructor(props) {
       super(props);
       this.state = {


       }
     }
     componentDidMount(){
        console.log(this.props.location.pathname);
     }
     render(){
        return(
          
         <div>
             <h3>Welcome to MIS V2.0</h3>
         </div>
        )
      };
}
export default Home;
