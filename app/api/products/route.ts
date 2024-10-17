import products from "@/utils/data/products";

export function GET(req: Request, res: Response) {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
