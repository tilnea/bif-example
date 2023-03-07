import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useGetPopularActor } from "./Domain/UseCase/PopularActor/useGetPopularActor";
import { useGetPopularActors } from "./Domain/UseCase/PopularActor/useGetPopularActors";
import { IPopularActorListing } from "./Domain/Model/IPopularActorListing";
import "./App.css";

const queryClient = new QueryClient();

const Wrapper = () => {
  const { data } = useGetPopularActors();

  return data ? <PopularActors actors={data} /> : <div>Loading...</div>;
};

const PopularActors = ({ actors }: { actors: IPopularActorListing[] }) => {
  const [currentId, setCurrentId] = useState<number | null>(null);

  const handleClickActor = (id: number | undefined) => {
    if (!id) return;
    setCurrentId(id);
  };

  return (
    <div>
      <div>
        <h1>Popular Actors</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            listStyleType: "none",
            justifyContent: "center",
          }}
        >
          {actors.map((actor) => {
            return (
              <li key={`popular-actor-${actor.id}`}>
                <button onClick={() => handleClickActor(actor.id)}>
                  {actor.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>{currentId !== null && <Actor id={currentId} />}</div>
    </div>
  );
};

const Actor = ({ id }: { id: number }) => {
  const { data: actor, isLoading } = useGetPopularActor(id);

  console.log(isLoading);

  if (actor === null) return <div />;

  return (
    <div>
      <h2>{actor.name}</h2>
      <p>{actor.biography}</p>
      {actor.images?.map((image) => (
        <img key={image} src={image} alt={actor.name} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Wrapper />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
