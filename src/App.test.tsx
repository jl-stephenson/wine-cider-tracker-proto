import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Harvest Details/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /Fruit/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Apples/i })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /Grapes/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Harvest Date/i)).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: /Weight/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /Notes/i })).toBeInTheDocument();
  });
});
