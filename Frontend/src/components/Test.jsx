import React, { useState } from 'react';

const Test = () => {
  const [buttonState, setButtonState] = useState({
    yesBtn: {
      id: "yesBtn",
      text: "Yes",
      className: "btn btn-success p-5 text-lg",
      onClick: () => handleYesClick(),
    },
    noBtn: {
      id: "noBtn",
      text: "No",
      className: "btn btn-error p-5 text-lg",
      onClick: () => handleNoClick(),
    },
  });

  const handleNoClick = () => {
    setButtonState((prev) => ({
      yesBtn: {
        id: prev.noBtn.id,
        text: prev.noBtn.text,
        className: prev.noBtn.className,
        onClick: prev.noBtn.onClick,
      },
      noBtn: {
        id: prev.yesBtn.id,
        text: prev.yesBtn.text,
        className: prev.yesBtn.className,
        onClick: prev.yesBtn.onClick,
      },
    }));
    const answer = document.getElementById("heading");
    answer.innerHTML = "Are you sure?";
  };

  const handleYesClick = () => {
    const answer = document.getElementById("heading");
    answer.innerHTML = "I knew it. I like you too. 😊❤️";

    setButtonState((prev) => ({
      ...prev,
      yesBtn: {
        ...prev.yesBtn,
        className: "btn btn-gray-800 p-5 text-lg disabled:opacity-40",
        onClick: null
        },
        noBtn: {
            ...prev.noBtn,
            className: "btn btn-gray-800 p-5 text-lg disabled:opacity-40",
            onClick: null
            },
    }));
}
  return (
    <div>
      <h1 id="heading" className="text-center mt-20 text-3xl">
        Do you like me 😉?
      </h1>
      <div className="flex w-full justify-evenly mt-48">
        <button
          id={buttonState.yesBtn.id}
          onClick={buttonState.yesBtn.onClick}
          className={`${buttonState.yesBtn.className} w-20 h-20`}
        >
          {buttonState.yesBtn.text}
        </button>
        <button
          id={buttonState.noBtn.id}
          onClick={buttonState.noBtn.onClick} 
          className={`${buttonState.noBtn.className} w-20 h-20  `} 
        >
          {buttonState.noBtn.text}
        </button>
      </div>
    </div>
  );
};

export default Test;
