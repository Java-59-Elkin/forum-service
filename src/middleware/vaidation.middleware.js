import Joi from 'joi';

const schemas = {
    createPost: Joi.object({
     title: Joi.string().required(),
     content: Joi.string().required(),
     tags: Joi.array().items(Joi.string())
    }),

    addComment: Joi.object({
        message: Joi.string().required()
    }),

    updatePost: Joi.object({
        title: Joi.string(),
        content: Joi.string(),
        tags: Joi.array().items(Joi.string())
    }),

    getPostsByPeriod: Joi.object({
        dateFrom: Joi.date().iso().required(),
        dateTo: Joi.date().iso().required()
    })
}

const validate = (schemaName, source = 'body') => {
    return (req, res, next) => {
        const schema = schemas[schemaName];

        if (!schema) {
            return next(new Error(`Schema ${schemaName} not found`));
        }

        const {error} = schema.validate(req[source]);  // validate request

        if (error) {
            return res.status(400).send({
                status: 400,
                error: 'Bad request',
                message: error.details[0].message,
                path: req.path
            });
        }

        next();
    }
}

export default validate;