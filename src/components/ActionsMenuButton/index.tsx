import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

export function ActionsMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="menu-button__trigger button">
          Actions
          <ChevronDownIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="menu-button__list">
          <DropdownMenu.Item>
            <button className="menu-button__option button">
              Process
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <button className="menu-button__option button">
              Reminder
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
