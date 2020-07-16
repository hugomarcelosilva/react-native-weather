/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import WeatherCard from '../../components/WeatherCard';

import weatherAPI from '../../services/api';

import {
  Container,
  Content,
  Footer,
  ButtonContainer,
  LoadingContainer,
} from './styles';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  // runs on screen startup
  useEffect(() => {
    getLocation();
  }, []);

  // watch location and call async update
  useEffect(() => {
    if (location) {
      asyncGetWeather();
    }
  }, [location]);

  // create location according to user position
  function getLocation() {
    Geolocation.getCurrentPosition(
      e => {
        setLocation({
          lat: e.coords.latitude,
          lon: e.coords.longitude,
        });
      },
      err => console.log(err),
    );
  }

  // request weather data api
  async function asyncGetWeather() {
    let encodedLocation = `lat=${location.lat}&lon=${location.lon}`;
    const response = await weatherAPI.get(`&${encodedLocation}`);
    setWeather(response.data);
  }

  // handle 'Atualizar' button behavior and clean weather
  function handleRefreshButton() {
    setWeather(null);
    getLocation();
  }

  function renderClimate() {
    // render WeatherCard
    if (location) {
      if (weather) {
        return (
          <LoadingContainer>
            <WeatherCard data={weather} />
          </LoadingContainer>
        );
      }
      // render Loading
      return (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    }
  }

  return (
    <Container>
      <Content>{renderClimate()}</Content>
      <Footer>
        <ButtonContainer>
          <Button onPress={handleRefreshButton}>Atualizar</Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
}
