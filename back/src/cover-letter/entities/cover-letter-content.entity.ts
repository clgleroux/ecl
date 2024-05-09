import {
  Column,
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { CoverLetter } from './cover-letter.entity';

@Table({
  tableName: 'coverLetterContents',
  modelName: 'coverLetterContent',
})
export class CoverLetterContent extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @ForeignKey(() => CoverLetter)
  @AllowNull(false)
  @Column
  coverLetterId: number;

  @BelongsTo(() => CoverLetter)
  coverLetter: CoverLetter;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @Column
  isContentCompany: boolean;

  @AllowNull(false)
  @Column
  position: number;
}
