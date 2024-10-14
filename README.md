# globalSetup is executed with wrong CWD

When using `vitest.workspace.ts` file in a monorepo, the `globalSetup` script is
executed with the CWD set to the monorepo root rather than the package root.

The `vite.config.ts` is correctly executed with the package root as CWD.

Logs from the "Output" of the "Vitest" extension:

```log
[INFO 7:25:38 PM] [v1.6.0] Vitest extension is activated because Vitest is installed or there is a Vite/Vitest config file in the workspace.
[INFO 7:25:38 PM] [API] Running Vitest v2.1.2 (vitest-wrong-cwd/vitest.workspace.ts) with Node.js@v20.16.0: /Users/mak13180/.nvm/versions/node/v20.16.0/bin/node
[INFO 7:25:38 PM] [Worker] 🟥 vite.config.ts cwd: /Users/mak13180/site/esri/vitest-wrong-cwd/packages/calcite-components
[INFO 7:25:38 PM] [API] Vitest v2.1.2 (vitest-wrong-cwd/vitest.workspace.ts) child process 45982 created
[INFO 7:25:38 PM] [VSCODE] Watching vitest-wrong-cwd with pattern **/*
[INFO 7:25:45 PM] [API] Collecting tests: packages/calcite-components/src/utils/component.spec.ts
[INFO 7:25:45 PM] [Worker] 🟥 globalSetup.ts cwd: /Users/mak13180/site/esri/vitest-wrong-cwd
```

## Reproduction

1. Clone this repository

   ```sh
   git clone https://github.com/maxpatiiuk/vitest-wrong-cwd
   cd vite-wrong-cwd
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. In VS Code with the "Vitest" extension installed, open the
   `packages/calcite-components/src/utils/component.spec.ts` file from this
   repository.

4. Open the "Output -> Vitest" panel in VS Code to see the log output for the
   "Vitest" extension. See that the `globalSetup` script is executed with the
   CWD set to the monorepo root rather than package root.
