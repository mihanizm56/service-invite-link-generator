import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  createdLog: Joi.object({
    id: Joi.string().required(),
  }),
});
