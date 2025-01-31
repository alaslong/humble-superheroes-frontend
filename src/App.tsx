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
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Humble Superheroes Frontend
      </h1>
      <AddSuperheroForm />
      {superheroesLoading ? (
        <p className="text-blue-500 text-lg">Loading...</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-4xl">
          {superheroes && <SuperheroTable superheroes={superheroes} />}
        </div>
      )}
    </main>
  );
};

export default App;
