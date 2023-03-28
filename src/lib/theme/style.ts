// All my global style overrides

const styles = {
  global: {
    '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
    'html, body': {
      fontFamily: 'Menlo,Roboto Mono,monospace',
      fontSize: 14,
      color: 'base',
      backgroundColor: 'body',
      textRendering: 'optimizeLegibility',
      overflowX: 'hidden',
      WebkitTextSizeAdjust: 'none',
    },
    html: { height: '100%' },
  },
};

export default styles;
