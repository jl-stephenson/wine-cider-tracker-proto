type HarvestFormProps = {
  handleSubmit: (event: React.FormEvent) => void;
};

export function HarvestForm({ handleSubmit }: HarvestFormProps) {
  return (
    <form onSubmit={handleSubmit} aria-labelledby="harvest-form-heading">
      <h2 id="harvest-form-heading">Harvest Details</h2>
      <label htmlFor="fruit">Fruit</label>
      <select id="fruit" name="fruit">
        <option value="apples">Apples</option>
        <option value="grapes">Grapes</option>
      </select>
      <label htmlFor="date">Harvest Date</label>
      <input id="date" name="date" type="date" />
      <label htmlFor="weight">Weight (Kg)</label>
      <input
        id="weight"
        name="weight"
        type="number"
        step="0.01"
        placeholder="0.00"
      />
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        name="notes"
        placeholder="Weather, condition of fruit etc."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
