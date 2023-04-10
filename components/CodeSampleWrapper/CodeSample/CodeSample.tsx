import React, { useRef, useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import styles from './CodeSample.module.scss';
import CaretIcon from '../../CaretIcon/CaretIcon';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/jsx';
import 'brace/theme/tomorrow_night_blue';

export interface CodeSampleProps {
  code: string;
  scrollToLine?: number;
  highlightRange?: [number, number];
  mode: string;
  preview?: React.ReactNode;
}

export default function CodeSample(props: CodeSampleProps) {
  const editorRef = useRef(null);
  const markerIdRef = useRef(null);

  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (editorRef.current && props.scrollToLine >= 0) {
      const editor = editorRef.current.editor;
      editor.scrollToLine(props.scrollToLine, true, true, () => {});
      editor.gotoLine(props.scrollToLine + 1, 0, true);
      editor.focus();
    }
  }, [props.scrollToLine]);

  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.editor;
      const session = editor.getSession();

      if (props.highlightRange === undefined) return;
      
      if (markerIdRef.current !== null) {
        session.removeMarker(markerIdRef.current);
        markerIdRef.current = null;
      }

      const [startRow, endRow] = props.highlightRange;
      const _markerId = session.addMarker(
        // @ts-ignore
        new window.ace.Range(startRow, 0, endRow, Infinity),
        'aceSelectedWord',
        'fullLine'
      );

      markerIdRef.current = _markerId;

    }
  }, [props.highlightRange]);

  return (
    <>
      { props.preview ? 
        <div className={styles.previewContainer}>
          <div className={styles.previewToggle} onClick={() => setPreviewOpen(!previewOpen)}>
            <CaretIcon open={previewOpen} />
            Preview
          </div>
          { previewOpen ?
            <div className={styles.previewContent}>
              { props.preview }
            </div>
          : undefined }
        </div>
        : null 
      }
      <AceEditor
        ref={editorRef}
        mode={props.mode}
        className={`${props.preview ? styles.noTopBorder : ''}`}
        theme="tomorrow_night_blue"
        highlightActiveLine={false}
        value={props.code}
        fontSize={14}
        readOnly
        showPrintMargin={false}
        showGutter={false}
        wrapEnabled
        setOptions={{
          useWorker: false,
          minLines: 12
        }}
        width="100%"
      />
    </>
  );
}