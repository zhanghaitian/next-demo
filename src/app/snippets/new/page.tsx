"use client";
import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { createSnippet } from "@/actions";

const initState = {
  message: "",
};

export default function Page() {
  const [state, formAction] = useActionState(createSnippet, initState);

  return (
    <form action={formAction}>
      <h3 className="text-2xl font-bold text-center">create a snippet</h3>
      <div className="flex flex-col gap-4 mt-4">
        {/* title */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border border-teal-500 p-2 rounded w-full"
            name="title"
            type="text"
            id="title"
          />
        </div>
        {/* code */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <input
            className="border border-teal-500 p-2 rounded w-full"
            name="code"
            type="text"
            id="code"
          />
        </div>
        {state.message && (
          <p className=" my-2 rounded border border-red-500 bg-red-200">{state.message}</p>
        )}
        <button
          className="bg-teal-500 text-white p-2 rounded w-full"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
