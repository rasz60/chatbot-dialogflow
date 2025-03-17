import React from "react";
import Axios from "axios";
function Chatbot() {
  const textQuery = async (text) => {
    const conversations = [];

    // 1. 내가 보낸 메시지 관리
    let conversation = {
      who: "user",
      content: {
        text: {
          text: text,
        },
      },
    };

    // 2. Dialogflow bot이 보낸 메시지 관리
    const textQueryVariable = {
      text,
    };

    try {
      // textQuery 응답
      const response = await Axios.post(
        "/api/dialogflow/textQuery",
        textQueryVariable
      );
      const content = response.data.fulfillmentMessages[0];

      let conversation = {
        who: "bot",
        content: content,
      };
      console.log(conversation);
    } catch (error) {
      let conversation = {
        who: "bot",
        content: "에러 발생, 오류를 확인하세요.",
      };
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("봇에게 전송할 메세지를 입력해주세요.");
      }

      // textQuery API 전송
      textQuery(e.target.value);

      e.target.value = "";
    }
  };

  return (
    <div
      style={{
        height: 700,
        width: 700,
        border: "3px solid black",
        borderRadius: "7px",
      }}
    >
      <div style={{ height: 644, width: "100%", overflow: "auto" }}></div>

      <input
        style={{
          margin: 0,
          width: "100%",
          height: 50,
          borderRadius: "4px",
          padding: "5px",
          fontSize: "1rem",
        }}
        placeholder="Send a message..."
        onKeyPress={keyPressHandler}
        type="text"
      />
    </div>
  );
}

export default Chatbot;
