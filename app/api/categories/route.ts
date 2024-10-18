import categories from "@/utils/categories";

export function GET(req: Request, res: Response) {
  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
