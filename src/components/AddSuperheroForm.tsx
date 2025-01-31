import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addSuperhero } from "../API/superhero";
import { useState } from "react";

export const AddSuperheroForm = () => {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const createSuperheroMutation = useMutation({
    mutationFn: addSuperhero,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['superheroes'] });
      // Clear form fields
      setName("");
      setSuperpower("");
      setHumilityScore("");
    },
    onError: (error: unknown) => {
      alert(`Error: ${error}`);
    },
  });

  // Handle form submission
  const handleAddSuperhero = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    if (!name || !superpower || !humilityScore) {
      alert("Please fill in all fields.");
      return;
    }

    // Create new superhero object
    const newHero = {
      name,
      superpower,
      humilityScore: Number(humilityScore), // Ensure it's a number
    };

    // Trigger mutation
    createSuperheroMutation.mutate(newHero);
  };

  return (
    <form
      onSubmit={handleAddSuperhero}
      className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Add New Superhero
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Name Input */}
        <div className="flex flex-col mb-4 md:mb-0">
          <label htmlFor="name" className="mb-2 text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter superhero name"
            required
          />
        </div>

        {/* Superpower Input */}
        <div className="flex flex-col mb-4 md:mb-0">
          <label htmlFor="superpower" className="mb-2 text-gray-600">
            Superpower
          </label>
          <input
            type="text"
            id="superpower"
            value={superpower}
            onChange={(e) => setSuperpower(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter superpower"
            required
          />
        </div>

        {/* Humility Score Input */}
        <div className="flex flex-col mb-4 md:mb-0">
          <label htmlFor="humilityScore" className="mb-2 text-gray-600">
            Humility Score
          </label>
          <input
            type="number"
            id="humilityScore"
            value={humilityScore}
            onChange={(e) => setHumilityScore(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter humility score"
            required
            min="1"
            max="10"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        disabled={createSuperheroMutation.isPending}
      >
        {createSuperheroMutation.isPending ? "Adding..." : "Add Superhero"}
      </button>
    </form>
  );
};
