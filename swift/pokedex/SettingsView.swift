//
//  SettingsView.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 9.12.2023.
//

import FirebaseAuth
import SwiftUI

struct SettingsView: View {
    
    @Binding var isUserLoggedIn: Bool
    
    var body: some View {
        VStack {
            Text("Settings")
            
            Button {
                do {
                    try Auth.auth().signOut()
                    isUserLoggedIn = false
                    print("logged out")
                } catch {
                    print(error)
                }
            } label: {
                Text("Logout")
            }
        }
    }
}

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView(isUserLoggedIn: .constant(false))
    }
}
