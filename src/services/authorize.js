export default async function authorize(code) {
  fetch('http://localhost:3000/auth', {
    method: 'POST',
    body: JSON.stringify({ code }),
  });

  return null;
}
