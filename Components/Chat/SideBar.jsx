import React from "react";
import { BsFillChatFill, BsQuestionSquare, BsStar } from "react-icons/bs";
import { MdPaid, MdSettings, MdClose } from "react-icons/md";

const SideBar = ({ setActiveTab, activeTab }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent p-0 position-fixed top-0 end-0">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainnavbarNav"
        aria-controls="mainnavbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MdClose className="icon-custom" />
      </button>

      <div className="collapse navbar-collapse" id="mainnavbarNav">
        <div className="menu-panel">
          <a href="/" className="logo-icon d-none d-md-flex">
            <img src="assets/svg/logo-icon.svg" alt="Logo" className="img-fluid" />
          </a>

          <ul className="nav nav-tabs menu-wrapper flex-column" id="myTabs" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "subscription" ? "active" : ""}`}
                onClick={() => setActiveTab("subscription")}
              >
                <MdPaid className="icon_custom" />
                <span>Subscription</span>
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "chat" ? "active" : ""}`}
                onClick={() => setActiveTab("chat")}
              >
                <BsFillChatFill className="icon_custom" />
                <span>Chat</span>
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "help" ? "active" : ""}`}
                onClick={() => setActiveTab("help")}
              >
                <BsQuestionSquare className="icon_custom" />
                <span>Help</span>
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
                onClick={() => setActiveTab("settings")}
              >
                <MdSettings className="icon_custom" />
                <span>Settings</span>
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "upgrade" ? "active" : ""}`}
                onClick={() => setActiveTab("upgrade")}
              >
                <BsStar className="icon_custom" />
                <span>Upgrade</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
