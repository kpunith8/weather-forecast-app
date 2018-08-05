import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather = cityData => {
    const tempratures = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={tempratures} color='red' />
        </td>
        <td>
          <Chart data={pressures} color='blue' />
        </td>
        <td>
          <Chart data={humidities} color='green' />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temprature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
}

export default connect(mapStateToProps)(WeatherList);
