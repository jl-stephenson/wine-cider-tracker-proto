import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Harvest Details/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /Harvest Date/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /Weight/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /Notes/i })).toBeInTheDocument();
  });
});
