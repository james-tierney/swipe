from google.cloud import storage
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Path to your service account key
SERVICE_ACCOUNT_KEY = os.getenv('SERVICE_ACCOUNT_KEY')

# Set the environment variable to tell Google Cloud where to find the credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = SERVICE_ACCOUNT_KEY

def test_gcs_access():
    # Initialize the client with the service account key
    client = storage.Client()

    # List and print the buckets in the project
    buckets = list(client.list_buckets())
    print("Buckets in project:")
    for bucket in buckets:
        print(bucket.name)

test_gcs_access()
