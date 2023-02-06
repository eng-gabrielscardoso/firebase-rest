import * as Joi from 'joi';

export const validationSchema: Joi.ObjectSchema<Joi.ObjectSchema> = Joi.object({
  /**
   * Setup
   */
  NODE_ENV: Joi.string().default('development'),
  PROJECT_AUTHOR: Joi.string().default('Gabriel Santos Cardoso'),
  /**
   * Development setup
   */
  DEVELOPMENT_BASE_PORT: Joi.number().default('8082'),
  /**
   * Firebase setup
   */
  FIREBASE_SERVICE_ACCOUNT: Joi.any().required(),
  FIREBASE_API_KEY: Joi.string().default('').required(),
  FIREBASE_AUTH_DOMAIN: Joi.string().default('').required(),
  FIREBASE_PROJECT_ID: Joi.string().default('').required(),
  FIREBASE_STORAGE_BUCKET: Joi.string().default('').required(),
  FIREBASE_MESSAGING_SENDER_ID: Joi.string().default('').required(),
  FIREBASE_APP_ID: Joi.string().default('').required(),
  FIREBASE_MEASUREMENT_ID: Joi.string().default('').required(),
  /**
   * Firestore setup
   */
  FIRESTORE_DATABASE_URL: Joi.string().default(''),
});
