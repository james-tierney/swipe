import os
import json
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Get the SERVICE_ACCOUNT_KEY path from the environment
service_account_key = os.getenv('SERVICE_ACCOUNT_KEY')

if service_account_key:
    # Print the JSON content from the file
    try:
        with open(service_account_key, 'r') as f:
            json_data = json.load(f)
            print(json.dumps(json_data, indent=4))  # Pretty-print the JSON
    except FileNotFoundError:
        print(f"File not found: {service_account_key}")
    except json.JSONDecodeError:
        print("Error decoding the JSON file.")
else:
    raise Exception("SERVICE_ACCOUNT_KEY not set in the environment.")
