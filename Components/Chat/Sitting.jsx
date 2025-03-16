import React,{useState,useEffect} from 'react';
import {MdPaid} from 'react-icons/md';
import {BiMenu} from 'react-icons/bi';

//internal import

import {useSateContext} from '../../Context/index';
const Sitting = ({ activeTab }) => {
  const [user,setUser] = useState(null);
  const {userMembership} = useSateContext();

  useEffect(()=>{
    const str = localStorage.getItem("userDetails");
    const parsedObj = JSON.parse(str);

    if(parsedObj?.name){
      setUser(parsedObj);
    }},[]);

  const [userNew,setUsernew] = useState({
    name: user?.name || "",
    surname: "",
    email: user?.email || "",
    password: user?.password || "",
    passwordConfirm: user?.passwordConfirm || "",
  });
  const handleFormFeildChange = (fieldName,e) =>{
    setUsernew({...userNew,[fieldName]: e.target.value});
  };

  const updateUser = () =>{
    const jsonObj = JSON.stringify(userNew);
    localStorage.setItem("userDetails",jsonObj);
    // window.location.reload();
  }
  if (activeTab !== "settings") {
    return null;
  }


  return (
              <div className='main-wrapper p-0'>
                <div className='fixed-header'>
                  <div className='d-flex align-item-center gap-2'>
                    <button
                      className='navbar-toggler d-md-none d-block'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#mainnavbarNav'
                      aria-controls='mainnavbarNav'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                      >
                     <BiMenu className='mobil_custom_menu'/>
                    </button>
                   <a href='/' className='logo-icon d-flrx d-md-none'>
                      <img src='assets/svg/logo-icon.png' className='img-flud' alt=''/>
                   </a>
                   <h3>settings</h3>
                  </div>
                  <a href='/' className='premium-btn' data-cursor='pointer'>
                   <i className='iconsax' data-icon='crown-2'></i>
                    <MdPaid/>Get<span>premium</span>
                  </a>
                </div>
              <div className='main-section d-flex gap-4 flex-column'>
                <div className='container card p-0'>
                  <div className="cardHeader">
                  <h3 className='text-white'>My account</h3>
                  </div>
                  <div className='card-body px-sm px-3'>
                    <div className='my-account'>
                      <div className='user-detail'></div>
                      <div className='user-main'>
                        <div className='user-profile'>
                           <img src='theblockchaincoders.jpg' 
                           className="img-fluid"alt=''/>
                          <i className='iconsax' data-icon='camera'></i>
                        </div>
                          <div className='user-name'>
                            <h4>{user?.name}</h4>
                            <p>{user?.email}</p>
                          </div>
                        </div>
                         <form className='msger-inputarea mb-0'>
                          <div className='row'>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="firstname" className='form-label'>First Name</label>
                                <input type='email'
                                className='msger-input'
                                id='firstname'
                                placeholder={user?.name}
                                onChange={(e) => handleFormFeildChange("name",e)}
                                />
                              </div>
                            </div>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="lastname" className='form-label'>Last Name</label>
                                <input type='email'
                                className='msger-input'
                                id='lastname'
                                placeholder={user?.name}
                                onChange={(e) => handleFormFeildChange("surname",e)}
                                />
                              </div>
                            </div>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="emailid" className='form-label'>Email address</label>
                                <input type='email'
                                className='msger-input'
                                id='emailid'
                                placeholder={user?.name}
                                onChange={(e) => handleFormFeildChange("email",e)}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                        <div className="card-footer">
                          <div className='setting-btn'>
                            <button className='select-plan' onClick={()=>updateUser()}>
                              Update
                            </button>
                            <button className='on-select-plan select-plan'>Cancel</button>
                          </div>
                        </div>
                      </div>
                      {/* second component */}
                      {
                        userMembership && userMembership?.membershipId !==0 &&(
                          <div className='container card p-0'>
                            <div className='card-header'>
                              <h3 className='text-white'>Membership</h3>
                            </div>
                            <div className="card-body px-sm-4 px-3">
                            <div className='my-account'>
                         <form className='msger-inputarea mb-0'>
                          <div className='row'>
                            
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="firstname" className='form-label'>Membership Plan</label>
                                <input type='email'
                                className='msger-input'
                                id='firstname'
                                placeholder={
                                  userMembership.membershipId == 1 ? "One Month"
                                  : userMembership.membershipId == 2 ? "Six Month"
                                  : userMembership.membershipId == 3 ? "yearly"
                                  : ""
                                }
                                />
                              </div>
                            </div>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="lastname" className='form-label'>Membership Cost</label>
                                <input type='email'
                                className='msger-input'
                                id='lastname'
                                placeholder={
                                  userMembership.membershipId == 1 ? "0.0001"
                                  : userMembership.membershipId == 2 ? "0.001"
                                  : userMembership.membershipId == 3 ? "0.005"
                                  : ""
                                }
                                />
                              </div>
                            </div>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="emailid" className='form-label'>Email ID</label>
                                <input type='email'
                                className='msger-input'
                                id='emailid'
                                placeholder={userMembership?.id}
                                onChange={(e) => handleFormFeildChange("email",e)}
                                />
                              </div>
                            </div>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="firstname" className='form-label'>expiredateN</label>
                                <input type='email'
                                className='msger-input'
                                id='firstname'
                                placeholder={`${userMembership?.expiredate || ""}`}
                                onChange={(e) => handleFormFeildChange("name",e)}
                                />
                              </div>
                            </div>
                            <div className='col-sm-6 col-12'>
                              <div className='mb-3'>
                                <label for="firstname" className='form-label'>addressUser</label>
                                <input type='email'
                                className='msger-input'
                                id='firstname'
                                placeholder={userMembership?.addressUser}
                                onChange={(e) => handleFormFeildChange("name",e)}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
              )}
              <div className='container card p-0'>
  <div className='card-header'>
    <h3 className="text-white">Change Password</h3>
  </div>
  <div className='card-body px-sm-4 px-3'>
    <div className='my-account'>
      <form className='msger-inputarea mb-0'>
        <div className='row'>
          <div className='col-12'>
            <div className='mb-3'>
              <label htmlFor="newPassword" className='form-label'>New Password</label>
              <input 
                type='password'
                className='msger-input w-100'
                id='newPassword'
                placeholder="New Password"
                onChange={(e) => handleFormFeildChange("password",e)}
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='mb-3'>
              <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
              <input 
                type='password'
                className='msger-input w-100'
                id='confirmPassword'
                placeholder="Confirm Password"
                onChange={(e) => handleFormFeildChange("passwordConfirm",e)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div className="card-footer">
    <div className="setting-btn">
      <button className="select-plan" onClick={()=>updateUser()}>
        Update password
      </button>
      <button className="select-plan">Cancel</button>
    </div>
  </div>
</div>
</div>
</div>
      )}
export default Sitting;