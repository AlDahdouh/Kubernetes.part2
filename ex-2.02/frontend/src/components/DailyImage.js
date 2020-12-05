import React from "react";
const baseUrl = `${process.env.REACT_APP_BACKEND_SERVER}/api/images`;

const DailyImage = ({ menu }) => {
  if (menu.activeItem !== "daily image") {
    return <></>;
  }

  let todayDate = new Date().toISOString().slice(0, 10);
  let url = `${baseUrl}/${todayDate}`;
  return <img src={url} alt="today" width="500" height="600" />;
};

export default DailyImage;
