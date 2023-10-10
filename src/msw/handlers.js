import { rest } from "msw";
import { data } from "./data";

let listings = data;

export const handlers = [
  rest.get("http://localhost:6001/listings", (req, res, ctx) => {
    return res(ctx.json(listings));
  }),
  rest.delete("http://localhost:6001/listings/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    listings = listings.filter((l) => l.id !== parseInt(id));
    return res(ctx.json({}));
  }),
];
