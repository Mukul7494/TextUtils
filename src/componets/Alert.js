import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {`${props.alert.type}:${props.alert.msg}`}
          {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
        </div>
      )}
    </div>
  );
}
