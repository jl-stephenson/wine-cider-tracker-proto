export default function App() {
  return (
    <main>
      <form>
        <h2>Harvest Details</h2>
        <label htmlFor="fruit">Fruit</label>
        <select id="fruit">
          <option value="apples">Apples</option>
          <option value="grapes">Grapes</option>
        </select>
        <label htmlFor="date">Harvest Date</label>
        <input id="date" type="date" />
        <label htmlFor="weight">Weight (Kg)</label>
        <input id="weight" type="number" step="0.01" placeholder="0.00" />
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" placeholder="Weather, condition of fruit etc." />
      </form>
    </main>
  );
}
