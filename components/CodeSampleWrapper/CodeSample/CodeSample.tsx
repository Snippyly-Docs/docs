import React, { useRef, useEffect } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

export interface CodeSampleProps {
  code: string;
  scrollToLine: number;
}

export default function CodeSample(props: CodeSampleProps) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && props.scrollToLine >= 0) {
      const editor = editorRef.current.editor;
      editor.scrollToLine(props.scrollToLine, true, true, () => {});
      editor.gotoLine(props.scrollToLine + 1, 0, true);
      editor.focus();
    }
  }, [props.scrollToLine]);

  return (
    <AceEditor
      ref={editorRef}
      mode="javascript"
      theme="twilight"
      value={props.code}
      fontSize={14}
      readOnly
      showGutter
      wrapEnabled
      setOptions={{
        useWorker: false,
        minLines: 12
      }}
      width="100%"
      height="100%"
    />
  );
}