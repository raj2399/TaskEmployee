export interface DatabaseConfigAttributes {
    urlDatabase?: string;
}

export interface DatabaseConfig {
    development: DatabaseConfigAttributes;
    test: DatabaseConfigAttributes;
    production: DatabaseConfigAttributes;
    emp:DatabaseConfigAttributes
}