import { configuration } from './configuration';

const config = configuration();

export const firestoreVars = {
  databaseUrl: config.FIRESTORE_DATABASE_URL,
};
