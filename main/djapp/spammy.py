import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle

# Load the trained model and vectorizer
with open('vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)

with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

# User input for one email
email = input("Enter the email: ")

# Transform the input email using the vectorizer
email_count = vectorizer.transform([email])

# Predict the class (spam or not spam) for the email
prediction = model.predict(email_count)

# Output the prediction
print("Predicted class:", "spam" if prediction[0] == 1 else "not spam")
