import { describe, it, expect } from "@jest/globals";
import faker from "faker";
import { ValidationFactory } from "@/tests/application/factories/ValidationFactory";
import { LevelNotFound } from "@/application/errors";
import { FakeLevelRepository } from "@/tests/domain/level/fakeRepositories/fakeLevelRepository";

describe("Level Not Found Validation", () => {
  it("should be able to return an error if level does not exists", async () => {
    const level = {
      id: -1,
    };

    const fakeRepository = new FakeLevelRepository();

    const levelNotFoundValidation =
      ValidationFactory.levelFoundValidation(fakeRepository);

    const validationResult = await levelNotFoundValidation.validate(level);

    expect(validationResult).toBeInstanceOf(LevelNotFound);
  });

  it("should be able to return nothing if level exists", async () => {
    const level = {
      level: faker.name.jobTitle(),
    };

    const fakeRepository = new FakeLevelRepository();

    const levelCreated = await fakeRepository.create(level);

    const userNotFoundValidation =
      ValidationFactory.levelFoundValidation(fakeRepository);

    const validationResult = await userNotFoundValidation.validate(
      levelCreated
    );

    expect(validationResult).toBeUndefined();
  });
});
