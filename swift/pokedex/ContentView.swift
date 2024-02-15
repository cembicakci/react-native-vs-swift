//
//  ContentView.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import SwiftUI

enum FullScreenItem: String, Identifiable {
    var id: String { rawValue }
    case add
}

struct ContentView: View {
    @State var pokemons: [Pokemon] = []
    @State var fullScreenItem: FullScreenItem?
    
    let decoder = JSONDecoder()
    
    var body: some View {
        
        ZStack(alignment: .bottomTrailing) {
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
                        
                        }
                    }
                }
                .padding()
                
                Button {
                    fullScreenItem = .add
                } label: {
                    Image(systemName: "plus")
                        .padding(20)
                        .background(Color.white)
                        .clipShape(Circle())
                        .padding(20)
                }
            
            }
            .task {
                await fetchData()
            }
            .sheet(item: $fullScreenItem) { item in
                switch item {
                case .add:
                    AddView()
                }
              
            }
        
    }
    
    func fetchData() async {
        let request = PokemonRequests()
        
        do {
            self.pokemons = try await APIClient.shared.send(request)
        } catch {
            print("Error fetching data: \(error)")
        }
    }
    
    func imageUrl(for pokemon: Pokemon) -> URL {
        print(pokemon.pokemonId)
        return URL(string: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/\(pokemon.pokemonId).png")!
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
