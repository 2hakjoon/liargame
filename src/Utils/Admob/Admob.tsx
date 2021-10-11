import { AdMobBanner } from 'expo-ads-admob';
import React from 'react';

import { Platform } from 'react-native';

const adBannerUnitId =
  Platform.OS === 'android'
    ? 'ca-app-pub-4810271598340264/4727268488'
    : 'ca-app-pub-4810271598340264/7925628537'; // 광고 ID 입력

console.log(adBannerUnitId)
export const BottomBannerAds = () => (
    <AdMobBanner
    bannerSize="banner"
    adUnitID={adBannerUnitId} // Test ID, Replace with your-admob-unit-id
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={(err) => {
      console.log(err);
    }}
    />
);