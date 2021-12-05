import { AdMobBanner } from 'expo-ads-admob';
import React from 'react';

import { Platform } from 'react-native';

import Constants from 'expo-constants';
import styled from 'styled-components/native';


const testID = 'ca-app-pub-3940256099942544/6300978111';

// Is a real device and running in production.

const setBannerId = (Platform.OS === 'android'
? 'ca-app-pub-4810271598340264/4727268488'
: 'ca-app-pub-4810271598340264/7925628537'); // 광고 ID 입력

const adBannerUnitId = Constants.isDevice && !__DEV__ ? setBannerId : testID;


const Wrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom : 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

//console.log(adBannerUnitId)
export const BottomBannerAds = () => (
  <Wrapper>

    <AdMobBanner
    bannerSize="banner"
    adUnitID={adBannerUnitId} // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={(err) => {
      console.log(err);
    }}
    
    />
    </Wrapper>
);