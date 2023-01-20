import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  name: 'defalt',
  type: 'postgres',
  username: 'nomedousuario',
  password: 'postgres',
  host: 'localhost',
  database: 'nestcrud',
  synchronize: false, // Obs: use synchronize: true somente em desenvolvimento.
  entities: ['src/**/*.entity{.ts,.js}', 'src/**/*.view-entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

export const ds = new DataSource(config);
