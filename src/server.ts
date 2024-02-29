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
