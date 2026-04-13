import { createContext, useContext, useMemo, useState } from "react";

const SearchContext = createContext(null);

/* Provider + hook: fast refresh expects single export type in some setups */
/* eslint-disable react-refresh/only-export-components */
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const value = useMemo(
    () => ({ searchQuery, setSearchQuery }),
    [searchQuery]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useTableSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useTableSearch must be used within SearchProvider");
  }
  return ctx;
}
