import React from "react";

const ApiPostRequast = async (url = "", optionsOpj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsOpj);
    if (!response.ok) throw Error("Did not recieve expected data");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default ApiPostRequast;
