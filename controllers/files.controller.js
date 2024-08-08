import File from '../models/files.models.js';

// Create a new file
export const createFile = async (req, res) => {
    try {
        const newFile = new File(req.body);
        const savedFile = await newFile.save();
        res.status(201).json(savedFile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all files
export const getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single file by ID
export const getFileById = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).json({ message: "File not found" });
        }
        res.status(200).json(file);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a file by ID
export const updateFile = async (req, res) => {
    try {
        const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFile) {
            return res.status(404).json({ message: "File not found" });
        }
        res.status(200).json(updatedFile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a file by ID
export const deleteFile = async (req, res) => {
    try {
        const deletedFile = await File.findByIdAndDelete(req.params.id);
        if (!deletedFile) {
            return res.status(404).json({ message: "File not found" });
        }
        res.status(200).json({ message: "File deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
