import { ChevronUpIcon } from "../icons/ChevronUpIcon";

export function SplitButton() {
  return (
    <div className="split-button">
      <button type="button" className="primary-action">
        Process
      </button>
      <div className="action-menu-wrapper">
      <details className="action-menu">
        <summary>
            <ChevronUpIcon />
          <span className="visually-hidden">Other actions</span>
        </summary>
        <div className="menu-content">
          <button type="button">Process now</button>
          <button type="button">Set reminder</button>
        </div>
      </details>
      </div>
    </div>
  );
}
