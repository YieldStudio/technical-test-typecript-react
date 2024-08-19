import { delay, http, HttpResponse } from "msw";
import { treeData } from "./data.ts";

export const handlers = [
  http.get("http://localhost:5173/tree", async () => {
    await delay();

    return HttpResponse.json({
      ...treeData,
    });
  }),
];
