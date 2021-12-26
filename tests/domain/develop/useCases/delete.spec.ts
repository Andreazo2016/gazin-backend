import { describe, it, jest, expect } from "@jest/globals";
import faker from "faker";
import { DeleteDevelop, CreateDevelop } from "@/domain/develop/useCases";
import { FakeDevelopRepository } from "@/tests/domain/develop/fakeRepositories/fakeDevelopRepository";

type sutType = {
  createService: CreateDevelop;
  deleteService: DeleteDevelop;
  fakeRepository: FakeDevelopRepository;
};
const makeSut = (): sutType => {
  const fakeRepository = new FakeDevelopRepository();
  const createService = new CreateDevelop(fakeRepository);
  const deleteService = new DeleteDevelop(fakeRepository);
  return {
    fakeRepository,
    createService,
    deleteService,
  };
};

describe("delete Develop case", () => {
  it("Should be able to call delete repository method", async () => {
    const { deleteService, fakeRepository } = makeSut();

    const fakeDeleteMethodSpy = jest.spyOn(fakeRepository, "delete");

    await deleteService.execute(0);
    expect(fakeDeleteMethodSpy).toBeCalled();
  });

  it("Should be able to delete one develop", async () => {
    const { createService, deleteService, fakeRepository } = makeSut();

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
    const developTwoCreated = await createService.execute(developTwo);
    await deleteService.execute(developTwoCreated.id);
    const all = await fakeRepository.findAll();
    expect(all.length).toBe(1);
  });
});
