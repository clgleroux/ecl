import {
  Column,
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { CoverLetterContent } from './cover-letter-content.entity';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'coverLetters',
  modelName: 'coverLetter',
})
export class CoverLetter extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @Column(DataTypes.JSON)
  tags: any;

  @HasMany(() => CoverLetterContent)
  coverLetterContents: CoverLetterContent[];
}
