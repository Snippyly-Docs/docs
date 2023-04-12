import * as admin from 'firebase-admin'

// Have default app to use
const app = admin.initializeApp();
export { app }

const firestore = app.firestore();
export default firestore;

const db = app.database();
export { db }
