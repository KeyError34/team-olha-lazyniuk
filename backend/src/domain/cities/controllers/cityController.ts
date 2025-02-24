import { Request, Response } from 'express';
import { CityService } from '../services/cityService';

export class CityController {
  private cityService: CityService;

  // Accept CityService as a constructor parameter
  constructor(cityService?: CityService) {
    // Use the provided service or create a new one if none is provided
    this.cityService = cityService || new CityService();
  }

  async getCities(req: Request, res: Response) {
    try {
      const { search = '', page = '1', limit = '5' } = req.query as Record<string, string>;
      const cities = await this.cityService.getCities(
        search,
        parseInt(page, 10),
        parseInt(limit, 10),
      );
      res.status(200).json(cities);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCityById(req: Request, res: Response) {
    try {
      const city = await this.cityService.getCityById(req.params.id);
      res.status(200).json(city);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async createCity(req: Request, res: Response) {
    try {
      const newCity = await this.cityService.createCity(req.body);
      res.status(201).json({ message: 'City created successfully!', city: newCity });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateCity(req: Request, res: Response) {
    try {
      const updatedCity = await this.cityService.updateCity(req.params.id, req.body);
      res.status(200).json({ message: 'City updated successfully!', city: updatedCity });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async deleteCity(req: Request, res: Response) {
    try {
      const result = await this.cityService.deleteCity(req.params.id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
}
// import { Request, Response } from 'express';
// import { CityService } from '../services/cityService';

// export class CityController {
//   private cityService: CityService;

//   constructor() {
//     this.cityService = new CityService();
//   }

//   async getCities(req: Request, res: Response) {
//     try {
//       const { search = '', page = '1', limit = '5' } = req.query as Record<string, string>;
//       const cities = await this.cityService.getCities(
//         search,
//         parseInt(page, 10),
//         parseInt(limit, 10),
//       );
//       res.status(200).json(cities);
//     } catch (error: any) {
//       res.status(500).json({ error: error.message });
//     }
//   }

//   async getCityById(req: Request, res: Response) {
//     try {
//       const city = await this.cityService.getCityById(req.params.id);
//       res.status(200).json(city);
//     } catch (error: any) {
//       res.status(404).json({ error: error.message });
//     }
//   }

//   async createCity(req: Request, res: Response) {
//     try {
//       const newCity = await this.cityService.createCity(req.body);
//       res.status(201).json({ message: 'City created successfully!', city: newCity });
//     } catch (error: any) {
//       res.status(400).json({ error: error.message });
//     }
//   }

//   async updateCity(req: Request, res: Response) {
//     try {
//       const updatedCity = await this.cityService.updateCity(req.params.id, req.body);
//       res.status(200).json({ message: 'City updated successfully!', city: updatedCity });
//     } catch (error: any) {
//       res.status(404).json({ error: error.message });
//     }
//   }

//   async deleteCity(req: Request, res: Response) {
//     try {
//       const result = await this.cityService.deleteCity(req.params.id);
//       res.status(200).json(result);
//     } catch (error: any) {
//       res.status(404).json({ error: error.message });
//     }
//   }
// }
