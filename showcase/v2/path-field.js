/* Original 2D path-field animation: a visual echo of the contact-to-request flow.
   Orrin supplies the compositional reference, not this implementation. */
(() => {
  const canvas = document.querySelector('.hero-visual canvas');
  const surface = canvas.parentElement;
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, paused = reduced.matches, visible = true, time = 0, frame = 0, last = 0;
  function resize() {
    width = surface.clientWidth; height = surface.clientHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.4);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }
  function pathPoint(t, line) {
    const x = t * (width + 140) - 70;
    const band = height * .51 + (line - 9) * 8;
    const bend = Math.sin(t * Math.PI * 1.35 + line * .032 + time * .035) * height * .32;
    return { x, y: band + bend * Math.sin(t * Math.PI) };
  }
  function draw() {
    const base = ctx.createLinearGradient(0, 0, width, height);
    base.addColorStop(0, '#18231f'); base.addColorStop(.5, '#263330'); base.addColorStop(1, '#1b2326');
    ctx.fillStyle = base; ctx.fillRect(0, 0, width, height);
    // Each line carries a moving signal towards the next step. No synthetic metrics.
    for (let line = 0; line < 19; line++) {
      ctx.beginPath();
      for (let i = 0; i <= 80; i++) { const p = pathPoint(i/80, line); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }
      ctx.strokeStyle = line % 3 === 0 ? '#c0a78928' : '#b0ccb31c';
      ctx.lineWidth = line % 3 === 0 ? 1 : .6; ctx.stroke();
      const p = pathPoint((time * .023 + line * .079) % 1, line);
      ctx.beginPath(); ctx.arc(p.x, p.y, line % 3 === 0 ? 1.8 : 1, 0, Math.PI * 2);
      ctx.fillStyle = line % 3 === 0 ? '#d3b78c' : '#a8cdb1'; ctx.fill();
    }
    const shade = ctx.createLinearGradient(0,0,0,height);
    shade.addColorStop(0, '#111c1999'); shade.addColorStop(.5,'#111c1900'); shade.addColorStop(1,'#111c19bb');
    ctx.fillStyle = shade; ctx.fillRect(0,0,width,height);
  }
  function tick(now) {
    frame = 0;
    if (paused || !visible || document.hidden) return;
    if (now - last >= 34) { time += Math.min((now - last)/1000,.07); last = now; draw(); }
    frame = requestAnimationFrame(tick);
  }
  function resume() { if (!frame && !paused && visible && !document.hidden) { last = performance.now(); frame = requestAnimationFrame(tick); } }
  window.addEventListener('martin-motion', e => { paused = e.detail.paused; if (paused) { cancelAnimationFrame(frame); frame=0; } else resume(); });
  new ResizeObserver(resize).observe(surface);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) resume(); else { cancelAnimationFrame(frame); frame=0; } }).observe(surface);
  document.addEventListener('visibilitychange', resume);
  resize(); resume();
})();
