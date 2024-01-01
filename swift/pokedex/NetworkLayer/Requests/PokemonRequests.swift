//
//  PokemonRequests.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import Foundation

struct Pokemon: Codable, Identifiable {
    let id: Int?
    let name: String
    let pokemonId: Int?
}

typealias PokemonsResponse = [Pokemon]

struct PokemonRequests: Request {
    typealias Response = PokemonsResponse
    
    var baseUrl: String = "https://pokedex-api-taupe-phi.vercel.app"
    var path: String = "/pokemons"
    var method: HTTPMethod = .GET
    let body: Data? = nil
    
}

struct AddPokemonRequests: Request {
    typealias Response = Pokemon
    
    var baseUrl: String = "https://pokedex-api-taupe-phi.vercel.app"
    var path: String = "/pokemons"
    var method: HTTPMethod = .POST
    let body: Data?
    
    init(pokemon: Pokemon) {
        body = try? JSONEncoder().encode(pokemon)
    }
        
}
