import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { People } from './entities/people.entity';
import { SwapiModule } from 'src/swapi/swapi.module';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService],
  imports: [TypeOrmModule.forFeature([People]), SwapiModule],
})
export class PeopleModule {}
