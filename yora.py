import pandas as pd
import random

# Set a random seed for reproducibility
random.seed(42)

# Create an empty DataFrame to store the dataset
data = pd.DataFrame(columns=[
    'isfraud', 'numdayopen', 'value', 'tranid', 'userid', 'last4dig', 'dayind', 'bankid', 'international'
])

# Generate synthetic data for 800 observations
for _ in range(800):
    data = data.append({
        'isfraud': random.choice([0, 1]),  # 0 for non-fraud, 1 for fraud
        'numdayopen': random.randint(1, 365),  # Number of days account has been open
        'value': random.uniform(1, 1000),  # Transaction value in dollars
        'tranid': random.randint(10000, 99999),  # Internal transaction ID
        'userid': random.randint(1, 100),  # Internal user ID
        'last4dig': random.randint(1000, 9999),  # Last 4 digits of the credit card
        'dayind': random.randint(1, 7),  # Day of the week
        'bankid': random.randint(1, 6),  # Bank identifier
        'international': random.choice([0, 1])  # 0 for domestic, 1 for international
    }, ignore_index=True)

# Save the dataset to a CSV file
data.to_csv('synthetic_fraud_dataset.csv', index=False)

# Display the first few rows of the dataset
print(data.head())
