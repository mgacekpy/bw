// Plik: src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Inicjalizujemy Resend z naszym kluczem API
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Walidacja danych (tak jak wcześniej)
    if (!data.name || !data.email || !data.message || !data.consent) {
      return new Response(JSON.stringify({ message: "Proszę wypełnić wszystkie wymagane pola." }), { status: 400 });
    }

    // Wysłanie e-maila za pomocą Resend
    const { data: responseData, error } = await resend.emails.send({
      from: 'Formularz Kontaktowy <formularz@bizneswizytowka.pl>', // Musi być z Twojej zweryfikowanej domeny
      to: ['kontakt@bizneswizytowka.pl'], // Adres, na który przyjdzie e-mail
      replyTo: data.email, // Ustawia pole "Odpowiedz do" na e-mail użytkownika
      subject: `Nowe zapytanie od ${data.name} - ${data.topic}`,
      text: `
        Otrzymano nową wiadomość z formularza kontaktowego:

        Imię i nazwisko: ${data.name}
        E-mail: ${data.email}
        Telefon: ${data.phone || 'Nie podano'}

        Temat: ${data.topic || 'Nie wybrano'}
        Budżet: ${data.budget || 'Nie wybrano'}

        Wiadomość:
        ${data.message}
      `,
    });

    if (error) {
      console.error({ error });
      return new Response(JSON.stringify({ message: "Błąd podczas wysyłania e-maila." }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Wiadomość wysłana pomyślnie." }), { status: 200 });

  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ message: "Wystąpił nieoczekiwany błąd." }), { status: 500 });
  }
};