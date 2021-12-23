import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
