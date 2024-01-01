import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://pokedex-api-taupe-phi.vercel.app";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: () => "/pokemons",
        }),
    }),
});

export const { useGetPokemonsQuery } = pokemonApi