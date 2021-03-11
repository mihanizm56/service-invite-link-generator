import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  formattedResponse: Joi.string()
    .required()
    .allow(undefined)
    .allow(null),
  id: Joi.string().required(),
  request: Joi.string().required(),
  response: Joi.string()
    .required()
    .allow(undefined)
    .allow(null),
  type: Joi.string().required(),
});
