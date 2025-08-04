"use client";
import { deleteSnippet } from "@/actions";
import React, { startTransition } from "react";

export default function SnippetDelButton(props: { id: number }) {
  const id = props.id;
  const handleDelete = () => {
    startTransition(async () => {
      await deleteSnippet(id);
    });
  };
  return (
    <button onClick={handleDelete} className="p-2 border border-red-500 rounded">
      Delete
    </button>
  );
}
