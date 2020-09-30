import React,{Component} from 'react';
import Select from 'react-select';
import {API} from '../../config';
import axios from 'axios'
import Session from 'react-session-api'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
const $ = require('jquery');
const options = [];
class FellowshipBillJrf extends Component{
  constructor(props) {
        super(props);
        this.state={
          dept_id:'',
          options:[],
          date: new Date()
        }
        this.handleDeptChange = this.handleDeptChange.bind(this);
        this.wrapper = React.createRef();
      
      }
      
      componentWillMount(){
        axios({
          method: 'get',
          url: `${API}/getDepartmentList`,
          timeout: 4000,    // 4 seconds timeout
          headers: {
          Accepts:'application/json',
            "Content-Type":"application/json",
            Authorization: 'Bearer ' +Session.get('token')

          }
        })
        .then(response => {
          //console.log(response.data.data);
            if(response.data.status===true){ //alert();
              response.data.data.data.map((index,values)=>{
                options.push({value: index.id, label: index.name})
               // console.log(options);
              })
             // this.setState({dept_id:response.data.data.history});
              //console.log(this.state.course);
          }else{

          }

        })
        $(document).ready(function() {
          $('#table-1').DataTable({
              responsive:true
          });
      });
      }
      handleDeptChange = selectedOption => {         
           this.setState({dept_id:selectedOption.value})
          // alert(this.state.dept_id);

          axios({
            method: 'post',
            url: `${API}/fellowship/getDepartmentFellowList`,
           // timeout: 4000,    // 4 seconds timeout
            headers: {
            Accepts:'application/json',
              "Content-Type":"application/json",
              Authorization: 'Bearer ' +Session.get('token')
  
            },
            data: {
              dept_id: selectedOption.value,
              
              }
          })
          .then(response => {
            //console.log(response.data.data);
              if(response.data.status===true){ //alert();
               
            }else{
  
            }
  
          })


      };

      render (){
        const { date } = this.state;
        return(
           <div>
         <div className="row">
              <div className="col-md-12 ">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>JRF Bill</h4>
                  </div>
                  <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                     <label className="form-label">Select Deapartment</label>
                     <Select
                           className="basic-single"
                           classNamePrefix="select"
                           defaultValue={options[0]} 
                           isClearable={true}
                           placeHolder="Choose Deapartment"
                           isSearchable={true}
                           name="dept_id"
                           options={options} 
                           onChange ={this.handleDeptChange}
                          />                       
                         </div>

                   </div>

                   <div className="col-md-4">
                   <label className="form-label">Month</label>
                      <div className="form-group">
                     
                      <Flatpickr className="form-control"
                      defaultValue={date}
                      data-enable-time
                      value={date}
                      data-view="months"
                      options={{
                        enableTime: false,
                        dateFormat: "d-m-Y",
                        showMonths:true  
                    }}
                         onChange={date => {
                       this.setState({ date });
                       }}
                          />

                        </div>
                        </div>
                        </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12">
              <div className="card card-info">
                  <div className="card-header">
                    <h4>JRF List</h4>
                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
                        <table id="table-1" className="table table-striped "  role="grid" aria-describedby="example_info">
                            <thead>
                            <tr>
                            <th>Sl.No</th>
                            <th>Admission No</th>
                            <th>Course</th>
                            <th>Branch</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Approvel Letter</th>
                            <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                            </table>
                            </div>
                   </div>
                  </div>
                </div>


              </div>
           </div>
         )}
}
export default FellowshipBillJrf;
