import { IsString } from 'class-validator';

export class CreatePeopleDto {
  @IsString()
  nombre: string;

  @IsString()
  altura: string;

  @IsString()
  masa: string;

  @IsString()
  color_pelo: string;

  @IsString()
  color_piel: string;

  @IsString()
  color_ojos: string;
}
