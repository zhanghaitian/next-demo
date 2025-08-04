import { db } from "@/db";
import { sleep } from "@/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import SnippetDelButton from "@/components/snippetDelButton";
import { deleteSnippet } from "@/actions";

interface SnippetShowPageProps {
  params: { id: string };
}

export default async function Page(props: SnippetShowPageProps) {
  await sleep(3000);
  const id = (await props.params).id;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  const deleteSnippetWithId = deleteSnippet.bind(null, +id);

  if (!snippet) {
    return notFound();
  }
  return (
    <>
      <div className="flex items-center justify-between mt-10">
        <h1 className="text-2xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link className="p-2 border border-teal-500 rounded" href="/">
            Edit
          </Link>
          {/* <SnippetDelButton id={+id} /> */}
          <form action={deleteSnippetWithId}>
            <button type="submit" className="p-2 border border-red-500 rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border border-teal-500 rounded bg-gray-200 mt-6">
        <code className="text-sm">{snippet.code}</code>
      </pre>
    </>
  );
}
