import { DevelopRepository } from "@/domain/develop/repositories";
import { Develop } from "@/domain/develop/model/develop";

export class ListDevelop {
  constructor(private developRepository: DevelopRepository) {}
  async execute(): Promise<Develop[]> {
    return this.developRepository.findAll();
  }
}
