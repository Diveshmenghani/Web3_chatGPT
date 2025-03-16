import React, { useState, useEffect } from 'react';
import { MdPaid } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
// Internal import
import { useSateContext } from '../../Context/index';

const Subscription = ({ activeTab }) => {
  const { contractMembership, buyMembership } = useSateContext();

  const callMembership = async (memberShip_id) => {
    await buyMembership(memberShip_id);
  };

  // Only render if activeTab is "subscription"
  if (activeTab !== "subscription") {
    return null;
  }

  return (
    <div className='main-wrapper p-0'>
      <div className='fixed-header'>
        <div className='d-flex align-items-center gap-2'>
          <button
            className='navbar-toggler d-md-none d-block'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#mainnavbarNav'
            aria-controls='mainnavbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <BiMenu className='mobil_custom_menu' />
          </button>
          <a href='/' className='logo-icon d-flex d-md-none'>
            <img src='assets/svg/logo-icon.png' className='img-fluid' alt='' />
          </a>
          <h3>Subscription</h3>
        </div>
        <a href='/' className='premium-btn' data-cursor='pointer'>
          <MdPaid /> Get <span>premium</span>
        </a>
      </div>

      <div className='main-section'>
        <div className='container card p-0'>
          <div className='card-header'>
            <h3 className='text-white'>Choose Period Of Plan</h3>
            <div className='header-option d-none d-md-flex'>
              <label htmlFor="currency" className="form-label text-white">
                Currency
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="currency"
              >
                <option defaultValue>ETH</option>
                <option value="1">USD</option>
                <option value="2">EURO</option>
              </select>
            </div>
          </div>

          {/* Card Membership Section */}
          <div className='card-body px-sm-4 px-3'>
            <div className='row justify-content-center'>
              {contractMembership.map((membership, i) => (
                <div key={i} className='card inner-card'>
                  <div className='card-header'>
                    <img
                      src={`assets/svg/pricing/${
                        membership.membership_name === "One Month"
                          ? "weekly.svg"
                          : membership.membership_name === "Six Month"
                          ? "monthly.svg"
                          : "yearly.svg"
                      }`}
                      alt=''
                      className='img-fluid'
                    />
                    <h4 className='text-white mb-0'>{membership.membership_name}</h4>
                  </div>
                  <div className='card-body'>
                    <h3>{membership.membership_cost} </h3>
                    <ul>
                      <li>Unlimited Access</li>
                      <li>Free Update</li>
                      <li>Free Support</li>
                      <li>Unlimited Users</li>
                    </ul>
                    <button
                      className="select-plan"
                      onClick={() => callMembership(membership.membership_id)}
                    >
                      Select This Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className='subscription-continue'>
              <button className='no-selected-plan selected-plan'>Continue</button>
              <a href='#' className='text-white'>
                Continue with limited version
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
