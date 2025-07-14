import { ChevronDownIcon } from "../icons/ChevronDownIcon";

export function ActionsMenuButton() {
  return (
    <div className="menu-button">
      <button
        type="button"
        id="menu-button1"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu1"
      >
        Actions
        <ChevronDownIcon />
      </button>
      <ul
        id="menu1"
        role="menu"
        tabIndex={-1}
        aria-labelledby="menu-button1"
        aria-activedescendant="mi1"
      >
        <li id="mi1" role="menuitem">
          Process
        </li>
        <li id="mi2" role="menuitem">
          Set process date
        </li>
      </ul>
    </div>
  );
}
