import { CreateDevelopDto } from "@/domain/develop/dto";
import { DevelopRepository } from "@/domain/develop/repositories/developRepository";
import { Develop } from "@/domain/develop/model/develop";

export class CreateDevelop {
  constructor(private developRepository: DevelopRepository) {}
  async execute(develop: CreateDevelopDto): Promise<Develop> {
    return this.developRepository.create(develop);
  }
}
