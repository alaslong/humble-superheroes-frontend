import { SuperheroTableRow } from "./SuperheroTableRow";
import { SuperheroTableProps } from "../types/Props";

export const SuperheroTable = ({ superheroes }: SuperheroTableProps) => {
  return (
    <div className="w-full max-w-6xl px-4">
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Superpower
            </th>
            <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Humility Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {superheroes.length === 0 && (
            <tr>
              <td className="py-6 px-6 text-center text-gray-500" colSpan={3}>
                No superheroes added yet
              </td>
            </tr>
          )}
          {superheroes.map((superhero) => (
            <SuperheroTableRow superhero={superhero} key={superhero.name} />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};