import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('people')
@Unique(['nombre'])
export class People {
  @ApiProperty({
    example: '7c901a05-619b-419e-885b-e2580fb8b061',
    description: 'uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Luke Skywalker',
    description: 'Nombre de la persona',
  })
  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @ApiProperty({
    example: '172',
    description: 'Altura en centimetros',
  })
  @Column({ type: 'varchar', nullable: false })
  altura: string;

  @ApiProperty({
    example: '77',
    description: 'cantidad de masa',
  })
  @Column({ type: 'varchar', nullable: false })
  masa: string;

  @ApiProperty({
    example: 'Marron',
    description: 'Color de pelo',
  })
  @Column({ type: 'varchar', nullable: false })
  color_pelo: string;

  @ApiProperty({
    example: 'Claro',
    description: 'Color de piel',
  })
  @Column({ type: 'varchar', nullable: false })
  color_piel: string;

  @ApiProperty({
    example: 'Verde',
    description: 'Color de ojos',
  })
  @Column({ type: 'varchar', nullable: false })
  color_ojos: string;
}
