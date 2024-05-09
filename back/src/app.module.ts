import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { CoverLetterModule } from './cover-letter/cover-letter.module';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    CompanyModule,
    CoverLetterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
