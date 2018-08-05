import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ searchString: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.searchString);
    this.setState({ searchString: '' });
  }

  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <form
          className='input-group'
          onSubmit={this.onFormSubmit}
        >
          <input
            placeholder='Get a five-day forecast in your favorite cities'
            className='form-control'
            value={this.state.searchString}
            onChange={this.onInputChange}
          />
          <span className='input-group-btn'>
            <button
              className='btn btn-secondary'
              type='submit'>
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
