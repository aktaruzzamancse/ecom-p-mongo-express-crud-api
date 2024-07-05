import app from "./app";
const port = 3000

async function main() {
  try {
    app.get('/', (req, res) => {
      res.send('Allhumdulliah! Basic server ready!')
    })

    app.listen(port, () => {
      console.log(`App listening from port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
