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

export const create = async(req,res)=>{
  try{
    const cat = new CatController(req.body);
    await cat.create();
    res.status(200).json("created");
  } catch (error) {
    res.status(400).json({message:error})
  }
}

export const update = async (req, res) => {
  try {
    const cat = new CatController(req.body);
    await cat.update(req.params.id);
    res.status(200).json("updated");
  } catch (error) {
    res.status(400).json({message: error})
  }
};


export const remove = async (req, res) => {
  try {
    const cat = new CatController(req.body);
    await cat.remove(req.params.id);
    res.status(200).json("deleted");
  } catch (error) {
    res.status(400).json({message: error})
  }
};