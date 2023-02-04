import * as Joi from 'joi';

export const validationSchema: Joi.ObjectSchema<Joi.ObjectSchema> = Joi.object({
  DEVELOPMENT_BASE_PORT: Joi.number().default('8082'),
});
