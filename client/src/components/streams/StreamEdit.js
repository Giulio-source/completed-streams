import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

function StreamEdit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const streams = useSelector((state) => state.streams);
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  const onSubmit = (data) => {
    dispatch(editStream(id, data));
    history.push("/");
  };
  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        title={streams[id] ? streams[id].title : null}
        description={streams[id] ? streams[id].description : null}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default StreamEdit;
