import React, { useContext } from "react";

import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

import Header from "../common/Header";

import Context from "../../context";

const Home = () => {
  const { cometChat } = useContext(Context);

  if (!cometChat) return <React.Fragment></React.Fragment>;

  return (
    <React.Fragment>
      <Header />
      <div className="chat">
        <CometChatUI />
      </div>
    </React.Fragment>
  );
};

export default Home;
