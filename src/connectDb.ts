//can use this file anytime we want to connect to firestore. Will always be the same code here
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../credentials.json';

export const connectDb = () => {
    if(!getApps().length){
    initializeApp({
        credential: cert(serviceAccount as any),
    })//takes a single object as a parameter. that object has credential (singular)
}
    return getFirestore();
}
    

