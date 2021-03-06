import React from "react";
import "./App.css";
const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <>
        <div className="ui container">
          <h3 className="name-content">
            Search for your favourite youtube content!
          </h3>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="ui embed">
          <iframe
            title={video.snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header"> {video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
