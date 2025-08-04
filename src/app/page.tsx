// export const revalidate = 0;
// export const dynamic = 'force-dynamic'

// export const revalidate = 5;

import React from "react";
import Link from "next/link";
import { db } from "@/db";

export default async function Page() {
  const snippets = await db.snippet.findMany();
  console.log(snippets);

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="p-2 border border-teal-500 rounded flex items-center justify-between mt-2"
    >
      <span>{snippet.title}</span>
      <span>view</span>
    </Link>
  ));
  return (
    <>
      <div className="flex items-center justify-between mt-5">
        <h1 className="text-lg font-bold">Snippets</h1>
        <Link
          href="/snippets/new"
          className="p-2 border border-teal-500 rounded"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-5">{renderedSnippets}</div>
    </>
  );
}
