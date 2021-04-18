import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";
import flv from "flv.js";

function StreamShow() {
  const videoRef = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);
  const player = flv.createPlayer({
    type: "flv",
    url: `http://localhost:8000/live/${id}.flv`,
  });
  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);
  useEffect(() => {
    const buildPlayer = () => {
      if (!stream) {
        return;
      }

      player.attachMediaElement(videoRef.current);
      player.load();
    };
    buildPlayer();
    return () => {
      player.destroy();
    };
  }, [id, stream, player]);

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls></video>
      <p>{stream ? stream.title : null}</p>
      <p>{stream ? stream.description : null}</p>
    </div>
  );
}

export default StreamShow;
