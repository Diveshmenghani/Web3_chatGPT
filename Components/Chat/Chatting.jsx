import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import {MdPaid} from 'react-icons/md'
//internal import 
import {Form} from "./index";
import {useSateContext} from '../../Context/index';

const Chatting = ({ activeTab }) => {
  // State Variables
  const [active, setActive] = useState("Ask anything");
  const [proMember, setProMember] = useState({});
  const [hide, setHide] = useState(true);
  const [freeTrail, setFreeTrail] = useState();

  const { Free, address } = useSateContext();

  const close = (e) => {
    e.preventDefault();
    setHide(false);
  };

  const display = Free ? Free.replace(/['"]+/g, "") : "";

  const productList = [
    "Ask anything",
    "Content writer",
    "Code generator",
    "Translate anything",
    "Social media",
    "Email generator",
    "Chatting",
    "Video call",
  ];

  const loadData = () => {
    const UserDetail = localStorage.getItem("userDetails");
    const member = JSON.parse(UserDetail);
    // console.log(member);
    setProMember(member);
    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (activeTab !== "chat") {
    return null;
  }

  return (
      <div className="main-wrapper">
         {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-light p-0">
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className='mobil_custom_menu'/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="inner-menu-panel">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
              </div>
              <ul className="inner-link-list" id="innerLink">
                {productList.map((product, i) => (
                  <li
                    key={i + 1}
                    className={`py-2 ${active === product ? "active" : ""}`}
                    onClick={() => setActive(product)}
                  >
                    <a
                      href="#!"
                      className="text-decoration-none d-block"
                      data-title={product}
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        {/* header */}
        <div className="chat-header">
          <div className="d-flex align-items-center gap-2">
            <button  className="navbar-toggler d-md-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainnavbarNav"
            aria-controls="mainnavbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <BiMenu className="mobil_custom_menu"/>
           </button>
           <a href="/" className="logo-icon d-flex d-md-none">
           <img src="assets/svg/logo-icon.svg"
           className="img-fluid"
           alt=""/>
           </a>
           <h3 id="targetDiv">{active}</h3>
          </div>
          <div className="header-option">
            {display == "Pro Member"?(
              <a href="#">{display}</a>
            ):(
              <a className="del-btn" data-cursor="pointer" href="#">
                Free Left (<span id="freeTrail">{Free || 0} / 5</span>)
              </a>
            )}
            <a href="#!"
            className="premium-btn"
            id="subscriptionBtn"
            data-cursor="pointer">
              <MdPaid/> Get <span>premium</span>
            </a>
          </div>
        </div>
          <div className="main-chat">
            <div className="no-chat">
              {hide ? (
                <div>
                  <img src="assets/svg/no-chat.svg" className="img-fluid" alt=""/>
                  <h3>{active == "Ask anything" ? "" : "Ask"} {active} chatbot</h3>
                  {/* <h3>{active == "Ask anything" ? "" : "Ask"}</h3> */}
                </div>
              ) : (
                ""
              )}
            </div>
          <div className="" id="chat_container">
            <Form
            close={close}
            proMember={proMember}
            address={address}
            freeTrail={freeTrail}
            ></Form>
          </div>
        </div>
      </div>
  );
};

export default Chatting;