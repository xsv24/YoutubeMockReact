import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  onTermChange(term){
	this.setState({term: term});
	this.props.onTermChange(term);
  }
  
  render(){
    return (
      <div className='search-bar'>
        <input 
          value={this.state.term} 
          onChange={ event => this.onTermChange(event.target.value) }/>
      </div>
    );
  }
};

export default SearchBar;
