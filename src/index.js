import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'API_KEY';

export default class App extends Component{
	constructor(props){
		super(props);

		this.state = {videos: [], selectedVideo: null};
	}

	componentWillMount(){
		this.videoSearch('paintball');
	}

	videoSearch(term){
		YTSearch(
			{key: YOUTUBE_API_KEY, term: term}, 
			(videos) => this.setState({videos: videos, selectedVideo: videos[0]})
		);
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}>
				</VideoList>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));
