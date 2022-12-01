import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('main', {
    state: () => ({
        nlatitude: 37.5683, // 위도
        nlongitude: 126.9778, // 경도

        nCurrentTemp: 0, // 현재 온도
        nCurrentHumidity: 0, // 현재 습도
        nCurrentWindSpeed: 0, // 현재 풍속
        nCurrentWindChill: 0, // 현재 체감온도

        sCityName: 'Seoul', // 도시 이름
        sWeatherIcon: '01d', // 현재 날씨 아이콘
        sWeatherStatus: '', // 현재 날씨 상태

        aTimelyWeather: [], // 시간대별 날씨 데이터 배열
        aTimelyWeatherIcons: [], // 시간대별 날씨 아이콘 배열
        aTimelyWeatherHpas: [], // 시간대별 기압 데이터 배열
    }),
    getters: {
        aWeatherInfos: (state) => [
            {
                label: '습도',
                value: `${state.nCurrentHumidity}%`,
            },
            {
                label: '풍속',
                value: `${state.nCurrentWindSpeed}m/s`,
            },
            {
                label: '체감온도',
                value: `${state.nCurrentWindChill}도`,
            },
        ],
        aTimelyWeatherDatas: (state) => {
            const res = [];
            state.aTimelyWeather.map((item) => {
                res.push({ time: item.dt, temp: Math.round(item.temp), humidity: item.humidity });
            });

            return res;
        },
        sReWeatherStatus: (state) => {
            const res = state.sWeatherStatus;
            if (res === 'clear sky') {
                return '맑음';
            } else if (res === 'few clouds') {
                return '조금 흐림';
            } else if (res === 'scattered clouds') {
                return '흐림';
            } else if (res === 'broken clouds') {
                return '매우 흐림';
            } else if (res === 'shower rain') {
                return '폭우';
            } else if (res === 'rain') {
                return '비';
            } else if (res === 'thunderstorm') {
                return '천둥';
            } else if (res === 'snow') {
                return '눈';
            } else {
                return '안개';
            }
        },
    },
    actions: {
        async FETCH_OPENWEATHER_API() {
            const API_KEY = '284bfdeb630520653864189833ba7c68';

            let lat = this.nlatitude;
            let lon = this.nlongitude;

            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                const now = res.data.current;

                const icons = new Array();
                for (let i = 0; i < 48; i++) {
                    const weatherIcon = res.data.hourly[i].weather[0].icon;
                    icons[i] = `src/assets/images/${weatherIcon}.png`;
                }

                this.aTimelyWeatherIcons = icons;
                this.aTimelyWeather = res.data.hourly;
                this.aTimelyWeatherHpas = this.aTimelyWeather.map((item) => {
                    return {
                        time: item.dt,
                        value: item.pressure,
                    };
                });

                this.sWeatherIcon = now.weather[0].icon;
                this.sWeatherStatus = now.weather[0].description;

                this.nCurrentTemp = Math.round(now.temp);
                this.nCurrentHumidity = now.humidity;
                this.nCurrentWindSpeed = now.wind_speed;
                this.nCurrentWindChill = Math.round(now.feels_like);
            } catch (error) {
                console.log('에러가 발생했습니다.', error);
                return error;
            }
        },
    },
});
