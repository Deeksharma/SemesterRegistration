import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../core/Layout'
import { API } from '../../config';
import { Link } from 'react-router-dom';
import Session from 'react-session-api'
import axios from 'axios'
const $ = require('jquery');
$.DataTable = require('datatables.net');

class fellowshipExtension extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admn_no: '',
            course: '',
            branch: '',
            from_date: '',
            to_date: '',
            file: '',
            error: '',
            history: [],
            showMsg: false,
            loading: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }
    EditRow(id){
        alert(id);

    }
    async componentDidMount() {
      //console.log('Bearer ' +Session.get('token'));
            await axios({
                    method: 'get',
                    url: `${API}/getExtensionHistory`,
                    // timeout: 4000,    // 4 seconds timeout
                    headers: {
                        Accepts: 'application/json',
                        "Content-Type": "application/json",
                        Authorization: 'Bearer ' +Session.get('token')
                    }
                })
                .then(response => {
                    console.log(response.data.data.history);
                    if (response.data.status === true) { //alert();
                        this.setState({ history: response.data.data.history });
                        //console.log(this.state.history);
                    } else {

                    }

                })
                .catch(error => console.error(error))


            const columns = [
                { title: "Admission No", data: 'admn_no' },
                { title: 'Course', data: 'branch' },
                { title: "Branch", data: 'course' },
                { title: "From Date", data: 'from_date' },
                { title: "To Date", data: 'to_date' },


            ];
            $(document).ready(function() {
                $('#table-1').DataTable({
                    responsive:true
                });
            });
           


                }


                handleChange(evt) {
                    this.setState({
                        [evt.target.name]: evt.target.value
                    });
                }
                onSubmitHandler(e) {
                    e.preventDefault();
                    if (this.state.from_date === '') {
                        this.setState({ status: false, error: "Please Select fellowship Extension From Date", showMsg: true });
                        return false;
                    } else {
                        this.setState({ status: true, error: "", showMsg: false });
                    }
                    if (this.state.to_date === '') {
                        this.setState({ status: false, error: "Please Select fellowship Extension To Date", showMsg: true });
                        return false;
                    } else {
                        this.setState({ status: true, error: "", showMsg: false });
                    }
                    if (this.state.admn_no === '') {
                        this.setState({ status: false, error: "Please Enter Student Admission No", showMsg: true });
                        return false;
                    } else {
                        this.setState({ status: true, error: "", showMsg: false });
                    }
                    let savedata = {
                            admn_no: this.state.admn_no,
                            course: this.state.course,
                            branch: this.state.branch,
                            from_date: this.state.from_date,
                            to_date: this.state.to_date,
                            file: this.state.file
                        }
                        //  console.log(savedata);
                    axios({
                            method: 'post',
                            url: `${API}/saveExtensionDetails`,
                            timeout: 4000, // 4 seconds timeout
                            headers: {
                                Accepts: 'application/json',
                                "Content-Type": "application/json",
                                Authorization: 'Bearer ' +Session.get('token')

                            },
                            data: { savedata }
                        })
                        .then(response => {
                            // console.log(response.data);
                            if (response.data.status === true) { //alert();
                                this.setState({ status: response.data.status, error: response.data.message, showMsg: response.data.showMsg });
                            } else {
                                // alert('not');
                                this.setState({ status: response.data.status, error: response.data.message, showMsg: response.data.showMsg });
                                // console.log(this.state.showMsg);
                            }

                        })
                        .catch(error => console.error('timeout exceeded'))

                }
                getDetails(event) {
                    //alert(this.state.admn_no);
                    axios({
                            method: 'post',
                            url: `${API}/getStudentDetails`,
                            timeout: 4000, // 4 seconds timeout
                            headers: {
                                Accepts: 'application/json',
                                "Content-Type": "application/json",
                                Authorization: 'Bearer ' +Session.get('token')

                            },
                            data: {
                                admn_no: this.state.admn_no
                            }
                        })
                        .then(response => {
                            //console.log(response.data.data.StudentDetails[0].course_id);
                            if (response.data.status === true) { //alert();
                                this.setState({ course: response.data.data.StudentDetails[0].course_id, branch: response.data.data.StudentDetails[0].branch_id, showMsg: response.data.showMsg });
                                console.log(this.state);
                            } else {
                                //alert('not');
                                this.setState({ status: response.data.status, error: response.data.message, showMsg: response.data.showMsg });
                                // console.log(this.state.showMsg);
                            }

                        })
                        .catch(error => console.error(error))
                }


                render() {
                    const { admn_no, course, branch, from_date, to_date, error, status } = this.state
                    return ( 
                    <div> {
                            this.state.showMsg ?
                            <div className = { this.state.status ? "alert alert-success" : "alert alert-danger" }
                            role = "alert" >
                            <button type = "button"
                            className = "close"
                            data-dismiss = "alert"
                            aria-hidden = "true" > × </button> <
                            i className = "fa fa-frown-o mr-2"
                            aria-hidden = "true" > </i>{this.state.error}</div>
                            :
                                <div > </div>

                        } 
                        <div className = "section-body" >
                        <div className = "row" >
                        <div className = "col-12 col-md-6 col-lg-6" >
                        <div className = "card" >
                        <form onSubmit = { this.onSubmitHandler }
                        encType = "multipart/form-data" >
                        <div className = "card-header" >
                        <h4 > Felowship Extention </h4> </div > 
                        <div className = "card-body" >
                        <div className = "form-group" >
                        <label> Admission No * </label> 
                        <input type = "text"
                        value = { this.state.admin_no }
                        onChange = { this.handleChange }
                        onBlur = { this.getDetails }
                        className = "form-control"
                        id = "admin_no"
                        name = "admn_no"
                        placeholder = "Admission No"
                        autoComplete = "off" / >
                        </div>

                        <div className = "form-group" >
                        <label className = "form-label" > Course </label>
                         <input type = "text"
                        onChange = { this.handleChange }
                        value = { this.state.course }
                        className = "form-control"
                        name = "course"
                        placeholder = "Course"
                        readOnly />
                        </div> 
                        <div className = "form-group">
                        <label className = "form-label" > Branch </label> 
                        <input type = "text"
                        onChange = { this.handleChange }
                        value = { this.state.branch }
                        className = "form-control"
                        name = "batch"
                        placeholder = "Branch"
                        readOnly />
                        </div>


                        <div className = "form-group" >
                        <label className = "form-label" > From Date < span style = {
                            { color: 'red' }
                        } > * </span></label>
                        <div className = "wd-200 mg-b-30" >
                        <div className = "input-group" >
                        <div className = "input-group-prepend" >
                        <div className = "input-group-text" >
                        <i className = "fa fa-calendar tx-16 lh-0 op-6" > </i> 
                        </div>
                         </div>
                         <input type="date"  onChange={this.handleChange} value ={this.state.from_date}  className="form-control "  name="from_date" placeholder="MM-DD-YYYY"   autoComplete="off"/>
                        </div> 
                        </div > </div>


                        <div className = "form-group">
                        <label className = "form-label" > To Date < span style = {
                            { color: 'red' }
                        } > * </span></label >
                        <div className = "input-group" >
                        <div className = "input-group-prepend" >
                        <div className = "input-group-text" >
                        <i className = "fa fa-calendar tx-16 lh-0 op-6" > </i> 
                        </div > 
                        </div>
                        <input type="date" onChange={this.handleChange} value ={this.state.to_date}  className="form-control " name="to_date" placeholder="MM-DD-YYYY"  autoComplete="off"/ >
                        </div> 
                        </div>

                        <div className = "form-group" >
                        <label className = "form-label" > Approvel Letter </label> 
                        <div className = "custom-file" >
                        <input onChange = { this.handleChange }
                        value = { this.state.file }
                        type = "file"
                        className = "custom-file-input"
                        name = "file" / >
                        <label className = "custom-file-label" > Choose file </label>
                         </div> 
                         </div> 
                         <div className = "form-group"
                        style = {
                            { textAlign: 'center' }
                        }>
                        <input type = "submit"
                        className = "btn btn-primary"
                        value = "Upload" />
                        </div>

                        </div> </form ></div>

                        </div>


                        <div className = "col-12 col-md-6 col-lg-6">
                        <div className = "card">
                        <div className = "card-header">
                        <h4> Felowship Extention History </h4> 
                        </div> 
                        <div className = "card-body">
                        <div class="table-responsive">
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
                            {
                              this.state.history.map((value,key)=>{
                                 return(
                                <tr key={key}>
                                <td>{key+1}</td>
                                <td>{value.admn_no}</td>
                                <td>{value.course}</td>
                                <td>{value.branch}</td>
                                <td>{value.from_date}</td>
                                <td>{value.to_date}</td>
                                <td>{value.to_date}</td>
                                <td><Link class="btn btn-warning" to= "/">Edit</Link></td>
                                </tr>
                              )
                              })
                            }
                            </tbody>
                            </table> 
                            </div>
                            </div>
                             </div> 
                             </div>
                             </div> 
                             </div > </div>

                    )
                }
            }
            export default fellowshipExtension;
