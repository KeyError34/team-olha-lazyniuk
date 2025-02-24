import express from 'express';
import { CityController } from '../cities/controllers/cityController';
import { CityService } from '../cities/services/cityService';
import { CityRepository } from '../cities/repositories/cityRepository';

const router = express.Router();

// Create instances with dependencies
const cityRepository = new CityRepository();
const cityService = new CityService(cityRepository);
const cityController = new CityController(cityService);

// Define your routes
router.get('/', (req, res) => cityController.getCities(req, res));
router.get('/:id', (req, res) => cityController.getCityById(req, res));
router.post('/', (req, res) => cityController.createCity(req, res));
router.put('/:id', (req, res) => cityController.updateCity(req, res));
router.delete('/:id', (req, res) => cityController.deleteCity(req, res));

export default router;
