import { SuperheroTableRowProps } from "../types/Props";

export const SuperheroTableRow = ({ superhero }: SuperheroTableRowProps) => {
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="py-3 px-4">{superhero.name}</td>
      <td className="py-3 px-4">{superhero.superpower}</td>
      <td className="py-3 px-4">{superhero.humilityScore}</td>
    </tr>
  );
};
