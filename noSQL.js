

// Aspect	                MongoDB	                                    MySQL
// Data Model             	Document-oriented (NoSQL)	                Relational (SQL)
// Schema	                Schema-less or schema-flexible	            Schema-based
// Query Language	        JSON-like queries	                        SQL (Structured Query Language)
// Schema Changes	        No impact on existing documents 	        Can impact existing data
// Scalability	            Horizontal scaling via sharding	            Vertical and horizontal scaling
// Transactions	            Limited support (in recent versions)	    ACID-compliant transactions
// Complexity	            Simple to scale and manage	                Complex to manage at large scales
// Use Cases	            Agile development, real-time analytics	    E-commerce, financial applications




// Data Model: MongoDB stores data as flexible JSON-like documents in collections, whereas MySQL uses tables with predefined schemas consisting of rows and columns.
user = {
    {
        email:"hjasbfdsfj@jnvk",
        password:"nfv cknv dfjkm,ncb"   
    },
    {
        email:"hjasbfdsfj@jnvk",
        password:"nfv cknv dfjkm,ncb"
    }
}

// Schema: MongoDB allows for schema flexibility where documents in a collection can have different structures. MySQL enforces a strict schema where changes can impact existing data.

// Query Language: MongoDB uses a query language similar to JSON and JavaScript, while MySQL uses SQL, a standardized language for relational databases.

// Schema Changes: MongoDB allows for schema evolution without impacting existing documents. In MySQL, schema changes can affect existing data and may require careful management.

// Scalability: MongoDB is designed for horizontal scalability through sharding, making it easier to handle large volumes of data and high traffic. MySQL can scale vertically by adding resources to a single server and also supports horizontal scaling, but it can be more complex.

// Transactions: MongoDB traditionally lacked ACID-compliant transactions across multiple documents (though recent versions have improved in this area), whereas MySQL supports ACID-compliant transactions, making it suitable for applications requiring strong consistency.

// Complexity: MongoDB is generally simpler to scale and manage in large-scale distributed environments compared to MySQL, which can become complex when scaling horizontally.

// Use Cases: MongoDB is often chosen for applications requiring flexibility, agile development, real-time analytics, and handling of unstructured data. MySQL is preferred for applications needing strong consistency, complex queries, and transactions, such as e-commerce platforms and financial applications.