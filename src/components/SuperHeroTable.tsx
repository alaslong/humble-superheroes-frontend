import { SuperheroTableRow } from "./SuperheroTableRow";
import { SuperheroTableProps } from "../types/Props";

export const SuperheroTable = ({ superheroes }: SuperheroTableProps) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Superpower</th>
          <th className="py-3 px-4 text-left">Humility Score</th>
        </tr>
      </thead>
      <tbody>
        {superheroes.map((superhero) => (
          <SuperheroTableRow superhero={superhero} key={superhero.name} />
        ))}
      </tbody>
    </table>
  );
};
