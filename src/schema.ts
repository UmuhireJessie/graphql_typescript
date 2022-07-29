import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql"; // 1

export const schema = makeSchema({
  types, // 2
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "nexus-typegen.ts"),
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"), // 1
    export: "Context", // 2
  },
});
