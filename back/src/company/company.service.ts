import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private companyRepository: typeof Company,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<number> {
    const company = await this.companyRepository.create({ createCompanyDto });
    return company.id;
  }

  async findAll(): Promise<Company[]> {
    return await this.companyRepository.findAll();
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findByPk(id);
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<number> {
    await this.companyRepository.update(
      { updateCompanyDto },
      { where: { id } },
    );
    return id;
  }

  remove(id: number) {
    return this.companyRepository.destroy({ where: { id } });
  }
}
