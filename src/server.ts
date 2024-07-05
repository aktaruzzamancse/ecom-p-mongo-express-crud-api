import app from "./app";
const port = 3000;

async function main() {
  try {
    const a = "Allahu Akbar";
    app.get("/", (req, res) => {
      res.send(a);
    });

    app.listen(port, () => {
      console.log(`App listening from port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
