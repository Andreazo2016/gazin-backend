import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { CreateLevel } from "@/domain/level/useCases";
import { FakeLevelRepository } from "@/tests/domain/level/fakeRepositories/fakeLevelRepository";

type sutType = {
  createLevelService: CreateLevel;
  fakeRepository: FakeLevelRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeLevelRepository();
  const createLevelService = new CreateLevel(fakeRepository);
  return {
    fakeRepository,
    createLevelService,
  };
};

describe("create Level case", () => {
  it("Should be able to call create repository method", async () => {
    const { createLevelService, fakeRepository } = makeSut();

    const fakeCreateMethodSpy = jest.spyOn(fakeRepository, "create");

    const level = {
      level: faker.name.jobTitle(),
    };
    await createLevelService.execute(level);
    expect(fakeCreateMethodSpy).toBeCalled();
  });

  it("Should be able to create a new level", async () => {
    const { createLevelService } = makeSut();
    const level = {
      level: faker.name.jobTitle(),
    };
    const levelCreated = await createLevelService.execute(level);
    expect(levelCreated).toHaveProperty("id");
    expect(levelCreated.level).toBe(level.level);
  });
});
