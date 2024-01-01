//
//  LoginView.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 1.01.2024.
//

import SwiftUI
import FirebaseAuth

struct LoginView: View {
    
    @Binding var isUserLoggedIn: Bool
    @State var email: String = ""
    @State var password: String = ""
    
    var body: some View {
        Form {
            TextField(text: $email) {
                Text("Enter Email")
            }
            
            TextField(text: $password) {
                Text("Enter Password")
            }
            
            Button(action: {
                Task {
                    do {
                        _ = try await Auth.auth().signIn(
                            withEmail:email,
                            password:password
                        )
                        isUserLoggedIn = true
                    } catch {
                        print(error)

                    }
                }

            }, label: {
                Text("Login")
            })
            
            
            Button(action: {
                Task {
                    do {
                        let result = try await Auth.auth()
                            .createUser(
                                withEmail: email,
                                password: password
                            )
                        print(result)
                        isUserLoggedIn = true
                    } catch {
                        print(error)
                    }
                }

            }, label: {
                Text("Sign Up")
            })
        }
    }
}

#Preview {
    LoginView(isUserLoggedIn: .constant(false))
}
