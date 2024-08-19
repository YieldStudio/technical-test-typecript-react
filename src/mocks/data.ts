export interface TreeNode {
  name?: string;
  children?: TreeNode[];
  hidden?: boolean;
}

export const treeData: TreeNode = {
  name: "Root",
  children: [
    {
      name: "Folder 1",
      children: [
        {
          name: "Folder 1-1",
          children: [
            { name: "File 1-1-1", hidden: true },
            { name: "File 1-1-2" },
            {
              name: "Folder 1-1-3",
              children: [
                { name: "File 1-1-3-1", hidden: true },
                { name: "File 1-1-3-2", hidden: true },
                { name: "File 1-1-3-3" },
              ],
            },
          ],
        },
        { name: "File 1-2" },
        {
          name: "Folder 1-3",
          children: [
            {
              name: "Folder 1-3-1",
              children: [{ name: "File 1-3-1-1" }, { name: "File 1-3-1-2" }],
            },
            { name: "File 1-3-2" },
          ],
        },
      ],
    },
    {
      name: "Folder 2",
      children: [
        {
          name: "Folder 2-1",
          children: [{ name: "File 2-1-1" }, { name: "File 2-1-2" }],
        },
        {
          name: "Folder 2-2",
          children: [
            { name: "File 2-2-1" },
            { name: "File 2-2-2", hidden: true },
            {
              name: "Folder 2-2-3",
              children: [
                { name: "File 2-2-3-1" },
                { name: "File 2-2-3-2", hidden: true },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Folder 3",
      children: [
        {
          name: "Folder 3-1",
          children: [
            { name: "File 3-1-1" },
            { name: "File 3-1-2", hidden: true },
            {
              name: "Folder 3-1-3",
              children: [
                { name: "File 3-1-3-1", hidden: true },
                { name: "File 3-1-3-2" },
              ],
            },
          ],
        },
        {
          name: "Folder 3-2",
          children: [
            { name: "File 3-2-1", hidden: true },
            { name: "File 3-2-2" },
          ],
        },
      ],
    },
    { name: "File 4", hidden: true },
    { name: "File 5" },
  ],
};
