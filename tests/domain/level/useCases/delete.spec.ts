import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { DeleteLevel, CreateLevel } from "@/domain/level/useCases";
import { FakeLevelRepository } from "@/tests/domain/level/fakeRepositories/fakeLevelRepository";

type sutType = {
  createLevelService: CreateLevel;
  deleteLevelService: DeleteLevel;
  fakeRepository: FakeLevelRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeLevelRepository();
  const createLevelService = new CreateLevel(fakeRepository);
  const deleteLevelService = new DeleteLevel(fakeRepository);
  return {
    fakeRepository,
    deleteLevelService,
    createLevelService,
  };
};

describe("delete Level case", () => {
  it("Should be able to call delete repository method", async () => {
    const { deleteLevelService, fakeRepository } = makeSut();

    const fakeDeleteMethodSpy = jest.spyOn(fakeRepository, "delete");

    await deleteLevelService.execute(0);
    expect(fakeDeleteMethodSpy).toBeCalled();
  });

  it("Should be able to delete one level", async () => {
    const { createLevelService, deleteLevelService, fakeRepository } =
      makeSut();
    const levelOne = {
      level: faker.name.jobTitle(),
    };
    const levelTwo = {
      level: faker.name.jobTitle(),
    };

    await createLevelService.execute(levelOne);
    const levelTwoCreated = await createLevelService.execute(levelTwo);
    await deleteLevelService.execute(levelTwoCreated.id);
    const allLevels = await fakeRepository.findAll();
    expect(allLevels.length).toBe(1);
  });
});
