import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { HarvestFormData } from "@/schemas/HarvestForm";
import { HarvestSummary } from ".";

const mockHarvest: HarvestFormData = {
  fruits: [
    { type: "apples", variety: "Bramley", location: "Orchard", weight: 2 },
  ],
  date: new Date(),
};

it("renders summary table", () => {
  render(<HarvestSummary harvest={mockHarvest} />);

  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByRole("caption")).toHaveTextContent(
    mockHarvest.date.toLocaleDateString(),
  );

  const cells = screen.getAllByRole("cell");
  expect(cells).toHaveLength(2);
  expect(cells[0]).toHaveTextContent(mockHarvest.fruits[0].variety);
  expect(cells[1]).toHaveTextContent(String(mockHarvest.fruits[0].weight));
});
