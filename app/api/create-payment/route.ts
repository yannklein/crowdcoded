import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'jpy',
      automatic_payment_methods: {
        enabled: true
      }
    });
    return NextResponse.json({
      client_secret: paymentIntent.client_secret
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error.message}` },
      { status: 500 }
    );
  }
}
