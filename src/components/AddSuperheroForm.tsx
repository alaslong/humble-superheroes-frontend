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
      // Refreshes cached superheroes
      queryClient.invalidateQueries({ queryKey: ["superheroes"] });
      // Clear input fields
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

    // Simple validation to ensure name, superpower, and humility score have been entered
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
    <div className="w-full max-w-6xl px-4 mb-4 mt-2">
      <form
        onSubmit={handleAddSuperhero}
        className="w-full bg-white shadow-lg rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-4 p-4">
          {/* Name Input */}
          <div className="flex-1">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Superman"
              aria-label="Superhero name"
            />
          </div>

          {/* Superpower Input */}
          <div className="flex-1">
            <input
              type="text"
              id="superpower"
              value={superpower}
              onChange={(e) => setSuperpower(e.target.value)}
              className="w-full px-3 py-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Flying"
              aria-label="Superpower"
            />
          </div>

          {/* Humility Score Input */}
          <div className="flex-1">
            <input
              type="number"
              id="humilityScore"
              value={humilityScore}
              onChange={(e) => setHumilityScore(e.target.value)}
              className="w-full px-3 py-2 border-b-2 border-transparent focus:border-blue-500 focus:outline-none appearance-none"
              placeholder="10"
              min="1"
              max="10"
              aria-label="Humility score"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
            disabled={createSuperheroMutation.isPending}
          >
            {createSuperheroMutation.isPending ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </>
            ) : (
              'Add'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};