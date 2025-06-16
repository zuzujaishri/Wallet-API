import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

import "dotenv/config";

const ratelimit = new Ratelimit({
 radis:Redis.fromEnv(),
 limiter:Ratelimit.slidingWindow(2,"60 s"), // 4 requests per minute
    keyPrefix: "ratelimit",
});

export default ratelimit;