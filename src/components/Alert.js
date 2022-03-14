import React from "react";

function Alert(props) {
  const capalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    //the meaning of following syntax is that if props.alert=null the we will not find further value and if props.alert != null then we will find further value also
    props.alert && (
      <div
        className={`alert alert-${props.alert.type}  alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capalized(props.alert.type)}</strong>:{props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}

export default Alert;
