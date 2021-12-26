import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { ListDevelop, CreateDevelop } from "@/domain/develop/useCases";
import { FakeDevelopRepository } from "@/tests/domain/develop/fakeRepositories/fakeDevelopRepository";

type sutType = {
  createService: CreateDevelop;
  listService: ListDevelop;
  fakeRepository: FakeDevelopRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeDevelopRepository();
  const createService = new CreateDevelop(fakeRepository);
  const listService = new ListDevelop(fakeRepository);
  return {
    fakeRepository,
    createService,
    listService,
  };
};

describe("List All Develop case", () => {
  it("Should be able to list all develops", async () => {
    const { createService, listService } = makeSut();

    const gender = faker.random.arrayElement(["F", "M"]);

    const developOne = {
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby",
      levelId: 1,
    };

    const developTwo = {
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby Two",
      levelId: 2,
    };

    await createService.execute(developOne);
    await createService.execute(developTwo);
    const develops = await listService.execute();
    expect(develops.length).toBe(2);
  });
});
