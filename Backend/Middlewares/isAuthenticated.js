import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token
    if (!token) {
      return res.status(401).json({
        message: "no token",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {_id:decode.id};
      console.log(req.user);
      next();
    } catch (error) {
      return res.status(400).json({
        message: "invalid token",
      });
    }
  }

