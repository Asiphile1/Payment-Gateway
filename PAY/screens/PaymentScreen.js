import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text } from 'react-native';
import { PAYSTACK_PUBLIC_KEY } from '@env';

export default function PaymentScreen() {
  const paystackUrl = `https://checkout.paystack.com?key=${PAYSTACK_PUBLIC_KEY}&email=customer@example.com&amount=1000`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Gateway</Text>
      <WebView
        source={{ uri: paystackUrl }}
        onMessage={(event) => {
          const { status } = JSON.parse(event.nativeEvent.data);
          if (status === 'success') alert('Payment Successful!');
          else alert('Payment Failed!');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 18, textAlign: 'center', marginVertical: 10 },
});
