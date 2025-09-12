import type { CatalogProps } from "../types/Globals/Pages";

export default function Catalog({ user }: CatalogProps) {
  return (
    <>
      <div>{user.name}</div>
    </>
  );
}
