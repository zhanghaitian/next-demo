import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default function Page() {

  async function createSnippet(formData: FormData) {
    'use server'
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect('/')
  }
  
  return (
    <form action={createSnippet}>
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
        <button className="bg-teal-500 text-white p-2 rounded w-full" type="submit">Create</button>
      </div>
    </form>
  );
}
