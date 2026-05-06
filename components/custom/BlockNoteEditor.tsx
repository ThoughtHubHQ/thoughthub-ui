"use client";

import { useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

interface CustomBlockNoteEditorProps {
  onChange?: (blocks: any[]) => void;
}

export default function CustomBlockNoteEditor({
  onChange,
}: CustomBlockNoteEditorProps) {
  const editor = useCreateBlockNote();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#1f1f1f]">
      <div className="min-h-120 py-8">
        <BlockNoteView
          editor={editor}
          theme="dark"
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

export function BlockNotePreview({ content }: { content: any[] }) {
  const editor = useCreateBlockNote();

  useEffect(() => {
    if (content && content.length > 0) {
      editor.replaceBlocks(editor.document, content);
    }
  }, [editor, content]);

  return <BlockNoteView editor={editor} editable={false} theme="dark" />;
}