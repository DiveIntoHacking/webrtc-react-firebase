import firebase from 'firebase/app';
import 'firebase/database';

export default class FirebaseSignallingClient {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBywOR167-miFzoIkRRqF-ZGXucjY8KBtg',
      authDomain: 'webrtc-react-firebase.firebaseapp.com',
      databaseURL: 'https://webrtc-react-firebase-default-rtdb.firebaseio.com',
      projectId: 'webrtc-react-firebase',
      storageBucket: 'webrtc-react-firebase.appspot.com',
      messagingSenderId: '434102252074',
      appId: '1:434102252074:web:bafb5e334d3da3933d8953',
    };
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    this.localPeerName = '';
    this.remotePeerName = '';
  }

  setPeerNames(localPeerName, remotePeerName) {
    this.localPeerName = localPeerName;
    this.remotePeerName = remotePeerName;
  }

  get targetRef() {
    return this.database.ref(this.remotePeerName);
  }

  async sendOffer(sessionDescription) {
    await this.targetRef.set({
      type: 'offer',
      sender: this.localPeerName,
      sessionDescription,
    });
  }

  async sendAnswer(sessionDescription) {
    await this.targetRef.set({
      type: 'answer',
      sender: this.localPeerName,
      sessionDescription,
    });
  }
}
