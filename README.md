# Technical test Yield Studio

Hello and thanks for taking the time to take this test !

Please do not use ChatGpt, Github Copilot or any equivalent.

The app shows a tree view of files and folder ; however it shows nothing for now.  
Tree node are of `TreeNode` type
```ts
interface TreeNode {
  name: string;
  children?: TreeNode[];
  hidden?: boolean;
}
```

# Getting Stared
1. Run `npm i` to install all dependencies.
2. Run `npm run dev` to start dev server and mocked services.

# Run unit test
Run `npm run test:filterHiddenFiles` run only `filterHiddenFiles.test.ts`.
Run `npm run test:all` run all units tests in watch mode.

# Step 1

In `filterHiddenFiles.ts` and `filterHiddenFiles.test.ts`, the test for the function `filterHiddenFiles` fails  
You are asked to fix the function so the test succeeds.

# Step 2
For this step, please considerate `<TreeView>` as a component coming from a 3rd party library. It should not be edited.

1. Build `useQueryTreeData` hook to fetch http://localhost:5173/tree. Its return type should match the provided `UseQueryTreeDataReturn`.  
No worries, the endpoint is already handled via a mocked API service.   
2. Use the query hook in `App.tsx` to inject the data into `<TreeView>` so the 1st test in `app.test.ts` succeeds ("renders the tree data correctly").
3. Use `filterHiddenFiles` to only display files that are not "hidden". Hence, the 2nd test  in `app.test.ts` should succeed ("renders the tree with filtered data")'


