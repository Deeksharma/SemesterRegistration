import React,{Component} from 'react';
import Recaptcha from 'react-recaptcha';


class Component1 extends Component{
    constructor(props) {
        super(props);
        this.handleHuman= this.handleHuman.bind(this);
        this.recaptchaLoaded= this.recaptchaLoaded.bind(this);
        this.verifyCallback= this.verifyCallback.bind(this);
        this.state={
          isVerified: false
        }


       }
    recaptchaLoaded(){
         console.log('recaptcha is successfully loaded!!!!');
    }
    verifyCallback(response){
      if(response){
        this.setState(
          {
            isVerified: true
          }
        )
      }
    }
    handleHuman(){
      if(this.state.isVerified){
        alert('You are not a robot');
      }
      else{
        alert('Please verify that you are a human!!!!!!!');
      }
    }
    render (){
      return(
        <div id="app">
<section className="section">
 <div className="container mt-5">
   <div className="row">
     <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
       <div className="card card-primary">
         <div className="card-header">
           <h4>Important Instructions</h4>
         </div>


              <div className="card-body">
                <form className="needs-validation" onSubmit={this.handleHuman}>
                <Recaptcha
                    sitekey="6LdU6NEZAAAAALTomBF32w2vlC6UXFsOQ2bRboGr"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}
                  />
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" >
                      Pre-Registration
                    </button>
                  </div>
                </form>

              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

        );
      }
}


export default Component1;
