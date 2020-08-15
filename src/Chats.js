import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Kallen"
        message="Whats up!"
        timestamp="30 seconds ago"
        profilePic="https://i.pinimg.com/originals/36/eb/a7/36eba75836e2765e2b271b9a8d9df057.png"
      />
      <Chat
        name="C.C"
        message="Hey!"
        timestamp="45 minutes ago"
        profilePic="https://i.pinimg.com/originals/7b/b3/92/7bb392ac6ca957224ba24782c391e0fe.jpg"
      />
      <Chat
        name="Shirley"
        message="Hey! Whats up!"
        timestamp="2 days ago"
        profilePic="https://pbs.twimg.com/profile_images/640802989578539008/bFsxCpQQ.jpg"
      />
      <Chat
        name="Milly"
        message="How are you?"
        timestamp="3 weeks ago"
        profilePic="https://i.pinimg.com/originals/5d/10/85/5d108519cc281880d6f7716961c7a1cc.jpg"
      />
    </div>
  );
}

export default Chats;
