const {accessories} = require("./data.json");

export default function handler(req, res) {
  res.status(200).json(accessories)
}
