import dynamic from 'next/dynamic';

const Highlight = dynamic(() => import('./Highlight'), { ssr: false });

const HighlightPage = () => {
  return <Highlight code="const x = 1;" />;
};

export default HighlightPage;
