import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

function StreamList() {
  const dispatch = useDispatch();
  const streams = Object.values(useSelector((state) => state.streams));
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchStreams());
  }, []);

  const renderedButtons = (streamId, id) => {
    if (auth.userId === streamId && auth.userId !== null) {
      return (
        <div className="stream-buttons flex">
          <Link to={`/streams/edit/${id}`} className="button">
            Edit
          </Link>
          <Link to={`/streams/delete/${id}`} className="button">
            Delete
          </Link>
        </div>
      );
    } else {
      return;
    }
  };

  const renderedStreams = streams.map((stream) => (
    <div className="stream-item" key={stream.id}>
      <div className="stream-content">
        <Link to={`/streams/${stream.id}`} className="stream-title">
          {stream.title}
        </Link>
        <p className="stream-description">{stream.description}</p>
      </div>
      {renderedButtons(stream.userId, stream.id)}
    </div>
  ));

  const renderCreate = () => {
    if (auth.isSignedIn) {
      console.log("I am signed in");
      return (
        <Link to="/streams/create" className="button">
          Create Stream
        </Link>
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="streams-list">
        {renderedStreams ? renderedStreams : ""}
      </div>
      <div className="create-container flex jcfe">{renderCreate()}</div>
    </div>
  );
}

export default StreamList;
