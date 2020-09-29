import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import { celebrate, Joi } from 'celebrate'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const upload = multer(multerConfig)

const itemsController = new ItemsController()
const pointsController = new PointsController()

routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index)
routes.post(
  '/points',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        lat: Joi.number().required(),
        lon: Joi.number().required(),
        city: Joi.string().required(),
        county: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  pointsController.create
)
routes.get('/points/:id', pointsController.show)

export default routes
