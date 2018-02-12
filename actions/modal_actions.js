import { FacebookAds } from 'expo';

import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL
} from './types';
  
export const openChordsModal = () => ({
    type: OPEN_CHORDS_MODAL,
    payload: true
});

let expirationDate;
  
export const closeChordsModal = () => {
    if(!expirationDate || new Date() > expirationDate) {
        expirationDate = new Date(
            new Date().getTime() + (60 * 1000 * 2)
        );
        FacebookAds.InterstitialAdManager.showAd('976225125859901_976228469192900')
        .then(console.log('Int Add shown'))
        .catch(err => console.log('Interstitial Ad Error' , err));
    }    
    return { type: CLOSE_CHORDS_MODAL, payload: false };
};