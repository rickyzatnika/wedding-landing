import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="rounded-lg shadow-xl shadow-black/20 bg-gradient-to-bl from-indigo-500 to-indigo-300 relative overflow-hidden">
        {children}
      </div>
    </>
  );
};

export default Card;
