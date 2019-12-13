import { CatController } from "controllers";

export const read = async (req, res) => {
  try {
    const cat = new CatController(req);
    const data = await cat.read();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
