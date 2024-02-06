import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PeopleService } from './people.service';
import { CreatePeopleDto } from './dto/create-people.dto';
import { People } from './entities/people.entity';

@ApiTags('People')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('migrate')
  @ApiResponse({ status: 500, description: 'Duplicate entry for key' })
  migrateData() {
    return this.peopleService.migrateData();
  }

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'People was created',
    type: People,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createPeopleDto: CreatePeopleDto) {
    return this.peopleService.create(createPeopleDto);
  }
}
