const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;

export const collections = {
  PRODUCTS: "products",
  USERS: "users",
  CART: "cart",
  ORDER: "order",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cName) => {
  return client.db(dbname).collection(cName);
};
