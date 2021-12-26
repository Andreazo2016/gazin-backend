import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { CreateDevelop } from "@/domain/develop/useCases";
import { FakeDevelopRepository } from "@/tests/domain/develop/fakeRepositories/fakeDevelopRepository";

type sutType = {
  createDevelopService: CreateDevelop;
  fakeRepository: FakeDevelopRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeDevelopRepository();
  const createDevelopService = new CreateDevelop(fakeRepository);
  return {
    fakeRepository,
    createDevelopService,
  };
};

describe("create Develop case", () => {
  it("Should be able to call create repository method", async () => {
    const { createDevelopService, fakeRepository } = makeSut();

    const fakeCreateMethodSpy = jest.spyOn(fakeRepository, "create");
    const gender = faker.random.arrayElement(["F", "M"]);
    const develop = {
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby",
      levelId: 1,
    };
    await createDevelopService.execute(develop);
    expect(fakeCreateMethodSpy).toBeCalled();
  });

  it("Should be able to create a new develop", async () => {
    const { createDevelopService } = makeSut();
    const gender = faker.random.arrayElement(["F", "M"]);
    const develop = {
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby",
      levelId: 1,
    };
    const developCreated = await createDevelopService.execute(develop);
    expect(developCreated).toHaveProperty("id");
    expect(developCreated.name).toBe(developCreated.name);
    expect(developCreated.sex).toBe(developCreated.sex);
    expect(developCreated.age).toBe(developCreated.age);
    expect(developCreated.dateOfBirth).toBe(developCreated.dateOfBirth);
    expect(developCreated.hobby).toBe(developCreated.hobby);
    expect(developCreated.levelId).toBe(developCreated.levelId);
  });
});
