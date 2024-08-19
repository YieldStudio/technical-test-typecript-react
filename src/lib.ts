import { TreeNode } from "./mocks/data.ts";

export const filterHiddenFiles = (node: TreeNode): TreeNode | null => {
  if (node.hidden) {
    return null;
  }

  if (node.children) {
    const filteredChildren = node.children
      .map(filterHiddenFiles)
      .filter((child) => child !== null);

    return { children: filteredChildren };
  }

  return { ...node };
};
