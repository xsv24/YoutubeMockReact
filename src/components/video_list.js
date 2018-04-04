import React, { Component } from 'react';
import VideoItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
	return (
		<ul className='col-md-4 list-group'>
			{
				videos.map((video) => {
					return (
						<VideoItem
							key={video.etag}
							video={video}
							onVideoSelect={onVideoSelect} />
					);
				})
			}
		</ul>
	);
}

export default VideoList;
