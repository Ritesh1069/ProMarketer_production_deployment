# import pandas as pd

# def find_email_col(csv_file_path):
#     # Read the CSV file into a Pandas DataFrame
#     df = pd.read_csv(csv_file_path)
    
#     # Initialize an empty list to store column names containing emails
#     email_columns = []
    
#     # Iterate over each column in the DataFrame
#     for column in df.columns:
#         # Check if any value in the column matches the email regex pattern
#         if df[column].astype(str).str.contains(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b').any():
#             email_columns.append(column)
    
#     return email_columns

import pandas as pd

def find_email_col(csv_file_path):
    # Read the CSV file into a Pandas DataFrame
    df = pd.read_csv(csv_file_path)
    
    # Initialize an empty DataFrame to store the rows containing email addresses
    email_df = pd.DataFrame()
    
    # Iterate over each column in the DataFrame
    for column in df.columns:
        # Check if any value in the column matches the email regex pattern
        if df[column].astype(str).str.contains(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b').any():
            # If the column contains email addresses, add it to the email_df
            email_df[column] = df[column]
    
    return email_df