import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HarvestSchema, type Harvest } from "@/schemas/HarvestForm";


type HarvestFormProps = {
  onSubmit: (data: Harvest) => void;
};

export function HarvestForm({ onSubmit }: HarvestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(HarvestSchema),
  });

  function submitForm(formData: Harvest) {
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
        {...register("date", { valueAsDate: true })}
      />
      {errors.date?.message && <p>{errors.date?.message}</p>}
      <label htmlFor="weight">Weight (Kg)</label>
      <input
        id="weight"
        type="number"
        step="0.01"
        placeholder="0.00"
        {...register("weight", {valueAsNumber: true})}
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
