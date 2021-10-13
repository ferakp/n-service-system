import {
  update,
  executeTest,
  expectElement,
  expectElementAttribute,
  expectElementNumber,
  expectViewModelProperty,
} from "../test-utils";

describe("Test checkbox component", () => {
  const resources = ["../../src/components/checkbox"];

  const html = `
  <checkbox
  checked.two-way="value"
  ></checkbox>`;

  const runTest = (viewModel, done, test) =>
    executeTest(resources, html, viewModel, done, test);

    it("renders component", (done) => {
      runTest({}, done, () => {
        expectElement(".checkbox__container").not.toEqual(null);
        expectElementNumber(".checkbox__input").toEqual(1);
      });
    });
});
