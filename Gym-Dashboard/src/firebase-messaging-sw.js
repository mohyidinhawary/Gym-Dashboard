import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyApyeOA877oKoV1zlB5NOmAigW3qbQn6pU",
    authDomain: "xpower-gym.firebaseapp.com",
    projectId: "xpower-gym",
    storageBucket: "xpower-gym.appspot.com",
    messagingSenderId: "805927800449",
    appId: "1:805927800449:web:a4493d369ee905e34bc780"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const messaging=getMessaging(app);
  getToken(messaging,{vapidKey:'BFd2sxa43ITeYGhCRWAUAAsnwyHIyGImgI1AXBbBvvdi97StAioTGesfX4MXXWzsUFMUOYtpygrDe4emaimOSb8'}).then((currentToken)=>{
    if(currentToken){
        console.log('currentToken',currentToken);
    }
    else{
        console.log('can not get token');
    }
  })