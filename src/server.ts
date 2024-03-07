import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const main = async () => {
  await mongoose.connect(config.database_url as string);
};
main().catch((err) => console.log(err));

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});

// NODE_ENV=development
// PORT=5000
// DATABASE_URL=mongodb+srv://pressflow:7aP2JWlcrpXMllmA@junior.tpsklbw.mongodb.net/pressflow?retryWrites=true&w=majority&appName=Junior
