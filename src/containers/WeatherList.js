import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
// import GoogleMap from '../components/GoogleMap'; // can be used to display the map

class WeatherList extends Component {
  renderWeather = cityData => {
    const tempratures = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.temp);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={tempratures} color='red' units='K' />
        </td>
        <td>
          <Chart data={pressures} color='blue' units='hPa' />
        </td>
        <td>
          <Chart data={humidities} color='green' units='%' />
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
              <th>Temprature(K)</th>
              <th>Pressure(hPa)</th>
              <th>Humidity(%)</th>
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
