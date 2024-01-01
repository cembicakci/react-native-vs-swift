//
//  Request.swift
//  pokedex
//
//  Created by Cem Bıçakcı on 2.12.2023.
//

import Foundation

protocol Request {
    
    associatedtype Response: Decodable
    
    var baseUrl: String { get }
    var path: String { get }
    var method: HTTPMethod { get }
    var body: Data? { get }
    //var header
    //var queryItems
    
}

enum HTTPMethod: String {
    case GET
    case POST
}

extension Request {
    
    var asURLRequest: URLRequest {
        let url = URL(string: baseUrl + path)!
        var request = URLRequest(url: url)
        request.httpBody = body
        return request
    }
    
}
