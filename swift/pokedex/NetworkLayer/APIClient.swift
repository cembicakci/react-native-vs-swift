//
//  APIClient.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import Foundation

final class APIClient {
    
    static let shared = APIClient()
    
    private let session = URLSession.shared
    private let decoder = JSONDecoder()
    
    private init() { }
    
    func send<T: Request>(_ request: T) async -> T.Response {
        
        do {
            let (data, _) = try await session.data(for: request.asURLRequest)
            return try decoder.decode(T.Response.self, from: data)
        } catch {
            fatalError()
        }
        
    }
    
}
