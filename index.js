const app = require("./app")
const {PORT} = process.env
// process.env.PORT

app.listen(PORT, () => "Server is running at 4000")