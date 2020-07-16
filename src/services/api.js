import axios from 'axios';
import OPEN_WEATHER_API_KEY from '../config/key';

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_API_KEY}&units=metric`,
});
