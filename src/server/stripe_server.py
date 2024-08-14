import os
from flask import Flask, request, jsonify
import stripe
import subprocess  # Add this import
import json

app = Flask(__name__)

# Set your secret key. Remember to replace this with your actual secret key.
stripe.api_key = "sk_test_51MIxt5KhH8zNT0eB8iLQwqDCpcFhhjQJhUHhc7YF99YfdgsfZ58FayYJwPTvtTokk195NMPVEpZ3rk56CsfrbzBi00SBkjyRrE"
webhook_endpoint_secret = 'whsec_LG3tvZ1TnYUc9MpF2f9HFPR0n0Z94uOu'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    data = json.loads(request.data)
    auth_token = data.get('authToken')

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
            client_reference_id=auth_token,  # Set the auth token here
            success_url=f'http://localhost:3000/checkout-success?authToken={auth_token}',
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
        auth_token = session.get('client_reference_id')  # Fetch the auth token
        
        if auth_token:
            # Run Tinder script with the relative path and auth token
            print('Payment was successful! Now we can run the Tinder scripts')
            subprocess.run(["python3", "./src/tinder/tinder_script2.py", auth_token])
        else:
            print("No Auth Token")
        
        
    else:
        print(f'Unhandled event type {event["type"]}')

    return jsonify(success=True)

if __name__ == '__main__':
    app.run(port=3002)
