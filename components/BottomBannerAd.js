import React from 'react';
import { FacebookAds } from 'expo';

const BottomBannerAd = () => (
    <FacebookAds.BannerView
        placementId="976225125859901_976228722526208"
        type="standart"
        onPress={() => console.log('Banner Ad clicked')}
        onError={err => console.log('Banner Ad error', err)}
    />
);

export default BottomBannerAd;