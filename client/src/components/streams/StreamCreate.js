import React from "react";
import { useDispatch } from "react-redux";
import { createStream } from "../../actions";
import { useHistory } from "react-router-dom";
import StreamForm from "./StreamForm";

function StreamCreate() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(createStream(data));
    history.push("/");
  };

  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
}

export default StreamCreate;
