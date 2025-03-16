import React from 'react';
import {FaStar} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { MdSend } from 'react-icons/md';
import {useSateContext} from '../../Context/index';
const Modal = ({ activeTab }) => {
    const {contractMembership,buyMembership} = useSateContext();
    const callMembership = async(memberShip_id) =>{
      const bookMembership =await buyMembership(memberShip_id);
     };
     if (activeTab !== "Modal") {
    return null;
  }
  return (
    <div className='modal rating-modal fate' id="staticBackdrop">
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id ="staticBackdropLabel">
              Pro MemberShip</h1>
               <button
                      className='btn-close'
                      type='button'
                      data-bs-dismiss='modal'
                      aria-label='Close'>
                      <MdSend className="mobil_custum_menu"/>
                </button>
                <div className='modal-body'>
                  <p>Six Monts Plan</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, culpa impedit.
                    Quasi ipsam molestiae magnam ratione soluta totam enim, fugiat placeat possimus provident, 
                   </p>
                   <p>Only: 3 Matic</p>
                   <ul className='star-rating'
                   data-aos="fade-up"
                   data-aos-duration="1000"
                   data-aos-delay="200">
                    {[1,2,3,4,5].map((star)=>(el,i) =>(
                      <li>
                        <FaStar/>
                      </li>
                    ))}
                   </ul>
                </div>
                <div className='modal-footer'>
                  <buttom className='modal-submit m-0'
                      type='button'
                      dats-bs-dismiss="modal"
                      onClick ={()=>{callMembership(2)}}>Upgrade</buttom>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal