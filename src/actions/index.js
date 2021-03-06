import axios from 'axios';

const API_KEY ='6c3ed975f7e6adab4fce28412326d7b7';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},us`; 
	//react promise waits for payload and sends when ready
	const request=axios.get(url);

	return{
		type: FETCH_WEATHER,
		payload:request
	}

}
