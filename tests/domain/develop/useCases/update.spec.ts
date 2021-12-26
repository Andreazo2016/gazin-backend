import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { UpdateDevelop, CreateDevelop } from "@/domain/develop/useCases";
import { FakeDevelopRepository } from "@/tests/domain/develop/fakeRepositories/fakeDevelopRepository";

type sutType = {
  createService: CreateDevelop;
  updateService: UpdateDevelop;
  fakeRepository: FakeDevelopRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeDevelopRepository();
  const createService = new CreateDevelop(fakeRepository);
  const updateService = new UpdateDevelop(fakeRepository);
  return {
    fakeRepository,
    createService,
    updateService,
  };
};

describe("Update Develop case", () => {
  it("Should be able to call update repository method", async () => {
    const { updateService, fakeRepository } = makeSut();

    const gender = faker.random.arrayElement(["F", "M"]);
    const develop = {
      id: faker.datatype.number(100),
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby first",
      levelId: 1,
    };
    const fakeUpdateMethodSpy = jest.spyOn(fakeRepository, "update");
    await updateService.execute(develop);
    expect(fakeUpdateMethodSpy).toBeCalled();
  });

  it("Should be able to update a develop", async () => {
    const { createService, updateService, fakeRepository } = makeSut();
    const newHobby = "new Hobby teste";
    const gender = faker.random.arrayElement(["F", "M"]);
    const develop = {
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

    await createService.execute(develop);
    const createDevelopTwo = await createService.execute(developTwo);
    await updateService.execute({
      id: createDevelopTwo.id,
      ...developTwo,
      hobby: newHobby,
    });
    const developTwoUpdate = await fakeRepository.findById(createDevelopTwo.id);
    expect(developTwoUpdate.hobby).toEqual(newHobby);
  });
});
