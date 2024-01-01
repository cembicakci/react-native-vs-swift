//
//  AddView.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 1.01.2024.
//

import SwiftUI

struct AddView: View {
    @State var name: String = ""
    @State var id: String = ""
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        Form {
            TextField(text: $name) {
                Text("Enter Name")
            }
            
            TextField(text: $id) {
                Text("Enter Pokemon Id")
            }
            
            Button(action: {
                guard(2...100).contains(name.count) else {
                    return
                }
                
                guard let pokemonId = Int(id) else {
                    return
                }
                
                let request = AddPokemonRequests(
                    pokemon: .init(
                        id: nil,
                        name: name,
                        pokemonId: pokemonId
                    )
                )
                
                Task {
                   //_ = await APIClient.shared.send(request)
                    dismiss()
                }
                
            }, label: {
                Text("Add")
            })
        }
        .navigationTitle("Add")
    }
}

#Preview {
    AddView()
}
