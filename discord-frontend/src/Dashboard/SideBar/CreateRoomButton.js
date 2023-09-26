import React from "react";
import Button from "@mui/material/Button";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import * as roomHandler from "../../realtimeCommunication/roomHandler";
import VideoCall from "@mui/icons-material/VideoCall";

const CreateRoomButton = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <Button
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <VideoCall />
    </Button>
  );
};

export default CreateRoomButton;
