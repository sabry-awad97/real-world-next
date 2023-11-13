'use client';

import 'highlight.js/styles/default.css';

import hljs from 'highlight.js';
import { useEffect } from 'react';

interface Props {
  code: string;
}

const Highlight: React.FC<Props> = ({ code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

export default Highlight;
