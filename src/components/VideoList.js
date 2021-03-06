import React from "react";
import VideoItem from "./VideoItem";
function VideoList({ videos, onVideoSelect, selectedVideo }) {
  let newVideos = [];
  if (selectedVideo) {
    newVideos = videos.filter(
      (video) => video.id.videoId !== selectedVideo.id.videoId
    );
  }
  return (
    <div className="ui relaxed divided list">
      {newVideos.map((video) => {
        return (
          <VideoItem
            video={video}
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
