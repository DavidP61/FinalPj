import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Form, Check } from 'react-bootstrap';

const EditProfile = () => {
  return (
    <div>
      <main>
        <div className="container margin_30_40" id="wrapper" style={{ paddingTop: 60 }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="main_profile edit_section">
                <div className="author">
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img src="img/profile.svg" alt="" className="lazy" width="100" height="100" />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
                  <li>
                    <Link to="/editProfile" className="active">
                      <i className="bi bi-person" ></i>Edit profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="bi bi-box-arrow-right"></i>Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 ps-lg-5">
              <div className="main_title version_2">
                <span>
                  <em></em>
                </span>
                <h2>Edit profile</h2>
              </div>
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="form-group">
                    <p>OTT</p>

                    <div className="row col-md-12 ps-lg-12 edit_ott_logos">

                      <div className="row col-lg-4 ps-lg-6 netflix_edit" id="ott_edit">
                        <div className="col-md-7">
                          <img
                              src="img/netflix_logo.jpeg"
                              alt="netflix_logo"
                              className="lazy"
                              width="100"
                              height="100"
                          />
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                              type="switch"
                              id="custom-switch"
                              // label="Netflix"
                          />
                          <p>Netflix</p>
                        </div>
                      </div>

                      <div className="row col-lg-4 ps-lg-6 tving_edit" id="ott_edit">
                        <div className="col-md-7">
                          <img
                            src="img/tving_logo.jpeg"
                            alt="tving_logo"
                            className="lazy"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                              type="switch"
                              id="custom-switch"
                          />
                          <p>Tving</p>
                        </div>
                      </div>

                      <div className="row col-lg-4 ps-lg-6 wavve_edit" id="ott_edit">
                        <div className="col-md-7">
                          <img
                              src="img/wavve_logo.png"
                              alt="wavve_logo"
                              className="lazy"
                              width="100"
                              height="100"
                          />
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                              type="switch"
                              id="custom-switch"
                          />
                          <p>Wavve</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                {/*<div className="col-md-12">*/}
                {/*  <div className="form-group">*/}
                {/*    <label>Bio</label>*/}
                {/*    /!*<input type="text" className="form-control"/>*!/*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              {/*/row*/}
              <hr className="mt-3 mb-5"></hr>
              <p className="text-end mt-4">
                <Link to="/myPage" className="btn_1">
                  Save changes
                </Link>
              </p>
            </div>
          </div>
          {/*/row*/}
        </div>
        {/*/container*/}
      </main>
      {/*/main*/}

      {/*COMMON SCRIPTS*/}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default EditProfile;
