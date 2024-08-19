import { TreeNode } from "../mocks/data.ts";

interface UseQueryTreeDataReturn {
  data: TreeNode | null;
  loading: boolean;
  error: Error | null;
}

const useQueryTreeData = (): UseQueryTreeDataReturn => {
  /**
   * TODO fetch "http://localhost:5173/tree"
   *  handle loading and error state to match UseQueryTreeDataReturn return type
   *
   *  Note: no worries about setting up a server, the endpoint should already be handled by MSW.
   */
};

export default useQueryTreeData;
