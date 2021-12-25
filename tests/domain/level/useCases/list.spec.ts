import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { CreateLevel, ListLevel } from "@/domain/level/useCases";
import { FakeLevelRepository } from "@/tests/domain/level/fakeRepositories/fakeLevelRepository";

type sutType = {
  createLevelService: CreateLevel;
  listLevelService: ListLevel;
  fakeRepository: FakeLevelRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeLevelRepository();
  const createLevelService = new CreateLevel(fakeRepository);
  const listLevelService = new ListLevel(fakeRepository);
  return {
    fakeRepository,
    listLevelService,
    createLevelService,
  };
};

describe("List All Level case", () => {
  it("Should be able to call findAll repository method", async () => {
    const { listLevelService, fakeRepository } = makeSut();

    const fakeFindAllMethodSpy = jest.spyOn(fakeRepository, "findAll");
    await listLevelService.execute();
    expect(fakeFindAllMethodSpy).toBeCalled();
  });

  it("Should be able to list all levels", async () => {
    const { createLevelService, listLevelService, fakeRepository } = makeSut();
    const levelOne = {
      level: faker.name.jobTitle(),
    };
    const levelTwo = {
      level: faker.name.jobTitle(),
    };

    await createLevelService.execute(levelOne);
    await createLevelService.execute(levelTwo);
    const levels = await listLevelService.execute();
    expect(levels.length).toBe(2);
  });
});
