import { expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HarvestForm } from "./index";

it("renders App component", () => {
  const handleSubmit = vi.fn();

  render(<HarvestForm handleSubmit={handleSubmit} />);

  expect(
    screen.getByRole("heading", { level: 2, name: /Harvest Details/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("combobox", { name: /Fruit/i })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Apples/i })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Grapes/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/Harvest Date/i)).toBeInTheDocument();
  expect(
    screen.getByRole("spinbutton", { name: /Weight/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: /Notes/i })).toBeInTheDocument();
});

it("calls onSubmit when submit is clicked", async () => {
  const handleSubmit = vi.fn((event) => {
    event.preventDefault();
    console.log("handleSubmit called!", event);
  });
  const user = userEvent.setup();

  render(<HarvestForm handleSubmit={handleSubmit} />);

  const input = {
    fruit: "grapes",
    date: "2024-01-01",
    weight: "1",
    notes: "wet",
  };

  await user.selectOptions(
    screen.getByRole("combobox", { name: /Fruit/i }),
    "grapes",
  );

  const dateInput = screen.getByLabelText(/Harvest Date/i);
  await user.clear(dateInput);
  await user.type(dateInput, input.date);
  await user.type(
    screen.getByRole("spinbutton", { name: /Weight/i }),
    input.weight,
  );
  await user.type(screen.getByRole("textbox", { name: /Notes/i }), input.notes);

  fireEvent.submit(screen.getByRole("form"));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
