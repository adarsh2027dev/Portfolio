import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import type { CommandAction } from "@/types/home";

type CommandPaletteProps = {
  activeIndex: number;
  filteredActions: CommandAction[];
  isOpen: boolean;
  onClose: () => void;
  onQueryChange: (value: string) => void;
  onSelect: (action: CommandAction) => void;
  query: string;
  setActiveIndex: (index: number) => void;
};

export function CommandPalette({
  activeIndex,
  filteredActions,
  isOpen,
  onClose,
  onQueryChange,
  onSelect,
  query,
  setActiveIndex,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 flex items-start justify-center bg-[var(--canvas-elevated)]/40 px-4 pt-[15vh] backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        className="w-full max-w-2xl rounded-2xl border border-[var(--border-soft)] bg-[var(--canvas)] shadow-[0_16px_64px_rgba(0,0,0,0.25)] overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[var(--border-soft)] px-4 py-3">
          <Search size={20} className="text-[var(--text-muted)]" />
          <label htmlFor="command-search" className="sr-only">
            Search command palette
          </label>
          <input
            id="command-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search commands, projects, or links..."
            className="flex-1 bg-transparent text-lg text-[var(--text-strong)] outline-none placeholder:text-[var(--text-soft)] placeholder:font-light"
          />
        </div>

        <ul role="listbox" aria-label="Command results" className="max-h-[50vh] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-[var(--text-soft)]">
              No results found for "{query}".
            </li>
          ) : (
            filteredActions.map((action, index) => (
              <li key={action.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => onSelect(action)}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition-colors duration-150 ${
                    activeIndex === index
                      ? "bg-[var(--surface-muted)] text-[var(--text-strong)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-strong)]"
                  }`}
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="font-medium">{action.label}</span>
                    {action.description && (
                      <span className="text-xs text-[var(--text-soft)]">
                        {action.description}
                      </span>
                    )}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-soft)] bg-[var(--surface-muted)] px-2 py-1 rounded-md border border-[var(--border-soft)]">
                    {action.kind}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        
        <div className="flex items-center gap-4 border-t border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 text-xs text-[var(--text-soft)]">
          <div className="flex items-center gap-1.5">
            <kbd className="kbd !bg-[var(--canvas)] !py-0.5 !px-1.5 !text-[10px]">↑</kbd>
            <kbd className="kbd !bg-[var(--canvas)] !py-0.5 !px-1.5 !text-[10px]">↓</kbd>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="kbd !bg-[var(--canvas)] !py-0.5 !px-1.5 !text-[10px]">Enter</kbd>
            <span>to select</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="kbd !bg-[var(--canvas)] !py-0.5 !px-1.5 !text-[10px]">Esc</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
