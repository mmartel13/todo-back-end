//can use this file anytime we want to connect to firestore. Will always be the same code here
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../credentials.json');

exports.connectDb = () => {
    if(!getApps().length){
    initializeApp({
        credential: cert(serviceAccount)
    })//takes a single object as a parameter. that object has credential (singular)
}
    return getFirestore();
}
    

