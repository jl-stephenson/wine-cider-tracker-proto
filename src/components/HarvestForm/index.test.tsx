import { expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HarvestForm } from "./index";

it("renders App component", () => {
  const mockSubmit = vi.fn();
  render(<HarvestForm onSubmit={mockSubmit} />);

  expect(
    screen.getByRole("heading", { level: 2, name: /Harvest Details/i }),
  ).toBeInTheDocument();

  // General fields
  expect(screen.getByLabelText(/Harvest Date/i)).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /General notes/i }),
  ).toBeInTheDocument();

  // Fruit fields
  expect(screen.getByRole("combobox", { name: /Fruit/i })).toBeInTheDocument();
  expect(screen.getAllByRole("option")).toHaveLength(2);
  expect(screen.getByRole("option", { name: /Apples/i })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Grapes/i })).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /^Variety$/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /Location/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /Notes on variety/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole("spinbutton", { name: /Weight/i }),
  ).toBeInTheDocument();

  // Buttons
  expect(
    screen.getByRole("button", { name: /Add Fruit/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});

it("calls onSubmit with data when submit is clicked", async () => {
  const mockSubmit = vi.fn();
  const user = userEvent.setup();
  render(<HarvestForm onSubmit={mockSubmit} />);

  const input = {
    date: "2024-01-01",
    notes: "wet",
    fruits: [
      {
        type: "apples",
        variety: "bramley",
        location: "there",
        varietyNotes: "good",
        weight: "1",
      },
    ],
  };

  const outputFruits = {
    ...input.fruits[0],
    weight: Number(input.fruits[0].weight),
  };

  // General fields
  await user.type(screen.getByLabelText(/Harvest Date/i), input.date);
  await user.type(
    screen.getByRole("textbox", { name: /General notes/i }),
    input.notes,
  );

  // Fruit fields
  await user.selectOptions(
    screen.getByRole("combobox", { name: /Fruit/i }),
    input.fruits[0].type,
  );
  await user.type(
    screen.getByRole("textbox", { name: /^Variety$/i }),
    input.fruits[0].variety,
  );
  await user.type(
    screen.getByRole("textbox", { name: /Location/i }),
    input.fruits[0].location,
  );
  await user.type(
    screen.getByRole("textbox", { name: /Notes on variety/i }),
    input.fruits[0].varietyNotes,
  );
  await user.type(
    screen.getByRole("spinbutton", { name: /Weight/i }),
    input.fruits[0].weight,
  );

  await user.click(screen.getByRole("button", { name: /Submit/i }));

  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({
    date: new Date(input.date),
    notes: input.notes,
    fruits: [outputFruits],
  });
});

it("doesn't call onSubmit and shows errors on invalid input", async () => {
  const user = userEvent.setup();
  const mockSubmit = vi.fn();
  render(<HarvestForm onSubmit={mockSubmit} />);

  const invalidInput = {
    date: "2026-04-01",
    weight: "heavy",
  };

  await user.type(screen.getByLabelText(/Harvest Date/i), invalidInput.date);
  await user.type(
    screen.getByRole("spinbutton", { name: /Weight/i }),
    invalidInput.weight,
  );
  await user.click(screen.getByRole("button", { name: /Submit/i }));

  expect(screen.getByText(/Variety required/i)).toBeInTheDocument();
  expect(screen.getByText(/Location required/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Harvest date cannot be in future/i),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Please enter a number up to 2 decimal places/i),
  ).toBeInTheDocument();

  expect(mockSubmit).not.toHaveBeenCalled();
});

it("adds and deletes fruit fields", async () => {
  const user = userEvent.setup();
  const mockSubmit = vi.fn();
  render(<HarvestForm onSubmit={mockSubmit} />);

  expect(screen.getAllByRole("combobox", { name: /Fruit/i })).toHaveLength(1);

  await user.click(screen.getByRole("button", { name: /Add Fruit/i }));

  expect(screen.getAllByRole("combobox", { name: /Fruit/i })).toHaveLength(2);

  await user.click(screen.getByRole("button", { name: /Delete/i }));

  expect(screen.getAllByRole("combobox", { name: /Fruit/i })).toHaveLength(1);
});
