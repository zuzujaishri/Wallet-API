import ratelimit from "../config/upstash.js"; 

const rateLimiter= async (req, res, next) => {
  try {
    const {success} = await ratelimit.limit("my-rate-limit"); // Use req.ip to get the client's IP address
    if (!success) {
      return res.status(429).json({ message: "Too Many Requests,please try again later" });

    }
    next(); // Proceed to the next middleware or route handler

} catch (error) {
    console.error("Rate limiter error:", error);
    next(error); // Pass the error to the next middleware
    // res.status(500).json({ error: "Internal Server Error" });
  }
};
export default rateLimiter;
// This middleware checks the rate limit for incoming requests and blocks them if the limit is exceeded.
// It uses the Upstash Ratelimit service to manage the rate limiting.