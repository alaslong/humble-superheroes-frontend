import { SuperheroTableRowProps } from "../types/Props";

export const SuperheroTableRow = ({ superhero }: SuperheroTableRowProps) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150">
      <td className="py-4 px-6 text-sm font-medium text-gray-900">
        {superhero.name}
      </td>
      <td className="py-4 px-6 text-sm text-gray-600">
        {superhero.superpower}
      </td>
      <td className="py-4 px-6 text-sm text-gray-600">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
          {superhero.humilityScore}
        </span>
      </td>
    </tr>
  );
};
