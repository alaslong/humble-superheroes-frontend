import { useQuery } from "@tanstack/react-query";
import { fetchSuperheroes } from "./API/superhero";
import { SuperheroTable } from "./components/SuperHeroTable";
import { AddSuperheroForm } from "./components/AddSuperheroForm";
import "./App.css";

const App = () => {
  const { data: superheroes, isLoading: superheroesLoading } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchSuperheroes,
  });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 font-mono">
        🦸 Humble Superheroes Frontend
      </h1>

      <AddSuperheroForm />

      {superheroesLoading ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        superheroes && <SuperheroTable superheroes={superheroes} />
      )}
    </main>
  );
};

export default App;
