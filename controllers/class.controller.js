import Class from "../models/classes.model.js";


export const createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const readClass = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id);
    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json(classData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const readClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateClass = async (req, res) => {
  try {
      const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedClass) {
          return res.status(404).json({ message: "Class not found" });
      }
      res.status(200).json(updatedClass);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
}

// Delete a class by ID
export const deleteClass = async (req, res) => {
  try {
      const deletedClass = await Class.findByIdAndDelete(req.params.id);
      if (!deletedClass) {
          return res.status(404).json({ message: "Class not found" });
      }
      res.status(200).json({ message: "Class deleted successfully" });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

