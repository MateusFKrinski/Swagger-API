import app from "./app";

const PORT = 8080

function main() {
  app.listen(PORT, "localhost", () => {
    console.log(`Server running at port ${PORT}`);
  });
}

main();
