import { Module } from '@nestjs/common';
import { CoverLetterService } from './cover-letter.service';
import { CoverLetterController } from './cover-letter.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoverLetterContent } from './entities/cover-letter-content.entity';
import { CoverLetter } from './entities/cover-letter.entity';

@Module({
  imports: [SequelizeModule.forFeature([CoverLetter, CoverLetterContent])],
  controllers: [CoverLetterController],
  providers: [CoverLetterService],
})
export class CoverLetterModule {}
