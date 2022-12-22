import { Context } from 'koa'
import noblox from "noblox.js"

interface Payload {
  username: string
  gameId: string
}

export default {
  check: async (ctx: Context) => {
    try {
      const payload = ctx.request.query as unknown as Payload
      return await noblox.getProductInfo(112225158)
    } catch (err) {
      ctx.body = err;
    }
  }
};
