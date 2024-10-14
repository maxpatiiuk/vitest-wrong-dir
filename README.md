# globalSetup is executed with wrong CWD

When using `vitest.workspace.ts` file in a monorepo, the `globalSetup` script is
executed with the CWD set to the monorepo root rather than the package root.

The `vite.config.ts` is correctly executed with the package root as CWD.

`npx vitest run` output:

```log
npx vitest run
🟥 vite.config.ts cwd: /home/maxpatiiuk/vitest-wrong-dir/packages/calcite-components

 RUN  v2.1.2 /home/maxpatiiuk/vitest-wrong-dir

🟥 globalSetup.ts cwd: /home/maxpatiiuk/vitest-wrong-dir

 ✓ |@esri/calcite-components| src/utils/component.spec.ts (1)
   ✓ 1 (1)
     ✓ 2

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  10:30:50
   Duration  1.25s (transform 95ms, setup 0ms, collect 30ms, tests 1ms, environment 0ms, prepare 501ms)
```

## Reproduction

1. Clone this repository & install dependencies (or use Stackblitz):

   ```sh
   git clone https://github.com/maxpatiiuk/vitest-wrong-cwd
   cd vite-wrong-cwd
   npm install
   ```

2. Run `npx vitest run` from monorepo root. See that the `vite.config.ts` is
   correctly executed with CWD set to package root. At the same time,
   `globalSetup` script is unexpectedly executed with CWD set to the monorepo
   root.
