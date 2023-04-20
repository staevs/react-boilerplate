const isObtrusiveScroll = (function validateScroll(): boolean {
  if (typeof document !== 'undefined') {
    const container = document.createElement('div');

    container.setAttribute(
      'style',
      'width:30px;height:30px;overflow:auto;position:absolute;'
    );

    const content = document.createElement('div');

    content.setAttribute('style', 'width: 100%;height:40px');
    container.appendChild(content);

    document.body.appendChild(container);
    const isContentHidden = 30 - content.clientWidth > 0;

    document.body.removeChild(container);

    return isContentHidden;
  }

  return false;
})();

export const getScrollbarStyles = () => {
  if (isObtrusiveScroll) {
    return {
      '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
        borderRadius: '10px',
        backgroundColor: 'inherit'
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'var(--chakra-colors-brand-body)'
      },
      scrollbarWidth: 'thin',
      scrollbarColor: 'var(--chakra-colors-brand-body) inherit'
    };
  }

  return {};
};
