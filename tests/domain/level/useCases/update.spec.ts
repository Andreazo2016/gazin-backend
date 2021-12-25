import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { CreateLevel, ListLevel, UpdateLevel } from "@/domain/level/useCases";
import { FakeLevelRepository } from "@/tests/domain/level/fakeRepositories/fakeLevelRepository";

type sutType = {
  createLevelService: CreateLevel;
  updateLevelService: UpdateLevel;
  fakeRepository: FakeLevelRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeLevelRepository();
  const createLevelService = new CreateLevel(fakeRepository);
  const updateLevelService = new UpdateLevel(fakeRepository);
  return {
    fakeRepository,
    updateLevelService,
    createLevelService,
  };
};

describe("Update Level case", () => {
  it("Should be able to call update repository method", async () => {
    const { updateLevelService, fakeRepository } = makeSut();
    const fakeLevel = {
      id: 0,
      level: "some-level",
    };
    const fakeUpdateMethodSpy = jest.spyOn(fakeRepository, "update");
    await updateLevelService.execute(fakeLevel);
    expect(fakeUpdateMethodSpy).toBeCalled();
  });

  it("Should be able to update a level", async () => {
    const { createLevelService, updateLevelService, fakeRepository } =
      makeSut();
    const newLevelDescription = "newLevelDescriptionUpdated";
    const levelOne = {
      level: faker.name.jobTitle(),
    };
    const levelTwo = {
      level: "level before update",
    };
    await createLevelService.execute(levelOne);
    const createLevelTwo = await createLevelService.execute(levelTwo);
    await updateLevelService.execute({
      id: createLevelTwo.id,
      level: newLevelDescription,
    });
    const levelTwoUpdate = await fakeRepository.findById(createLevelTwo.id);
    expect(levelTwoUpdate.level).toEqual(newLevelDescription);
  });
});
