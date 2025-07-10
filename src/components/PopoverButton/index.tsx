export function PopoverButton() {
  return (
    <>
      <button id="anchor_1" popoverTarget="action-list"  className="button" type="button">
        Actions
      </button>
      <div id="action-list" popover="auto" className="popover-list">
        <button type="button" className="button">
          Button 1
        </button>
        <button type="button" className="button">
          Button 2
        </button>
        <button type="button" className="button">
          Button 3
        </button>
      </div>
    </>
  );
}
