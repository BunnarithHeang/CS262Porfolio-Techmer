import React, { Component } from "react";
import Axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { getHeader } from "../../AuthUser";
import { Alert } from "@material-ui/lab";
import { Collapse } from "@material-ui/core";

const makestyle = {
  paddingTop: "50px",
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      act: 0,
      profileInfo: [],
      datas: [],
      alert: {
        show: false,
        message: "",
        type: "",
      },
    };
  }

  componentDidMount() {
    // this.refs.name.focus();
    this.setState({ profileInfo: [] });
    this.setState({ datas: [] });
    Axios.get("/eachUser", getHeader())
      .then((res) => {
        this.setState({ profileInfo: res.data });
        this.setState({
          datas: [
            {
              name: "Date Of Birth",
              detail: this.state.profileInfo.date_of_birth,
              field: "date_of_birth",
            },
            {
              name: "First Name",
              detail: this.state.profileInfo.first_name,
              field: "first_name",
            },
            {
              name: "Last Name",
              detail: this.state.profileInfo.last_name,
              field: "last_name",
            },
            {
              name: "Email",
              detail: this.state.profileInfo.email,
              field: "email",
            },
            {
              name: "Phone Number",
              detail: this.state.profileInfo.phone_number,
              field: "phone_number",
            },
          ],
        });
      })
      .catch((error) => {
        if (error.response.status != 404) {
          console.log(error.response.status);
        }
      });
  }

  fSubmit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let detail = this.refs.detail.value;

    let index = this.state.index;
    if (this.state.act !== 0) {
      //updated
      datas[index].detail = detail;
    }

    this.setState({
      datas: datas,
      act: 0,
    });

    Axios.put("/eachUser", { [datas[index].field]: detail }, getHeader())
      .then((res) => {
        this.setState({
          alert: {
            show: false,
            type: "success",
            message: "Update Successful",
          },
        });
        setTimeout(() => {
          this.setState({
            alert: {
              show: true,
              type: "success",
              message: "Update Successful",
            },
          });
        }, 250);
        // window.location.reload(false);
      })
      .catch((err) => {
        if (err.response) {
          this.setState({
            alert: {
              show: false,
              type: "Error",
              message: "Cannot Update, please try again later",
            },
            act: 0,
          });
          setTimeout(() => {
            this.setState({
              alert: {
                show: true,
                type: "Error",
                message: "Cannot Update, please try again later",
              },
              act: 0,
            });
          }, 250);
        }
      });

    // this.refs.myForm.reset();
    // this.refs.detail.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.detail.value = data.detail;

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.detail.focus();
  };
  render() {
    let datas = this.state.datas;
    return (
      <div className="container">
        <Collapse in={this.state.alert.show}>
          <Alert severity={this.state.alert.type}>
            {this.state.alert.message}
          </Alert>
        </Collapse>
        <div className="col-md-3 col-sm-6 col-xs-6">
          <div className="banner banner-2">
            <Avatar style={{ height: "70px", width: "70px" }}>
              {this.state.profileInfo.first_name?.[0]}
            </Avatar>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h4>Name :</h4>
            </div>
            <div className="col-md-5">
              <h6>{this.state.profileInfo.full_name}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h4>Email :</h4>
            </div>
            <div className="col-md-5">
              <h6>{this.state.profileInfo.email}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h4>Username :</h4>
            </div>
            <div className="col-md-5">
              <h6>{this.state.profileInfo.username}</h6>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 col-sm-9 col-9">
          <h2 style={{ textAlign: "center" }}>About me</h2>
          <div style={makestyle}>
            <pre>
              {datas.map((data, i) => (
                <div key={i}>
                  <input
                    className="col-md-5"
                    type="text"
                    ref="name"
                    value={data.name}
                    disabled
                  />
                  <input
                    className="col-md-6"
                    type="text"
                    ref="name"
                    value={data.detail}
                    disabled
                  />
                  <button
                    onClick={() => this.fEdit(i)}
                    data-toggle="modal"
                    data-target="#form"
                  >
                    edit
                  </button>
                </div>
              ))}
            </pre>
          </div>
        </div>
        <div class="modal fade" id="form">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  Edit Value
                </h4>
              </div>
              <div class="modal-body">
                <form ref="myForm" className="myForm">
                  <div class="col-md-9">
                    <input type="text" ref="detail" className="form-control" />
                  </div>
                  <div class="col-md">
                    <button
                      onClick={(e) => this.fSubmit(e)}
                      className="btn btn-primary"
                    >
                      submit{" "}
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
