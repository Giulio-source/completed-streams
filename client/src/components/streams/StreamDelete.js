import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";

import Modal from "../Modal";

function StreamDelete() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  const currentStream = useSelector((state) => state.streams[id]);

  const actions = (
    <>
      <button
        className="action-one"
        onClick={() => {
          dispatch(deleteStream(id));
          history.push("/");
        }}
      >
        Delete
      </button>
      <Link to="/" className="button">
        Cancel
      </Link>
    </>
  );
  return (
    <Modal
      header="Delete Stream"
      content={
        currentStream
          ? `Are you sure you want to delete the stream ${currentStream.title}`
          : null
      }
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
}

export default StreamDelete;
