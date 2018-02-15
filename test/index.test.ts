import { expect } from "chai";
import * as pkg from "../src/";

describe("package", () => {
  it("should return 'A promise!'", async () => {
    const r = await pkg.Perform("simple");
    expect(r).to.equal("A simple promise!");
  });
});
