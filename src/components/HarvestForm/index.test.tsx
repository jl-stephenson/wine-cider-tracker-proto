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
  expect(screen.getByRole("combobox", { name: /Fruit/i })).toBeInTheDocument();
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
  expect(screen.getByLabelText(/Harvest Date/i)).toBeInTheDocument();
  expect(
    screen.getByRole("spinbutton", { name: /Weight/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /General notes/i }),
  ).toBeInTheDocument();
});

it("calls onSubmit with data when submit is clicked", async () => {
  const mockSubmit = vi.fn();
  const user = userEvent.setup();
  render(<HarvestForm onSubmit={mockSubmit} />);

  const input = {
    fruit: "grapes",
    variety: "bramley",
    location: "there",
    varietyNotes: "good",
    date: "2024-01-01",
    weight: "1",
    notes: "wet",
  };

  await user.selectOptions(
    screen.getByRole("combobox", { name: /Fruit/i }),
    "grapes",
  );
  await user.type(
    screen.getByRole("textbox", { name: /^Variety$/i }),
    input.variety,
  );
  await user.type(
    screen.getByRole("textbox", { name: /Location/i }),
    input.location,
  );

  await user.type(
    screen.getByRole("textbox", { name: /Notes on variety/i }),
    input.varietyNotes,
  );

  await user.type(screen.getByLabelText(/Harvest Date/i), input.date);
  await user.type(
    screen.getByRole("spinbutton", { name: /Weight/i }),
    input.weight,
  );
  await user.type(
    screen.getByRole("textbox", { name: /General notes/i }),
    input.notes,
  );

  await user.click(screen.getByRole("button", { name: /Submit/i }));

  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({
    ...input,
    weight: Number(input.weight),
    date: new Date(input.date),
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

  screen.debug();

  expect(
    screen.getByText(/Harvest date cannot be in future/i),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Please enter a number up to 2 decimal places/i),
  ).toBeInTheDocument();

  expect(mockSubmit).not.toHaveBeenCalled();
});
