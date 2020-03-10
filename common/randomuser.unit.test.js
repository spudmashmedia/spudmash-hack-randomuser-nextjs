import randomuser from "./randomuser";
import {
  single_user,
  single_user_expected_transform
} from "./testData/rnduser";

describe("randomuser tests", () => {
  test("when getHost() returns correct url", () => {
    const result = randomuser.getHost();

    expect(result).toEqual("https://randomuser.me/api/1.3");
  });

  test("when get() should transform randomuser to correct viewmodel", () => {
    const sut = new randomuser(single_user);

    expect(sut.get()).toEqual(single_user_expected_transform);
  });

  test("when formatPath(args) args is null, should return /", () => {
    const result = randomuser.formatPath(null);
    expect(result).toBe("/");
  });

  test("when formatPath(args) args count, gender, nat, should return correct path", () => {
    const count = "1";
    const gender = "2";
    const nat = "3";

    const test_arg = {
      count: count,
      gender: gender,
      nat: nat
    };

    const expect_result = `/?results=${count}&gender=${gender}&nat=${nat}`;

    const result = randomuser.formatPath(test_arg);
    expect(result).toBe(expect_result);
  });
});
