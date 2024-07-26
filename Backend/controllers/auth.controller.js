import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    //EXTRACT DATA SENT FROM USER
    const { username, email, password } = req.body
    try {

        //HASH/ENCRYPT USER PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10)
        
        // console.log(hashedPassword)

        //CREATE NEW USER USING SCHEMA CREATED IN PRISMA
        const newUser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword
            }
        })

        // console.log(newUser)
        res.status(201).json({ message: "User Created Successfully" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to create new user" })
    }
}
export const login = async (req, res) => {
    const { username, password } = req.body
    try {
        //CHECK USER EXIST
        const user = await prisma.user.findUnique({
            where: { username: username }
        });
        if (!user) return res.status(401).json({ message: "Invalid credentials" })
        //CHECK PASSWORD
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" })

        //GENERATE TOKEN AND SEND TO USER
        const age = 1000 * 60 * 60 * 24 * 7

        const token = jwt.sign({
            id: user.id,
            isAdmin: false
        }, process.env.JWT_SECRET_KEY, { expiresIn: age })

        const { password: userPassword, ...userInfo } = user

        res.cookie("token", token, {
            httpOnly: true,
            // secure:true,
            maxAge: age
        }).status(200).json(userInfo)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to Login" })
    }
}
export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" })
} 

// exports={
// register:register,
// login:login,
// logout:logout
// }
