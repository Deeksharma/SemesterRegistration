import React,{Component} from 'react';
import {API} from '../../config';
import axios from 'axios';
import Session from 'react-session-api'
class LeaveMaster extends Component{
  constructor(props) {
        super(props);
        this.state={
          error:'',
          course:[],
          list:[],
          course_id:'',
          lpy:'',
          lpm:'',
          rf:'',
          showMsg:false,
          loading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

       }

              componentWillUnmount(){

              }

             componentDidMount(){
               // get course list
               axios({
                 method: 'get',
                 url: `${API}/getCourseList`,
                 timeout: 4000,    // 4 seconds timeout
                 headers: {
                 Accepts:'application/json',
                   "Content-Type":"application/json" },
                   Authorization: 'Bearer ' +Session.get('token')

               })
               .then(response => {
               //  console.log(response.data.data);
                   if(response.data.status===true){ //alert();
                     this.setState({course:response.data.data.course});
                   //  console.log(this.state.course);
                 }else{

                 }

               })
               .catch(error => console.error('timeout exceeded'))

               // get history

               axios({
                 method: 'get',
                 url: `${API}/fellow/getLeaveMaster`,
                 timeout: 4000,    // 4 seconds timeout
                 headers: {
                 Accepts:'application/json',
                   "Content-Type":"application/json",
                   Authorization: 'Bearer ' +Session.get('token')

                 }
               })
               .then(response => {
               //  console.log(response.data.data);
                   if(response.data.status===true){ //alert();
                     this.setState({list:response.data.data.history});
                   //  console.log(this.state.course);
                 }else{

                 }

               })
             }


             handleChange(evt){
             //  alert(evt.target.value);
             //  console.log({[evt.target.name]: evt.target.value});
               let data=[this.setState({ [evt.target.name]: evt.target.value })];
               //  console.log(data);
             }
             onSubmitHandler(e){
                   e.preventDefault();
                   if(this.state.course_id === ''){
                     this.setState({status:false,error:"Please Select Course",showMsg:true});
                     return false;
                   }else{
                      this.setState({status:true,error:"",showMsg:false});
                   }
                   if(this.state.lpy === ''){
                     this.setState({status:false,error:"Please Enter Leave Permissible in a Yearly",showMsg:true});
                     return false;
                   }else{
                      this.setState({status:true,error:"",showMsg:false});
                   }
                   if(this.state.lpm === ''){
                     this.setState({status:false,error:"Please Enter Leave Permissible in a Month",showMsg:true});
                     return false;
                   }else{
                      this.setState({status:true,error:"",showMsg:false});
                  }

                  axios({
                    method: 'post',
                    url: `${API}/fellowship/saveLeaveMaster`,
                  //  timeout: 4000,    // 4 seconds timeout
                    headers: {
                    Accepts:'application/json',
                      "Content-Type":"application/json",
                      Authorization: 'Bearer ' +Session.get('token')
                     },
                    data: {
                       course_id: this.state.course_id,
                       lpy: this.state.lpy,
                       lpm: this.state.lpm,
                       ef: this.state.ef,
                      }
                  })
                  .then(response => {
                  //  console.log(response);
                      if(response.data.status===true){ //alert();
                       this.setState({status:response.data.status,error:response.data.message,showMsg:response.data.showMsg});
                       this.setState({list:response.data.data});
                    }else{
                     // alert('not');
                      this.setState({status:response.data.status,error:response.data.message,showMsg:response.data.showMsg});
                     // console.log(this.state.showMsg);
                    }

                  })
                  .catch(error => console.error('timeout exceeded'))


             }


      render (props){
        return(
           <div>
           
           {  this.state.showMsg ?
                   <div className= {this.state.status ? "alert alert-success" : "alert alert-danger"} role="alert">
                   <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                   <i className="fa fa-frown-o mr-2" aria-hidden="true"></i>{this.state.error}</div>
                   :
                   <div></div>

                 }

  <form onSubmit={this.onSubmitHandler}>
                 <div className="form-group">
                     <label className="form-label">Enter Name</label>
                     <select onChange={this.handleChange} ref={this.ref_input} value={this.state.course_id} name="course_id" className="form-control select2" data-placeholder="Choose Deapartment">
                         <option value="">Please Select</option>
                         {
                           this.state.course.map((value,key)=>{
                               return(
                                 <option key={key} value={value.id}>{value.name} - {value.id}</option>
                               )
                           })
                         }

                         </select>

                   </div>
                   <div className="form-group">
                     <label className="form-label">Leave Permissible Yearly</label>
                     <input type="number" onChange={this.handleChange} value={this.state.lpy} className="form-control" name="lpy" placeholder="Leave Permissible Yearly"/>
                   </div>
                   <div className="form-group">
                      <label className="form-label">Max Leave Permissible Monthly</label>
                      <input type="number" onChange={this.handleChange} value={this.state.lpm} className="form-control" name="lpm" placeholder="Leave Permissible Monthly"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Effective From</label>
                      <input type="text" onChange={this.handleChange} value={this.state.ef} className="form-control datepicker" name="ef" placeholder="Effective From"/>
                    </div>
                    <div className="form-group" style={{textAlign:'center'}}>
                      <input  type="submit" className="btn btn-dark" value="Save"/>
                </div>
                </form>
           </div>
        )}
}
export default LeaveMaster
