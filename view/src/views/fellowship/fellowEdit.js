import React,{Component} from 'react';
import Layout from '../../core/Layout'
import {API} from '../../config';
import {Link} from 'react-router-dom';
import axios from 'axios'
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

      componentDidMount(){
         const id=this.props.match.params.id;
         console.log(id);
         axios({
           method: 'post',
           url: `${API}/fellowship/fellowEdit`,
           timeout: 4000,    // 4 seconds timeout
           headers: {
           Accepts:'application/json',
             "Content-Type":"application/json" },
             data: {
                id: id,
               }
         })
         .then(response => {
           console.log(response.data.data.result);
             if(response.data.status===true){ //alert();
                 this.setState({result:response.data.data.result});
                 this.setState({admn_no:response.data.data.result[0].admn_no});
                 this.setState({dept_id:response.data.data.result[0].dept_id});
                 this.setState({course:response.data.data.result[0].course});
                 this.setState({branch:response.data.data.result[0].branch});
                 this.setState({from_date:response.data.data.result[0].from_date});
                 this.setState({to_date:response.data.data.result[0].to_date});
                 this.setState({id:response.data.data.result[0].id});
                 this.setState({loading:false});
           }else{
               this.setState({status:response.data.status,error:response.data.message,showMsg:response.data.showMsg});
           }

         })
         .catch(error => console.error('timeout exceeded'))
 }

 onSubmitHandler(e){
     e.preventDefault();
     axios({
       method: 'post',
       url: `${API}/fellowship/updateExtensionDetails`,
       timeout: 4000,    // 4 seconds timeout
       headers: {
       Accepts:'application/json',
         "Content-Type":"application/json"
        },
       data: {
        admn_no: this.state.admn_no,
        id: this.state.id,
        dept_id: this.state.dept_id,
        course: this.state.course,
        branch: this.state.branch,
        from_date: this.state.from_date,
        to_date: this.state.to_date,
        remark: this.state.remark
      }
     })
     .then(response => {
       console.log(response.data);
         if(response.data.status===true){ //alert();
          this.setState({status:response.data.status,error:response.data.message,showMsg:response.data.showMsg});
       }else{
        // alert('not');
         this.setState({status:response.data.status,error:response.data.message,showMsg:response.data.showMsg});
        // console.log(this.state.showMsg);
       }

     })
     .catch(error => console.error('timeout exceeded')

   )
}

handleChange(evt){
//  alert(evt.target.value);
//console.log({[evt.target.name]: evt.target.value});
    this.setState({ [evt.target.name]: evt.target.value });
    //console.log(evt.target.value);
}

renderEditForm() {
  const Form = this.state.result.map((item, index) => {
     return (
       <form onSubmit={this.onSubmitHandler}  encType="multipart/form-data" key={index}>
     <div className="row" >
       <div className="card">
                <div className="card-header btn-primary">
                  <h3 className="card-title">Edit</h3>

                  <div className="card-options ">
                  <Link to={`/fellowship/fellowshipExtension`} className="btn btn-warning"><i className="fa fa-arrow-left"></i> Back</Link>
                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Admission No <span style={{color:'red'}}> *</span></label>
                     <input type="text" value={item.admn_no} onChange={this.handleChange}
                     className="form-control" id="admin_no" name="admn_no" placeholder="Admission No" autoComplete="off" readOnly/>
                  </div>
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <input type="text" onChange={this.handleChange} value={item.name} className="form-control" name="dept" placeholder="Department" readOnly/>
                </div>
                <div className="form-group">
                  <label className="form-label">Course</label>
                  <input type="text" onChange={this.handleChange} value={item.course} className="form-control" name="course" placeholder="Course" readOnly/>
                </div>
                <div className="form-group">
                  <label className="form-label">Branch</label>
                  <input type="text" onBlur={this.handleChange} value ={item.branch} className="form-control" name="batch" placeholder="Branch" readOnly/>
                </div>
                <div className="form-group">
                  <label className="form-label">From Date <span style={{color:'red'}}> *</span></label>
                  <div className="wd-200 mg-b-30">
                  <div className="input-group">
                  <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-calendar tx-16 lh-0 op-6"></i>
                  </div>
                </div><input type="text"  onChange={this.handleChange} value ={item.from_date}  className="form-control datepicker"  name="from_date" autoComplete="off" />
               </div>
               </div>
                </div>
                <div className="form-group">
                  <label className="form-label">To Date <span style={{color:'red'}}> *</span></label>
                  <div className="input-group">
                  <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-calendar tx-16 lh-0 op-6"></i>
                  </div>
                </div><input type="text" onChange={this.handleChange} value ={item.to_date}  className="form-control datepicker" name="to_date" autoComplete="off"/>
               </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Remark</label>
                  <input type="text" value={item.remark} onChange={this.handleChange}
                className="form-control" id="remark" name="remark" placeholder="Remark" autoComplete="off"/>
                </div>
               </div>
                <div className="form-group" style={{textAlign:'center'}}>
                    <input type="submit"    className="btn btn-dark" value="Update"/>
               </div>

               </div>

               </div>
               </div>
                </form>
     )
   });
     return Form;
}




      render (){
        return(
           <Layout title='Felowship' discription='Felowship' header='Leave Master'>
           {  this.state.showMsg ?
             <div className= {this.state.status ? "alert alert-success" : "alert alert-danger"} role="alert">
             <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
             <i className="fa fa-frown-o mr-2" aria-hidden="true"></i>{this.state.error}</div>
             :
             <div></div>

           }
              {this.renderEditForm()}

           </Layout>
        )}
}
export default LeaveMaster
