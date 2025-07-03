import { useForm } from "react-hook-form";
import type { HarvestSchema } from "@/schemas/HarvestForm";


type HarvestFormProps = {
  onSubmit: (data: HarvestSchema) => void;
};

export function HarvestForm({ onSubmit }: HarvestFormProps) {
  const { register, handleSubmit } = useForm<HarvestSchema>();

  function submitForm(formData: HarvestSchema) {
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      aria-labelledby="harvest-form-heading"
      noValidate
    >
      <h2 id="harvest-form-heading">Harvest Details</h2>
      <label htmlFor="fruit">Fruit</label>
      <select id="fruit" {...register("fruit")}>
        <option value="apples">Apples</option>
        <option value="grapes">Grapes</option>
      </select>
      <label htmlFor="date">Harvest Date</label>
      <input
        id="date"
        type="date"
        {...(register("date"))}
      />
      <label htmlFor="weight">Weight (Kg)</label>
      <input
        id="weight"
        type="number"
        step="0.01"
        placeholder="0.00"
        {...register("weight")}
      />
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        placeholder="Weather, condition of fruit etc."
        {...register("notes")}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
