import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SwapiService {
  private readonly URL = process.env.SWAPI_URL;

  async getAllPeople() {
    const response = await axios.get(`${this.URL}/people`);
    return response.data;
  }
}
