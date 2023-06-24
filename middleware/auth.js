import jwt from "jsonwebtoken";

// how middleware works ???
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) return res.status(403).json("Access Denied");

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // what is the value of "verifed" ??
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified;
    next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
