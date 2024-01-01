//
//  pokedexApp.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import SwiftUI
import Firebase
import FirebaseAuth

@main
struct pokedexApp: App {
    
    init() {
        FirebaseApp.configure()
    }
    
    @AppStorage("isUserLoggedIn") var isUserLoggedIn: Bool = false
    
    var body: some Scene {
        WindowGroup {
            if !isUserLoggedIn {
                LoginView(isUserLoggedIn: $isUserLoggedIn)
            } else {
                TabView {
                    ContentView()
                        .tabItem {
                            VStack {
                                Image(systemName: "house.fill")
                                Text("Home")
                            }
                        }
                    
                    SettingsView(isUserLoggedIn: $isUserLoggedIn)
                        .tabItem {
                            VStack {
                                Image(systemName: "gear.circle.fill")
                                Text("Settings")
                            }
                        }
                }
            }
        }
    }
}
