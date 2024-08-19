import "./TreeView.css";
import type { TreeNode } from "../../mocks/data.ts";

const TreeNode = ({ node }: { node: TreeNode }) => {
  return (
    <li>
      <div className={`tree-node ${node.hidden ? "hidden-node" : ""}`}>
        {node.name}
      </div>
      {node.children && (
        <ul>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeView = ({ treeData }: { treeData: TreeNode | null }) => {
  if (!treeData) return "The tree is empty";

  return (
    <div className="tree-view">
      <ul>
        <TreeNode node={treeData} />
      </ul>
    </div>
  );
};
export default TreeView;
