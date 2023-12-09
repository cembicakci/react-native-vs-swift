//
//  pokedexApp.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import SwiftUI

@main
struct pokedexApp: App {
    var body: some Scene {
        WindowGroup {
            TabView {
                ContentView()
                    .tabItem {
                        VStack {
                            Image(systemName: "house.fill")
                            Text("Home")
                        }
                    }
                
                SettingsView()
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
