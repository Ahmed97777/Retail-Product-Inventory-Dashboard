import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./database/db";

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  });
