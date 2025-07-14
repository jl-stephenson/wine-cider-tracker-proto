import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

export function ActionsMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (firstItemRef.current && isMenuOpen) firstItemRef.current.focus();
  }, [isMenuOpen]);

  return (
    <div className="menu-button">
      <button
        type="button"
        id="menu-button1"
        className="menu-button__trigger button"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        aria-controls="menu1"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        Actions
        <ChevronDownIcon />
      </button>
      <ul
        id="menu1"
        className="menu-button__list"
        data-is-open={isMenuOpen}
        role="menu"
        tabIndex={-1}
        aria-labelledby="menu-button1"
        aria-activedescendant="mi1"
      >
        <li id="mi1" role="menuitem">
          <button className="menu-button__option button" ref={firstItemRef}>Process</button>
        </li>
        <li id="mi2" role="menuitem">
          <button className="menu-button__option button">
            Set process date
          </button>
        </li>
      </ul>
    </div>
  );
}
