export async function POST(req: Request) {
  const request = await req.json();
  const email = request.email;
  const password = request.password;

  if (email === "johndoe@mail.com" && password === "ecommerce") {
    // res.status(200).json({ status: true });
    return new Response(JSON.stringify({ status: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    // res.status(401).json({ status: false });
    return new Response(JSON.stringify({ status: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
