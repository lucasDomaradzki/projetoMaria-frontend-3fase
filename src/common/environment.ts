export const environment = {
  server: {port: process.env.SERVER_PORT || 5000},
  db: {url: process.env.DB_URL || "mongodb://localhost:27017/projetoMaria"}
}