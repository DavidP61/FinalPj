import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div>
      <main>
<<<<<<< HEAD:testt/final_v4/src/routes/EditProfile.js
        <div className="container margin_30_40" style={{ paddingTop: '60px' }}>
=======
        <div className="container margin_30_40">
>>>>>>> 0a5a3a5c93c39b8a16b4390235e7103c7c5058d0:testt/final_v4_test/src/routes/EditProfile.js
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
                <h1>admin</h1>
                <ul>
                  <li>
                    <Link to="/editProfile" className="active">
                      <i className="bi bi-person"></i>Edit profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/editProfile">
                      <i className="bi bi-gear"></i>Account settings
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label>OTT</label>
                    <input type="radio" />
                    {/*<input*/}
                    {/*  type="text"*/}
                    {/*  className="form-control"*/}
                    {/*  placeholder="@Geroge_lucas"*/}
                    {/*/>*/}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Bio</label>
                    {/*<input type="text" className="form-control"/>*/}
                  </div>
                </div>
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
