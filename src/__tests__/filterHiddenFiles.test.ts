import { describe, it, expect } from "vitest";
import { filterHiddenFiles } from "../filterHiddenFiles.ts";
import { TreeNode } from "../mocks/data.ts";

describe("filterHiddenFiles", () => {
  it("should filter out nodes with hidden: true", () => {
    const treeData: TreeNode = {
      name: "Root",
      children: [
        {
          name: "Folder 1",
          children: [
            { name: "Folder 1-1" },
            { name: "File 1-2", hidden: true },
          ],
        },
      ],
    };

    const result = filterHiddenFiles(treeData);
    expect(result).toEqual({
      children: [
        {
          children: [
            {
              name: "Folder 1-1",
            },
          ],
          name: "Folder 1",
        },
      ],
      name: "Root",
    });
  });
});
