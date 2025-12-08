import { loadStripe } from '@stripe/stripe-js';

// Inicjalizacja Stripe kluczem użytkownika
const stripePromise = loadStripe('pk_test_51SayfvFFIIJBkvjRibtS787NeVep5LGPOIsaR2hJGk1TIoLMGY0uH60kJtYLgMqthrj6fjYwyfyOrDN0CiOMZyvW00GGwAJbyZ');

export const handleCheckout = async (priceId) => {
  const stripe = await stripePromise;

  if (!priceId) {
    console.error("Błąd: Brak ID ceny (priceId)!");
    alert("Wystąpił błąd konfiguracji produktu.");
    return;
  }

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: window.location.origin + '/dashboard?payment=success',
    cancelUrl: window.location.origin + '/shop',
  });

  if (error) {
    console.error('Błąd Stripe:', error);
    alert('Wystąpił błąd płatności: ' + error.message);
  }
};
