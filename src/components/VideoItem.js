import React from "react";
import "./VideoItem.css";
function VideoItem({ video, onVideoSelect }) {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onVideoSelect(video);
      }}
      className="video-item  item">
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.description}
        className="ui image"
      />
      <div className="content">
        <span className="header"> {video.snippet.title}</span>
        <span className="description">{video.snippet.channelTitle}</span>
      </div>
    </div>
  );
}

export default VideoItem;
