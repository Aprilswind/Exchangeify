/**
 * A set of functions called "actions" for `transact`
 */

export default {
  transact: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
