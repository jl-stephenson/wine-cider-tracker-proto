import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { harvestSchema, type HarvestFormData } from "@/schemas/HarvestForm";

type HarvestFormProps = {
  onSubmit: (data: HarvestFormData) => void;
};

export function HarvestForm({ onSubmit }: HarvestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(harvestSchema),
    defaultValues: {
      fruits: [
        {
          type: "apples",
          variety: "",
          location: "",
          varietyNotes: "",
          weight: 0,
        },
      ],
    },
  });

  const { append, fields, remove } = useFieldArray({
    name: "fruits",
    control,
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
      <label htmlFor="date">Harvest Date</label>
      <input
        id="date"
        type="date"
        {...register("date", { valueAsDate: true })}
      />
      {errors.date?.message && <p>{errors.date?.message}</p>}
      <label htmlFor="notes">General notes</label>
      <textarea id="notes" placeholder="Weather etc." {...register("notes")} />

      {fields.map((fruits, index) => (
        <div key={fruits.id}>
          <label htmlFor="type">Fruit</label>
          <select id="type" {...register(`fruits.${index}.type`)}>
            <option value="apples">Apples</option>
            <option value="grapes">Grapes</option>
          </select>
          <label htmlFor="variety">Variety</label>
          <input
            id="variety"
            type="text"
            {...register(`fruits.${index}.variety`)}
          />
          {errors.fruits?.[index]?.variety?.message && (
            <p>{errors.fruits?.[index]?.variety?.message}</p>
          )}
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            {...register(`fruits.${index}.location`)}
          />
          {errors.fruits?.[index]?.location?.message && (
            <p>{errors.fruits?.[index]?.location?.message}</p>
          )}
          <label htmlFor="variety-notes">Notes on variety</label>
          <textarea
            id="variety-notes"
            placeholder="Condition of fruit etc."
            {...register(`fruits.${index}.varietyNotes`)}
          />
          <label htmlFor="weight">Weight (Kg)</label>
          <input
            id="weight"
            type="number"
            step="0.01"
            placeholder="0.00"
            {...register(`fruits.${index}.weight`, { valueAsNumber: true })}
          />
          {errors.fruits?.[index]?.weight?.message && (
            <p>{errors.fruits?.[index]?.weight?.message}</p>
          )}
          {index !== 0 && (
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            type: "apples",
            variety: "",
            location: "",
            varietyNotes: "",
            weight: 0,
          })
        }
      >
        Add Fruit
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}
