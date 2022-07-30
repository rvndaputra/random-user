import "@testing-library/jest-dom";
import normalizer from "../normalizer";
import { normalizedRandomUserDataMock, randomUserDataMock } from "../__mocks__";

it("should normalize random user correctly", () => {
  const normalizedUser = normalizer(randomUserDataMock);

  expect(normalizedUser).toStrictEqual(normalizedRandomUserDataMock);
});
