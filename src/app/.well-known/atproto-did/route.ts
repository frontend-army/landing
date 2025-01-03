
export async function GET() {
  // Return a plain text response
  return new Response('did:plc:rt65vh4egc6zangpswex7akg', {
      status: 200,
      headers: {
          'Content-Type': 'text/plain',
      },
  });
}
