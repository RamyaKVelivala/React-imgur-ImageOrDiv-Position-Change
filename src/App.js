import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [positionTop, setPositionTop] = useState(144);
  const [positionLeft, setPositionLeft] = useState(400);

  const onClickTopButton = () => {
    if (positionTop === 34) return;
    setPositionTop(positionTop - 10);
  };

  const onClickBottomButton = () => {
    if (positionTop === 264) return;
    setPositionTop(positionTop + 10);
  };

  const onClickLeftButton = () => {
    if (positionLeft === 270) return;
    setPositionLeft(positionLeft - 10);
  };

  const onClickRightButton = () => {
    if (positionLeft === 500) return;
    setPositionLeft(positionLeft + 10);
  };

  return (
    <div className="App">
      <div className="container">
        <button className="top-button" onClick={onClickTopButton} />
        <button className="left-button" onClick={onClickLeftButton} />
        <div
          className="square-box"
          style={{
            top: positionTop + "px",
            left: positionLeft + "px"
          }}
        />
        <button className="right-button" onClick={onClickRightButton} />
        <button className="bottom-button" onClick={onClickBottomButton} />
      </div>
    </div>
  );
}
