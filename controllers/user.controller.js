// controllers/userController.js
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'; // Ensure bcrypt is correctly imported
import jwt from 'jsonwebtoken';


// Register user
export const register = async (req, res) => {
  const { fullname, email, password, role } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password,
      role
    });

    // Save the user to the database
    await newUser.save();

    // Send the response
    res.status(201).json({
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Login user
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
    // Generate JWT

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h' // Token expiration time
      });



      // Send the response with user details
    res.status(200).json({
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role
      },
      token
    });

    
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Server error', error });
    }
  };

  



