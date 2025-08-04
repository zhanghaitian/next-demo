import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import SnippetEditForm from "@/components/snippetEditForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (isNaN(parseInt(id))) {
    return notFound();
  }
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  console.log("🚀 ~ Page ~ snippet:", snippet);

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
