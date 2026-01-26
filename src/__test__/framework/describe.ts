import { TestCase } from "./test";

export function describe(title: string, tests: TestCase[]) {
  console.log(`${title}:`);

  let succeded = 0;
  let failed = 0;

  for (const test of tests) {
    try {
      test.fn();
      succeded++;
    } catch (e) {
      const err = e instanceof Error ? e.message : e;
      const errMessage = `    Failed: ${err}`;
      console.log(errMessage);
      failed++;
    }
  }

  console.log();
  console.log(
    `Total: ${tests.length} | Succeded: ${succeded} | Failed: ${failed}`,
  );
  console.log("==========");
  console.log();
}
