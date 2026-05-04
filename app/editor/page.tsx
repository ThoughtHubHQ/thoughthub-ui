"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

const CustomBlockNoteEditor = dynamic(() => import("@/components/CustomBlockNoteEditor"), {
  ssr: false,
  loading: () => <p className="p-4 text-gray-500">Loading editor...</p>,
});

const BlockNoteView = dynamic(
  () => import("@blocknote/mantine").then((mod) => mod.BlockNoteView),
  { ssr: false },
);

export default function EditorPage() {
  const [content, setContent] = useState<any[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [mounted, setMounted] = useState(false);
  const previewEditor = useCreateBlockNote();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePublish = () => {
    if (content.length > 0) {
      previewEditor.replaceBlocks(previewEditor.document, content);
      setShowPreview(true);
    }
  };

  if (!mounted) return null;

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl px-4 pb-20 md:px-8">
      <h1 className="mb-6 text-[18px] font-bold text-[#222] dark:text-gray-100 md:text-[24px]">
        Editor
      </h1>

      <CustomBlockNoteEditor onChange={setContent} />

      <div className="mt-6 flex justify-end">
        <button
          onClick={handlePublish}
          className="rounded-lg bg-[#e91e63] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Publish
        </button>
      </div>

      {showPreview && (
        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-6 border-b border-gray-200 pb-4 text-xl font-bold text-gray-900 dark:border-gray-700 dark:text-gray-100">
            Published Preview
          </h2>

          <BlockNoteView
            editor={previewEditor as any}
            editable={false}
            theme="light"
          />
        </div>
      )}
    </div>
  );
}
