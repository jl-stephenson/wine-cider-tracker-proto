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
    <section className="panel">
      <form
        onSubmit={handleSubmit(submitForm)}
        aria-labelledby="harvest-form-heading"
        noValidate
      >
        <div className="panel__heading">
          <h2 id="harvest-form-heading">Add New Harvest</h2>
        </div>
        <div className="panel__content flow">
          <h4>General</h4>
          <div>
            <label htmlFor="date">Harvest Date</label>
            <input
              id="date"
              type="date"
              {...register("date", { valueAsDate: true })}
              aria-describedby="date-error"
              aria-invalid={!!errors.date}
            />
            {errors.date?.message && (
              <p role="alert" id="date-error">
                <small>{errors.date?.message}</small>
              </p>
            )}
          </div>
          <div>
            <label htmlFor="notes">General notes</label>
            <textarea
              id="notes"
              placeholder="Weather etc."
              {...register("notes")}
            />
          </div>
        </div>

        {fields.map((fruits, index) => (
          <div key={fruits.id} className="panel__segment flow">
            <h4>Fruit {index + 1}</h4>
            <div>
              <label htmlFor={`type-${index}`}>Fruit</label>
              <select
                id={`type-${index}`}
                {...register(`fruits.${index}.type`)}
              >
                <option value="apples">Apples</option>
                <option value="grapes">Grapes</option>
              </select>
            </div>
            <div>
              <label htmlFor={`variety-${index}`}>Variety</label>
              <input
                id={`variety-${index}`}
                type="text"
                {...register(`fruits.${index}.variety`)}
                aria-describedby={`variety-error-${index}`}
                aria-invalid={!!errors.fruits?.[index]?.variety}
              />
              {errors.fruits?.[index]?.variety?.message && (
                <p role="alert" id={`variety-error-${index}`}>
                  <small>{errors.fruits?.[index]?.variety?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label htmlFor={`location-${index}`}>Location</label>
              <input
                id={`location-${index}`}
                type="text"
                {...register(`fruits.${index}.location`)}
                aria-describedby={`location-error-${index}`}
                aria-invalid={!!errors.fruits?.[index]?.location}
              />
              {errors.fruits?.[index]?.location?.message && (
                <p role="alert" id={`location-error-${index}`}>
                  <small>{errors.fruits?.[index]?.location?.message}</small>
                </p>
              )}
            </div>
            <div>
              <label htmlFor={`variety-notes-${index}`}>Notes on variety</label>
              <textarea
                id={`variety-notes-${index}`}
                placeholder="Condition of fruit etc."
                {...register(`fruits.${index}.varietyNotes`)}
              />
            </div>
            <div>
              <label htmlFor={`weight-${index}`}>Weight (Kg)</label>
              <input
                id={`weight-${index}`}
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register(`fruits.${index}.weight`, {
                  valueAsNumber: true,
                })}
                aria-describedby={`weight-error-${index}`}
                aria-invalid={!!errors.fruits?.[index]?.weight}
              />
              {errors.fruits?.[index]?.weight?.message && (
                <p role="alert" id={`weight-error-${index}`}>
                  <small>{errors.fruits?.[index]?.weight?.message}</small>
                </p>
              )}
            </div>
            {index !== 0 && (
              <button
                type="button"
                className="button"
                data-button-variant="secondary"
                onClick={() => remove(index)}
              >
                Delete {`Fruit ${index + 1}`}
              </button>
            )}
          </div>
        ))}

        <div className="panel__footer">
          <button
            type="button"
            className="button"
            data-button-variant="tertiary"
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
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
