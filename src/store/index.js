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
    },
    actions: {
        async FETCH_OPENWEATHER_API() {
            const API_KEY = 'e7878598157a92ae89d1403b94d8653d';

            let lat = this.nlatitude;
            let lon = this.nlongitude;

            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                const now = res.data.current;

                console.log(now);

                this.sWeatherIcon = now.weather[0].icon;
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
