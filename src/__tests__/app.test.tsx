import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App.tsx";

describe("TreeView Component", () => {
  it("renders the tree data correctly", async () => {
    const { getByText } = render(<App />);

    expect(getByText("Root")).toBeInTheDocument();
    expect(getByText("Folder 1")).toBeInTheDocument();
    expect(getByText("File 1-1-2")).toBeInTheDocument();
    expect(getByText("File 1-3-1-1")).toBeInTheDocument();
    expect(getByText("File 5")).toBeInTheDocument();
  });

  it("renders the tree with filtered data", async () => {
    const { getByText, queryByText } = render(<App />);

    expect(getByText("Root")).toBeInTheDocument();
    expect(getByText("Folder 1")).toBeInTheDocument();
    expect(getByText("File 1-1-2")).toBeInTheDocument();
    expect(queryByText("File 1-1-1")).not.toBeInTheDocument();
    expect(queryByText("File 1-1-2")).toBeInTheDocument();
    expect(getByText("File 1-3-1-1")).toBeInTheDocument();
    expect(getByText("File 5")).toBeInTheDocument();
    expect(queryByText("File 4")).not.toBeInTheDocument();
  });
});
