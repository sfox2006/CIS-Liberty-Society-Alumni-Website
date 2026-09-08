(() => {
  if (window.parent === window) return;
  document.documentElement.classList.add('embedded');
  let parentOrigin = null;
  let previousHeight = 0;
  let pending = false;
  function report() {
    pending = false;
    if (!parentOrigin) return;
    const height = Math.ceil(document.body.getBoundingClientRect().height);
    if (height === previousHeight) return;
    previousHeight = height;
    window.parent.postMessage({ type: 'cis-liberty-height', height }, parentOrigin);
  }
  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(report); }
  }
  window.addEventListener('message', event => {
    if (event.source !== window.parent) return;
    if (!/^https?:\/\//.test(event.origin)) return;
    if (event.data?.type === 'cis-liberty-viewport' && event.origin === parentOrigin) {
      const { top, height } = event.data;
      if (!Number.isFinite(top) || !Number.isFinite(height) || top < 0 || height < 100) return;
      document.documentElement.style.setProperty('--profile-top', (top + 24) + 'px');
      document.documentElement.style.setProperty('--profile-max-height', Math.max(100, height - 48) + 'px');
      return;
    }
    if (event.data?.type !== 'cis-liberty-init') return;
    parentOrigin = event.origin;
    previousHeight = 0;
    schedule();
  });
  new ResizeObserver(schedule).observe(document.body);
  window.addEventListener('load', schedule);
})();
