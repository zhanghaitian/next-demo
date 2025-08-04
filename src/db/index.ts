import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// db.snippet.create({
//   data: {
//     title: "React",
//     code: "const React = () => { return <div>React</div> }",
//   },
// }).then((
//   console.log
// ));







