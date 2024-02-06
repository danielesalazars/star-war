import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeopleDto } from './dto/create-people.dto';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';
import { SwapiService } from 'src/swapi/swapi.service';

@Injectable()
export class PeopleService {
  private readonly logger = new Logger('PeopleService');

  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
    private readonly swapiService: SwapiService,
  ) {}

  async create(createPeopleDto: CreatePeopleDto): Promise<People> {
    try {
      const people = this.peopleRepository.create(createPeopleDto);
      await this.peopleRepository.save(people);

      return people;
    } catch (error) {
      this.handleDBExpections(error);
    }
  }

  async migrateData(): Promise<People> {
    const swapiData = await this.swapiService.getAllPeople();

    const mappedData = swapiData.results.map((item) => ({
      nombre: item.name,
      altura: item.height,
      masa: item.mass,
      color_pelo: item.hair_color,
      color_piel: item.skin_color,
      color_ojos: item.eye_color,
    }));
    try {
      const savedData = await this.peopleRepository.save(mappedData);
      return savedData;
    } catch (error) {
      this.handleDBExpections(error);
    }
  }

  findAll() {
    return this.peopleRepository.find({});
  }

  private handleDBExpections(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check Server Logs',
    );
  }
}
