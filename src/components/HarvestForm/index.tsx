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
      {errors.date?.message && <p><small>{errors.date?.message}</small></p>}
      <label htmlFor="notes">General notes</label>
      <textarea id="notes" placeholder="Weather etc." {...register("notes")} />

      {fields.map((fruits, index) => (
        <div key={fruits.id}>
          <label htmlFor={`type-${index}`}>Fruit</label>
          <select id={`type-${index}`} {...register(`fruits.${index}.type`)}>
            <option value="apples">Apples</option>
            <option value="grapes">Grapes</option>
          </select>
          <label htmlFor={`variety-${index}`}>Variety</label>
          <input
            id={`variety-${index}`}
            type="text"
            {...register(`fruits.${index}.variety`)}
          />
          {errors.fruits?.[index]?.variety?.message && (
            <p><small>{errors.fruits?.[index]?.variety?.message}</small></p>
          )}
          <label htmlFor={`location-${index}`}>Location</label>
          <input
            id={`location-${index}`}
            type="text"
            {...register(`fruits.${index}.location`)}
          />
          {errors.fruits?.[index]?.location?.message && (
            <p><small>{errors.fruits?.[index]?.location?.message}</small></p>
          )}
          <label htmlFor={`variety-notes-${index}`}>Notes on variety</label>
          <textarea
            id={`variety-notes-${index}`}
            placeholder="Condition of fruit etc."
            {...register(`fruits.${index}.varietyNotes`)}
          />
          <label htmlFor={`weight-${index}`}>Weight (Kg)</label>
          <input
            id={`weight-${index}`}
            type="number"
            step="0.01"
            placeholder="0.00"
            {...register(`fruits.${index}.weight`, { valueAsNumber: true })}
          />
          {errors.fruits?.[index]?.weight?.message && (
            <p><small>{errors.fruits?.[index]?.weight?.message}</small></p>
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
