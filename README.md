# PaystackApp

A simple React Native Expo application for integrating Paystack payment gateway. This app demonstrates how to allow users to make payments seamlessly using Paystack's WebView-based checkout.

## Features

* A "Pay Now" button to initiate the payment process.
* Secure payment integration with Paystack.
* Sandbox environment for testing.
* Easy to customize for live payments.

## Prerequisites

* Node.js and npm installed.
* Expo CLI installed globally.
* A Paystack account with access to API keys.

## Getting Started

1. Clone the Repository
```

git clone https://github.com/yourusername/PaystackApp.git
cd PaystackApp
```

2. Install Dependencies
```
npm install
```

3. Configure Environment Variables

Create a .env file in the root directory and add your Paystack public key:

```
PAYSTACK_PUBLIC_KEY=your-paystack-public-key-here
```

4. Start the Development Server
```
expo start
```

Folder Structure
```
PaystackApp/
├── App.js                    # Main entry point
├── components/
│   └── PayButton.js          # Paystack payment button (optional)
├── screens/
│   └── PaymentScreen.js      # WebView for Paystack checkout
├── .env                      # Environment variables (Paystack API key)
├── package.json              # Project dependencies

```

## Usage

1. * Run the App: Launch the app using the Expo Go app or an emulator.

2. * Make a Payment:
* Tap the "Pay Now" button.
* The app redirects to a WebView with the Paystack payment gateway.


3. * Test Payments:
* Use Paystack's test cards from their documentation.
* Example:
* Card Number: 4084084084084081
* Expiry Date: Any valid future date
* CVV: 408

## Testing

This app uses Paystack's sandbox mode by default. Replace the PAYSTACK_PUBLIC_KEY in the .env file with your live key to enable real payments.
