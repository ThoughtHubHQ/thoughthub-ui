"use client";

import { useState, useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface CustomBlockNoteEditorProps {
  onChange?: (blocks: any[]) => void;
}

export default function CustomBlockNoteEditor({ onChange }: CustomBlockNoteEditorProps) {
  const [mounted, setMounted] = useState(false);
  const editor = useCreateBlockNote();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="min-h-120 w-full rounded-xl border border-gray-200 bg-white" />
    );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="min-h-120 py-8">
        <BlockNoteView
          editor={editor}
          theme="light"
          onChange={() => {
            if (onChange) {
              onChange(editor.document);
            }
          }}
        />
      </div>
    </div>
  );
}
