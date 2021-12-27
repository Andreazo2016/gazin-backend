import { describe, it, expect } from "@jest/globals";
import faker from "faker";
import { ValidationFactory } from "@/tests/application/factories/ValidationFactory";
import { ErrorDeleteLevel } from "@/application/errors";
import { FakeLevelRepository } from "@/tests/domain/level/fakeRepositories/fakeLevelRepository";

import { CreateDevelop } from "@/domain/develop/useCases";
import { FakeDevelopRepository } from "@/tests/domain/develop/fakeRepositories/fakeDevelopRepository";

type sutType = {
  createDevelopService: CreateDevelop;
  fakeDevelopRepository: FakeDevelopRepository;
  fakeLevelRepository: FakeLevelRepository;
};
const makeSut = (): sutType => {
  const fakeDevelopRepository = new FakeDevelopRepository();
  const createDevelopService = new CreateDevelop(fakeDevelopRepository);
  const fakeLevelRepository = new FakeLevelRepository();
  return {
    fakeDevelopRepository,
    fakeLevelRepository,
    createDevelopService,
  };
};

describe("Delete Level with Develop Validation", () => {
  it("should be able to return an error if there are develops associated with level", async () => {
    const { createDevelopService, fakeDevelopRepository } = makeSut();
    const level = {
      id: 1,
      level: "CEO",
    };
    const gender = faker.random.arrayElement(["F", "M"]);
    const develop = {
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby",
      levelId: level.id,
    };

    await createDevelopService.execute(develop);
    const deleteLevelWithDevelopValidation =
      ValidationFactory.deleteLevelWithDevelopValidation(fakeDevelopRepository);

    const validationResult = await deleteLevelWithDevelopValidation.validate({
      id: level.id,
    });

    expect(validationResult).toBeInstanceOf(ErrorDeleteLevel);
  });

  it("should be able to return nothing if there are not develops associated with level", async () => {
    const { createDevelopService, fakeDevelopRepository } = makeSut();
    const level = {
      id: 1,
      level: "CEO",
    };
    const gender = faker.random.arrayElement(["F", "M"]);
    const develop = {
      name: faker.name.findName(gender),
      sex: gender,
      age: faker.datatype.number(50),
      dateOfBirth: new Date(),
      hobby: "Some Hobby",
      levelId: 2,
    };

    await createDevelopService.execute(develop);
    const deleteLevelWithDevelopValidation =
      ValidationFactory.deleteLevelWithDevelopValidation(fakeDevelopRepository);

    const validationResult = await deleteLevelWithDevelopValidation.validate({
      id: level.id,
    });

    expect(validationResult).toBeUndefined();
  });
});
