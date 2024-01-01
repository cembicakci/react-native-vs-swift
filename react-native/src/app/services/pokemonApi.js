import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://pokedex-api-taupe-phi.vercel.app";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ["Pokemon", "User"],
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: () => "/pokemons",
            providesTags: ["Pokemon"]
        }),
        addPokemon: builder.mutation({
            query: (body) => ({
                url: "/pokemons",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Pokemon"]
        }),
    }),
});

export const { useGetPokemonsQuery, useAddPokemonMutation } = pokemonApi