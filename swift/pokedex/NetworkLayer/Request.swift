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
    //var body
    //var header
    //var queryItems
    
}

enum HTTPMethod: String {
    case GET
}

extension Request {
    
    var asURLRequest: URLRequest {
        let url = URL(string: baseUrl + path)!
        let request = URLRequest(url: url)
        return request
    }
    
}
