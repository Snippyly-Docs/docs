import * as functions from 'firebase-functions';

import { app } from './db';
import { getServerDocumentId } from './utils/util';

import { commentData, commentDataKey } from './example-data/comment-data';
import { recorderData, recorderDataKey } from './example-data/recorder-data';
import { cursorData } from './example-data/cursor-data';

const demoDB = app.database(process.env.DEMO_DATABASE_URL);

export const setCommentData = functions.runWith({
  maxInstances: 2,
}).https.onRequest(async (req, res) => {
  //set JSON content type and CORS headers for the response
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  //respond to CORS preflight requests
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  const { documentId } = req.body;
  const serverDocumentId = getServerDocumentId(documentId);

  const commentRef = demoDB.ref(`U2omkXino9MftBOvnqxF/docs/${serverDocumentId}/comment/${commentDataKey}`);
  await commentRef.set(commentData);

  res.status(200).send("Success");
});

export const setRecorderData = functions.runWith({
  maxInstances: 2,
}).https.onRequest(async (req, res) => {
  //set JSON content type and CORS headers for the response
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  //respond to CORS preflight requests
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  const { documentId } = req.body;
  const serverDocumentId = getServerDocumentId(documentId);

  const commentRef = demoDB.ref(`U2omkXino9MftBOvnqxF/docs/${serverDocumentId}/recorder/${recorderDataKey}`);
  await commentRef.set(recorderData);

  res.status(200).send("Success");
});

export const setCursorData = functions.runWith({
  maxInstances: 2,
}).https.onRequest(async (req, res) => {
  //set JSON content type and CORS headers for the response
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  //respond to CORS preflight requests
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  const { documentId } = (typeof req.body === 'string') ? JSON.parse(req.body) : req.body;
  if (documentId) {
    const serverDocumentId = getServerDocumentId(documentId);
    const cursorRef = demoDB.ref(`U2omkXino9MftBOvnqxF/docs/${serverDocumentId}/cursor`);
    await cursorRef.set(cursorData);
    res.status(200).send("Success");
  } else {
    res.status(400).send("Bad Request");
  }

});