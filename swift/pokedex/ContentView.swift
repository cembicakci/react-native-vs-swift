//
//  ContentView.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import SwiftUI

enum NavigationItem: Hashable {
    case detail
}

struct ContentView: View {
    @State var pokemons: [Pokemon] = []
    @State var path: [NavigationItem] = []
    
    let decoder = JSONDecoder()
    
    var body: some View {
        NavigationStack(path: $path) {
            ZStack {
                LinearGradient(colors: [.pink, .purple], startPoint: .top, endPoint: .bottom)
                    .ignoresSafeArea()
                ScrollView {
                    LazyVStack {
                        ForEach(pokemons) { pokemon in
                            HStack {
                                AsyncImage(url: imageUrl(for: pokemon)) { image in
                                    image
                                        .resizable()
                                        .frame(width: 100, height: 100)
                                } placeholder: {
                                    ProgressView()
                                }
                                Text(pokemon.name)
                                    .fontWeight(.bold)
                                    .font(.title)
                                
                                Spacer()
                            }
                            .background(Color.white)
                            .onTapGesture {
                                path.append(.detail)
                            }
                        }
                    }
                }
            }
            .task {
                await fetchData()
            }.navigationDestination(for: NavigationItem.self) { item in
                switch item {
                case .detail:
                    SettingsView()
                }
            }
        }
    }
    
    func fetchData() async {
        let request = PokemonRequests()
        self.pokemons = await APIClient.shared.send(request)
        
    }
    
    func imageUrl(for pokemon: Pokemon) -> URL {
        URL(string: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/\(pokemon.pokemonId).png")!
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
