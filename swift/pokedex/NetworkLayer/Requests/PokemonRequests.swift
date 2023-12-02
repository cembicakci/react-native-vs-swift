//
//  PokemonRequests.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import Foundation

struct Pokemon: Decodable, Identifiable {
    let id: Int
    let name: String
    let pokemonId: Int
}

typealias PokemonsResponse = [Pokemon]

struct PokemonRequests: Request {
    
    typealias Response = PokemonsResponse
    
    var baseUrl: String = "https://my-json-server.typicode.com/ozcanzaferayan/pokedex"
    var path: String = "/pokemons"
    var method: HTTPMethod = .GET
    
}
