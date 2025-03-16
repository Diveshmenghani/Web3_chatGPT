import React from 'react'
import {MdPaid} from 'react-icons/md';
import {BiMenu} from 'react-icons/bi';

const Help = ({ activeTab }) => {
  if (activeTab !== "help") {
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
               <h3>FAQ</h3>
              </div>
              <a href='/' className='premium-btn' data-cursor='pointer'>
               <i className='iconsax' data-icon='crown-2'></i>
                <MdPaid/>Get<span>premium</span>
              </a>
            </div>
          <div className='faa-section main-section'>
            <div className='container card p-0'>
              <div className="cardHeader">
                <h3 className='text-white title-basic aos-init aos-animate'
                data-aos-duration="1000"
                data-aos-delay="100">
                  FAQ</h3>
              </div>
              <div className='card-body px-sm-4 px-3'>
                <div className='accordicon' id="accordionPanelsStayOpenExample">
                  {[1,2,3,4,5].map((el,i) =>(
                    <div
                    className='accordicon-item aos-init aos-animate'
                    dat-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={100 * 1 + 1}>
                      <h2 className='accordicon-header' id="panelsStayOpen-headingOne">
                        <button data-cusor="pointer"
                                class="accordicon-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                aria-controls="panelsStayOpen-collapseOne"
                                aria-expanded="false"
                              >
                              Is the contemt unique?    
                        </button>
                      </h2>
                      <div className="accordion-sollapse collapse show"
                      id="panelsStayOpen-collapseOne"
                      aria-labelledby='panelsStayOpen-collapseOne'>
                        <div className="accordion-body">
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Fuga a corrupti suscipit, aperiam illo itaque distinctio sequi non 
                            ratione perspiciatis consequatur laboriosam cum, 
                            delectus placeat? Dolor temporibus animi impedit? Est.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
  )
}

export default Help