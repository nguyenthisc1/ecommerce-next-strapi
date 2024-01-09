// @ts-nocheck

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async () => {
          const item = await strapi
            .service("api:product.product")
            .findOne(item.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        })
      );

      const session = stripe.checkout.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_item: lineItems,
        shipping_address_collection: { allowed_countries: ["US", "VN"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api:order:order").create({
        data: {
          products,
          stripeid: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return error;
    }
  },
}));
