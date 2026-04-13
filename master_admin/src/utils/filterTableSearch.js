/**
 * Returns rows where any stringified cell value includes the query (case-insensitive).
 */
export function filterRowsBySearch(rows, query) {
  const q = String(query).trim().toLowerCase();
  if (!q) return rows;
  return rows.filter((row) =>
    Object.values(row).some((v) => String(v).toLowerCase().includes(q))
  );
}
