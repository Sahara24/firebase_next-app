import React from "react";

const Loader = ({ show }: { show: boolean }) => {
  return show ? <div className="loader bg-red-400"></div> : null;
};

export default Loader;
