import { firebaseVars } from './firebase.vars';
import { firestoreVars } from './firestore.vars';
import * as firebase from 'firebase-admin';

const serviceAccount = JSON.parse(firebaseVars.serviceAccount);

export function initializeFirebase(): void {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: firestoreVars.databaseUrl,
  });
}
