
import React, { Component } from 'react';
import Axios from "axios"
import Avatar from "@material-ui/core/Avatar"
import {getHeader} from "../../AuthUser"

const makestyle = {
  paddingTop: '50px',
};

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      act: 0,
      datas: [
        {name: 'NAME',},
        {name: 'AGE' },
        {name: 'PHONE' },
        {name: 'EMAIL'},
        {name: 'ADDRESS'},
        {name: 'CITY'},
        ],
      profileInfo : [],
    }
  } 

  componentDidMount(){
    this.setState({profileInfo : []})
    this.refs.name.focus();
    Axios.get("/eachUser", getHeader())
    .then((res) => {
      this.setState({profileInfo: res.data});
    })
    .catch((error) => {
      if (error.response.status != 404) {
        console.log(error.response.status);
      }
    });
    
  }

  fSubmit = (e) =>{
    e.preventDefault();
    let datas = this.state.datas;
    let detail = this.refs.detail.value;

    if(this.state.act !== 0){   //updated
      let index = this.state.index;
      datas[index].detail = detail;
    }  

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.detail.focus();
  }


  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.detail.value = data.detail;

    this.setState({
      act: 1,
      index: i
    });
    
    this.refs.detail.focus();
  }  
  render() {
    let datas = this.state.datas;
    let data = this.state.profileInfo;
    return (
      <div className="container">
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="banner banner-2" >
              <Avatar style={{height: '70px' , width: '70px'}}>H</Avatar>
            </div>
            <div>
              {datas.map((profile) => (
                <React.Fragment key={profile.name}>
                  <div className="col-10 "><strong>{profile.name}:</strong></div>
                </React.Fragment>
              ))}
              <strong>{this.state.profileInfo.full_name}</strong>
            </div>
          </div>
          <div className='col-md-1'></div>
          <div className="col-md-5 col-sm-6 col-6">
            <h2 style={{textAlign: 'center'}}>About me</h2>
            <div style={makestyle}>
            <pre>
              {datas.map((data, i) =>
                <div key={i}>
                <input type="text" ref="name" value={data.name} disabled/>
                <input type="text" ref="name"  value={this.state.profileInfo.full_name} disabled/>
                <button onClick={()=>this.fEdit(i)} data-toggle="modal" data-target="#form" >edit</button>
                </div>
              )}
            </pre>
            </div>
          </div>
          <div class="modal fade" id="form">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">Edit Value</h4>
                </div>
                <div class="modal-body">
                  <form ref="myForm" className="myForm" >
                    <div class="col-md-9">
                      <input type="text" ref="detail" className="form-control" />
                    </div>
                    <div class="col-md">
                    <button onClick={(e)=>this.fSubmit(e)} className="btn btn-primary">submit </button>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                </div>
              </div>
              </div>
            </div>
        </div>
            
    );
  }
}

