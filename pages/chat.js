import React, { useState } from "react";
import { Modal, Chatting, Help, History, Subscription, Sitting, SideBar } from "../Components/Chat/index";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("chat"); 

  return (
    <div className="d-flex">
      <section className="chat-wrapper pt-0">
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />

        <div className="tab-content">
          {activeTab === "chat" && <Chatting activeTab={activeTab}/>}
          {activeTab === "subscription" && <Subscription activeTab={activeTab}/>}
          {activeTab === "help" && <Help activeTab={activeTab}/>}
          {activeTab === "history" && <History />}
          {activeTab === "settings" && <Sitting activeTab={activeTab}/>}
          {activeTab === "Modal" && <Modal  activeTab={activeTab}/>}
          {/* <script type="module" src="script.js"></script> */}
        </div>
      </section>
    </div>
  );
};

export default Chat;
