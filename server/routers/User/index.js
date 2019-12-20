import { UserController } from "controllers";

export const create = async (req, res) => {
  try {
    const user = new UserController(req.body);
    await user.create();
    res.status(200).json("created");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
export const validate = async (req, res) => {
  try {
    const user = new UserController(req.body);
    const result = await user.validate();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
