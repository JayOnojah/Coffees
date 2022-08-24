import { DataSource } from 'typeorm';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavour } from 'src/coffees/entities/flavour.entity';
import { CoffeeRefactor1661313687155 } from 'src/migrations/1661313687155-CoffeeRefactor';
import { SchemaSync1661314510867 } from 'src/migrations/1661314510867-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavour],
  migrations: [CoffeeRefactor1661313687155, SchemaSync1661314510867],
});
