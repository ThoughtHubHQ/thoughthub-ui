"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/custom/BlockNoteEditor"), {
  ssr: false,
  loading: () => (
    <div className="min-h-120 w-full animate-pulse rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#1f1f1f]" />
  ),
});

const Preview = dynamic(
  () =>
    import("@/components/custom/BlockNoteEditor").then(
      (mod) => mod.BlockNotePreview
    ),
  {
    ssr: false,
  }
);

export default function EditorPage() {
  const [content, setContent] = useState<any[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const handlePublish = () => {
    if (content.length > 0) {
      setShowPreview(true);
    }
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl px-4 pb-20 md:px-8">
      <h1 className="mb-6 text-[18px] font-bold text-[#222] dark:text-gray-100 md:text-[24px]">
        Editor
      </h1>

      <Editor onChange={setContent} />

      <div className="mt-6 flex justify-end">
        <button
          onClick={handlePublish}
          className="rounded-lg bg-[#e91e63] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Publish
        </button>
      </div>

      {showPreview && (
        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-[#1f1f1f]">
          <h2 className="mb-6 border-b border-gray-200 pb-4 text-xl font-bold text-gray-900 dark:border-gray-700 dark:text-gray-100">
            Published Preview
          </h2>

          <Preview content={content} />
        </div>
      )}
    </div>
  );
}