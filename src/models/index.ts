import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import Task from './task';

const db: any = {
  sequelize,
  Sequelize,
  Task
};

export default db;
