import dynamic from 'next/dynamic';
import { CodeSampleProps } from './CodeSample/CodeSample';

//@ts-ignore
const CodeSample = dynamic(() => import('./CodeSample/CodeSample.tsx'), { ssr: false });

export default function CodeSampleWrapper({code, scrollToLine, highlightRange, mode}: CodeSampleProps) {
  return (
    <CodeSample
      // @ts-ignore
      code={code}
      scrollToLine={scrollToLine}
      highlightRange={highlightRange}
      mode={mode}
    />
  );
}