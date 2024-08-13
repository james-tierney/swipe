from flask import Flask, request, jsonify
import stripe
import subprocess  # Add this import

app = Flask(__name__)

# Set your secret key. Remember to replace this with your actual secret key.
stripe.api_key = "sk_test_51MIxt5KhH8zNT0eB8iLQwqDCpcFhhjQJhUHhc7YF99YfdgsfZ58FayYJwPTvtTokk195NMPVEpZ3rk56CsfrbzBi00SBkjyRrE"
webhook_endpoint_secret = 'whsec_LG3tvZ1TnYUc9MpF2f9HFPR0n0Z94uOu'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        # Create a new checkout session
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': 'SwipeMateAI',
                        },
                        'unit_amount': 2000,  # Amount in cents
                    },
                    'quantity': 1,
                },
            ],
            automatic_tax={'enabled': True},
            mode='payment',
            success_url='http://localhost:3000/checkout-success',
            cancel_url='https://your-website.com/cancel',
        )
        print(f"Created Stripe Checkout Session: {session.id}")
        return jsonify({'id': session.id})
    except Exception as e:
        print(f"Error creating checkout session: {e}")
        return jsonify(error=str(e)), 500

@app.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data
    sig_header = request.headers['STRIPE_SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, webhook_endpoint_secret  # Use the correct variable here
        )
    except ValueError as e:
        # Invalid payload
        print(f"Invalid payload: {e}")
        return jsonify(success=False), 400
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        print(f"Invalid signature: {e}")
        return jsonify(success=False), 400

    # Handle the event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        print('Payment was successful!')
        # Call your Tinder script here
        # subprocess.run(["python3", "/path/to/your_script.py"])  # Adjust this path to your actual script
        print("Now we can run the tinder scripts")
    else:
        print(f'Unhandled event type {event["type"]}')

    return jsonify(success=True)

if __name__ == '__main__':
    app.run(port=3002)
