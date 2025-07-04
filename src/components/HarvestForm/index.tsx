import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HarvestSchema, type HarvestFormData } from "@/schemas/HarvestForm";

type HarvestFormProps = {
  onSubmit: (data: HarvestFormData) => void;
};

export function HarvestForm({ onSubmit }: HarvestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(HarvestSchema),
  });

  function submitForm(formData: HarvestFormData) {
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
      <label htmlFor="variety">Variety</label>
      <input id="variety" type="text" {...register("variety")} />
      <label htmlFor="location">Location</label>
      <input id="location" type="text" {...register("location")} />
      <label htmlFor="date">Harvest Date</label>
      <input
        id="date"
        type="date"
        {...register("date", { valueAsDate: true })}
      />
      {errors.date?.message && <p>{errors.date?.message}</p>}
      <label htmlFor="variety-notes">Notes on variety</label>
      <textarea
        id="variety-notes"
        placeholder="Weather, condition of fruit etc."
        {...register("varietyNotes")}
      />
      <label htmlFor="weight">Weight (Kg)</label>
      <input
        id="weight"
        type="number"
        step="0.01"
        placeholder="0.00"
        {...register("weight", { valueAsNumber: true })}
      />
      {errors.weight?.message && <p>{errors.weight?.message}</p>}
      <label htmlFor="notes">General notes</label>
      <textarea
        id="notes"
        placeholder="Weather, condition of fruit etc."
        {...register("notes")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
