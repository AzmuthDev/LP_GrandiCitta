(() => {
  const SETTINGS = {
  "charset": "standard",
  "fontSize": 9,
  "hoverStrength": 15,
  "mouseInteractionMode": "push",
  "mouseAreaSize": 180,
  "mouseSpread": 1.35,
  "charSpacing": 1,
  "renderFont": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
  "outputAspect": "source",
  "contrast": 1,
  "brightness": 0,
  "invert": false,
  "ditherType": "floyd-steinberg",
  "ditherStrength": 0.85,
  "style": "particles",
  "colorMode": "custom",
  "backgroundColor": "#ffffff",
  "customColor": "#323e3a",
  "particleDensity": 0.5,
  "particleChar": "*",
  "letterSet": "alphabet",
  "claudeDensity": 0.7,
  "lineLength": 1,
  "lineWidth": 1,
  "lineThickness": 1.6,
  "lineRotation": 0,
  "overlayPreset": "none",
  "overlayStrength": 0.6,
  "noiseScale": 24,
  "noiseSpeed": 0.5,
  "intervalSpacing": 12,
  "intervalSpeed": 1,
  "intervalWidth": 2,
  "matrixScale": 15,
  "matrixSpeed": 0.1
};
  const EXPORT_OPTIONS = {"enableInteractionEffects":true,"transparentBackground":true,"enableAlphaMask":true,"alphaMaskEnd":85,"enableFadeIn":true,"fadeInDurationMs":900,"pauseWhenOffscreen":true,"adaptivePerformance":true,"maxFps":30,"idleFps":12,"visibilityThreshold":0.01};
  const SOURCE = {
  "type": "image",
  "url": "data:image/jpeg;base64,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"
};
  const IS_TRANSPARENT_BG = Boolean(EXPORT_OPTIONS.transparentBackground);

  const CHARSETS = {"standard":" .:-=+*#%@","blocks":" ░▒▓█","detailed":" .'`^\",:;Il!i><~+_-?][}{1)(|\\\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$","minimal":" ·░█","binary":" 01","braille":" ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"};
  const LETTER_SETS = {"alphabet":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","lowercase":"abcdefghijklmnopqrstuvwxyz","mixed":"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz","symbols":"@#$%&*+=-<>~"};
  const MATRIX_CHARS = " アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const HALFTONE_CHARS = " .,:;irsXA253hMHGS#9B&@";
  const RETRO_CHARS = "o";
  const TERMINAL_CHARS = "1";
  const HOVER_ATTRACT_RADIUS = 180;
  const CLICK_BURST_RADIUS = 340;
  const CLICK_BURST_STRENGTH = 56;
  const CLICK_BURST_DURATION_MS = 640;

  const mount = document.querySelector('[data-ascii-dither-bg]');
  if (!mount) return;

  if (typeof mount.__asciiDitherDestroy === 'function') {
    mount.__asciiDitherDestroy();
  }

  mount.style.position = 'absolute';
  mount.style.inset = '';
  mount.style.top = '0';
  mount.style.left = '0';
  mount.style.right = '0';
  mount.style.bottom = 'auto';
  mount.style.height = '100vh';
  mount.style.zIndex = '0';
  mount.style.pointerEvents = 'none';
  mount.style.overflow = 'hidden';
  mount.style.background = 'transparent';
  const fadeInDurationMs = Math.max(0, Number(EXPORT_OPTIONS.fadeInDurationMs ?? 900) || 900);
  if (EXPORT_OPTIONS.enableFadeIn === true && fadeInDurationMs > 0) {
    mount.style.opacity = '0';
    mount.style.transition = 'opacity ' + fadeInDurationMs + 'ms ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mount.style.opacity = '1';
      });
    });
  } else {
    mount.style.opacity = '1';
    mount.style.removeProperty('transition');
  }

  const parent = mount.parentElement;
  if (parent && window.getComputedStyle(parent).position === 'static') {
    parent.style.position = 'relative';
  }

  const backgroundLayer = document.createElement('div');
  Object.assign(backgroundLayer.style, {
    position: 'absolute',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '0',
    background: IS_TRANSPARENT_BG ? 'transparent' : (SETTINGS.backgroundColor || '#000000')
  });

  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    display: 'block',
    zIndex: '1'
  });
  const legacyAlphaMaskStop = Math.max(0, Math.min(100, Number(EXPORT_OPTIONS.alphaMaskStop ?? 85) || 85));
  const alphaMaskEndRaw = Number(EXPORT_OPTIONS.alphaMaskEnd ?? legacyAlphaMaskStop);
  const alphaMaskEnd = Math.max(0, Math.min(100, Number.isFinite(alphaMaskEndRaw) ? alphaMaskEndRaw : legacyAlphaMaskStop));
  if (EXPORT_OPTIONS.enableAlphaMask !== false) {
    const alphaMaskValue =
      'linear-gradient(to bottom, black 0%, black ' + alphaMaskEnd + '%, transparent 100%)';
    mount.setAttribute('data-alpha-mask', 'bottom-' + alphaMaskEnd);
    canvas.style.setProperty('mask-image', alphaMaskValue);
    canvas.style.setProperty('-webkit-mask-image', alphaMaskValue);
  } else {
    mount.removeAttribute('data-alpha-mask');
    canvas.style.removeProperty('mask-image');
    canvas.style.removeProperty('-webkit-mask-image');
  }

  mount.replaceChildren(backgroundLayer, canvas);

  const ctx = canvas.getContext('2d');
  const sampleCanvas = document.createElement('canvas');
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx || !sampleCtx) throw new Error('Could not create canvas context');

  let source = null;
  let stream = null;
  let rafId = null;
  let intersectionObserver = null;
  let resizeObserver = null;
  let bounds = { left: 0, top: 0, width: 1, height: 1 };
  let viewWidth = 1;
  let viewHeight = 1;
  let pointer = { inside: false, x: 0, y: 0 };
  let clickBursts = [];
  let matrixRainState = { cols: 0, rows: 0, speeds: [], phases: [], lengths: [] };
  let isInViewport = true;
  let isPageVisible = document.visibilityState !== 'hidden';
  let pendingForceRender = false;
  let lastRenderTime = 0;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function applyTone(gray) {
    let value = gray;
    value = (value - 128) * SETTINGS.contrast + 128;
    value += SETTINGS.brightness * 2;
    value = clamp(value, 0, 255);
    if (SETTINGS.invert) value = 255 - value;
    return value;
  }

  function bayerThreshold(x, y) {
    const matrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5]
    ];
    return matrix[y % 4][x % 4] / 16;
  }

  function selectCharset() {
    if (SETTINGS.style === 'letters') return LETTER_SETS[SETTINGS.letterSet] || LETTER_SETS.alphabet;
    if (SETTINGS.style === 'claude') return CHARSETS.blocks;
    if (SETTINGS.style === 'halftone') return HALFTONE_CHARS;
    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') return RETRO_CHARS;
    if (SETTINGS.style === 'terminal') return TERMINAL_CHARS;
    if (SETTINGS.style === 'matrix') return MATRIX_CHARS;
    return CHARSETS[SETTINGS.charset] || CHARSETS.standard;
  }

  function charFromGray(gray, charset, x, y, cols, rows) {
    const normalized = gray / 255;
    if (SETTINGS.style === 'halftone') {
      const dotRamp = HALFTONE_CHARS;
      const screen =
        (Math.sin((x * 0.82 + y * 0.33) * 1.55) + Math.cos((x * 0.27 - y * 0.94) * 1.25) + 2) * 0.25;
      const adjusted = clamp(Math.pow(normalized, 0.9) * 0.8 + screen * 0.2, 0, 1);
      const idx = Math.floor(adjusted * (dotRamp.length - 1));
      return dotRamp[clamp(idx, 0, dotRamp.length - 1)];
    }
    if (SETTINGS.style === 'particles') {
      const density = clamp(SETTINGS.particleDensity ?? 0.5, 0.05, 1);
      const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
      const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
      const center = 1 - clamp(Math.sqrt(nx * nx + ny * ny), 0, 1);
      const centerBias = Math.pow(center, 1.35) * density * 0.42;
      const grain = (Math.sin((x + 1) * 12.9898 + (y + 1) * 78.233) + 1) * 0.5;
      const jitter = (grain - 0.5) * (0.18 - density * 0.08);
      const threshold = clamp(1 - density - centerBias + jitter, 0.02, 0.96);
      return normalized >= threshold ? (SETTINGS.particleChar || '*') : ' ';
    }
    let adjusted = normalized;
    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') {
      adjusted = Math.pow(normalized, 0.78);
      adjusted = Math.round(adjusted * 10) / 10;
    }
    if (SETTINGS.style === 'terminal') adjusted = Math.pow(normalized, 0.82);
    if (SETTINGS.style === 'matrix') adjusted = Math.pow(normalized, 0.7);
    const idx = Math.floor(adjusted * (charset.length - 1));
    return charset[clamp(idx, 0, charset.length - 1)];
  }

  function colorFromMode(r, g, b, gray, x, y, cols, rows) {
    let particleBoost = 0;
    let particleColorGain = 1;
    if (SETTINGS.style === 'particles') {
      const density = clamp(SETTINGS.particleDensity ?? 0.5, 0.05, 1);
      const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
      const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
      const center = 1 - clamp(Math.sqrt(nx * nx + ny * ny), 0, 1);
      const centerGlow = Math.pow(center, 1.4) * density;
      particleBoost = centerGlow * (24 + density * 72);
      particleColorGain = 1 + centerGlow * 0.45;
    }
    const boostedGray = clamp(gray + particleBoost, 0, 255);

    if (SETTINGS.style === 'claude') {
      const intensity = clamp(gray + 36, 0, 255);
      const red = clamp(Math.floor(intensity * 1.03), 0, 255);
      const green = clamp(Math.floor(intensity * 0.5), 0, 255);
      const blue = clamp(Math.floor(intensity * 0.08), 0, 255);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    if (SETTINGS.style === 'retro' || SETTINGS.style === 'winamp') {
      const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
      const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
      const vignette = 1 - clamp(Math.sqrt(nx * nx + ny * ny), 0, 1) * 0.32;
      const grain = Math.sin((x + 1) * 12.9898 + (y + 1) * 78.233);
      const shimmer = Math.sin(x * 0.13 + y * 0.07) * 5;
      const warm = clamp(gray * 1.06 + 14 + shimmer + grain * 4, 0, 255);
      const sepiaBase = warm * vignette;
      const red = clamp(Math.floor(sepiaBase * 1.16 + 12), 0, 255);
      const green = clamp(Math.floor(sepiaBase * 0.94 + 4), 0, 255);
      const blue = clamp(Math.floor(sepiaBase * 0.66), 0, 255);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    if (SETTINGS.style === 'terminal') {
      const phosphor = clamp(gray + 32, 0, 255);
      const scanShade = ((x + y) & 1) === 0 ? 1 : 0.84;
      const green = clamp(Math.floor(phosphor * scanShade), 0, 255);
      const red = clamp(Math.floor(green * 0.12), 0, 72);
      const blue = clamp(Math.floor(green * 0.2), 0, 88);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    if (SETTINGS.colorMode === 'color') {
      const boostedR = clamp(Math.floor(r * particleColorGain + particleBoost * 0.22), 0, 255);
      const boostedG = clamp(Math.floor(g * particleColorGain + particleBoost * 0.28), 0, 255);
      const boostedB = clamp(Math.floor(b * particleColorGain + particleBoost * 0.2), 0, 255);
      return 'rgb(' + boostedR + ', ' + boostedG + ', ' + boostedB + ')';
    }

    if (SETTINGS.colorMode === 'green') {
      const intensity = clamp(boostedGray + 25, 0, 255);
      return 'rgb(' + Math.floor(intensity * 0.2) + ', ' + intensity + ', ' + Math.floor(intensity * 0.3) + ')';
    }

    if (SETTINGS.colorMode === 'amber') {
      const intensity = clamp(boostedGray + 20, 0, 255);
      return 'rgb(' + intensity + ', ' + Math.floor(intensity * 0.7) + ', ' + Math.floor(intensity * 0.15) + ')';
    }

    if (SETTINGS.colorMode === 'custom') {
      const rawColor = typeof SETTINGS.customColor === 'string' ? SETTINGS.customColor.trim() : '';
      const match = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(rawColor);
      const hex = match ? (match[1].length === 3 ? match[1].split('').map((char) => char + char).join('') : match[1]) : 'ffffff';
      const baseR = parseInt(hex.slice(0, 2), 16);
      const baseG = parseInt(hex.slice(2, 4), 16);
      const baseB = parseInt(hex.slice(4, 6), 16);
      const intensity = boostedGray / 255;
      const red = clamp(Math.floor(baseR * intensity), 0, 255);
      const green = clamp(Math.floor(baseG * intensity), 0, 255);
      const blue = clamp(Math.floor(baseB * intensity), 0, 255);
      return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    return 'rgb(' + boostedGray + ', ' + boostedGray + ', ' + boostedGray + ')';
  }

  function applyOverlayFx(gray, x, y, cols, rows, timeSeconds) {
    const preset = SETTINGS.overlayPreset || 'none';
    const strength = clamp(SETTINGS.overlayStrength ?? 0.4, 0, 1);
    if (preset === 'none' || strength <= 0) return gray;

    if (preset === 'noise') {
      const scale = clamp(SETTINGS.noiseScale ?? 24, 4, 120);
      const speed = clamp(SETTINGS.noiseSpeed ?? 1, 0, 4);
      const phase = timeSeconds * speed * 2.4;
      const coherent = Math.sin((x + 17.3) / scale + phase) * Math.cos((y - 9.7) / scale - phase * 0.73);
      const grain = Math.sin(x * 1.37 + y * 2.11 + phase * 6.2);
      const amount = 16 + strength * 72;
      return clamp(gray + (coherent * 0.65 + grain * 0.35) * amount, 0, 255);
    }

    if (preset === 'intervals' || preset === 'lines') {
      const spacing = clamp(SETTINGS.intervalSpacing ?? 12, 4, 64);
      const speed = clamp(SETTINGS.intervalSpeed ?? 1, 0, 4);
      const width = clamp(SETTINGS.intervalWidth ?? 2, 1, 8);
      const offset = (timeSeconds * speed * spacing * 1.7) % spacing;
      const phase = (y + offset) % spacing;
      const distance = Math.min(phase, spacing - phase);
      const lineMask = 1 - clamp(distance / width, 0, 1);
      const wave = Math.sin((y / spacing) * Math.PI * 2 + timeSeconds * speed * 1.8 + (x / cols) * 1.1);
      const amount = strength * 88;
      return clamp(gray + lineMask * amount * 0.85 + wave * amount * 0.32, 0, 255);
    }

    if (preset === 'beam') {
      const speed = 0.45 + strength * 2.2;
      const width = 0.08 + strength * 0.22;
      const center = (timeSeconds * speed) % 1.2 - 0.1;
      const normalizedX = x / Math.max(cols, 1);
      const distance = Math.abs(normalizedX - center);
      const beam = Math.max(0, 1 - distance / width);
      return clamp(gray + beam * (34 + strength * 120), 0, 255);
    }

    if (preset === 'glitch') {
      const xNorm = x / Math.max(cols - 1, 1);
      const laneHeight = 2 + Math.floor((1 - strength) * 3);
      const lane = Math.floor(y / laneHeight);
      const windowTick = Math.floor(timeSeconds * (0.75 + strength * 1.35));
      const laneChance = (Math.sin((lane + 1) * 19.73 + windowTick * 7.11) + 1) * 0.5;
      const laneActive = laneChance > 0.74 ? 1 : 0;
      const laneSpeed =
        0.12 + ((Math.sin((lane + 1) * 6.37) + 1) * 0.5) * (0.22 + strength * 0.34);
      const lanePhase = (Math.sin((lane + 1) * 2.91) + 1) * 0.5;
      const head = (timeSeconds * laneSpeed + lanePhase) % 1;
      const trailLength = 0.12 + strength * 0.28;
      const distanceAcross = (xNorm - head + 1) % 1;
      const trail = Math.max(0, 1 - distanceAcross / trailLength);
      const scanPulse = Math.max(
        0,
        Math.sin(distanceAcross * Math.PI * (5 + strength * 8) - timeSeconds * (2 + strength * 5))
      );
      const rowGlow = laneActive * (trail * (18 + strength * 86) + scanPulse * (6 + strength * 26));
      const syncTear =
        laneActive *
        Math.sin(xNorm * Math.PI * 2 * (2 + strength * 4) - timeSeconds * (1.4 + strength * 2.2)) *
        (3 + strength * 14);
      const staticNoise = Math.sin((x + 1) * 17.7 + (y + 1) * 29.3 + timeSeconds * 9.1) * (1.5 + strength * 4.5);
      return clamp(gray + rowGlow + syncTear + staticNoise, 0, 255);
    }

    if (preset === 'crt') {
      const nx = (x / Math.max(cols - 1, 1)) * 2 - 1;
      const ny = (y / Math.max(rows - 1, 1)) * 2 - 1;
      const radial = nx * nx * 0.84 + ny * ny * 1.12;
      const curvature = 1 - clamp(radial, 0, 1);
      const edgeFalloff = (1 - curvature) * (24 + strength * 116);
      const scanline = Math.sin((y + timeSeconds * (34 + strength * 24)) * Math.PI);
      const triad = Math.sin((x + timeSeconds * 8.5) * 2.9);
      const flicker = Math.sin(timeSeconds * 61) * 0.55 + Math.sin(timeSeconds * 23) * 0.45;
      const yNorm = y / Math.max(rows - 1, 1);
      const rollCenter = (timeSeconds * (0.12 + strength * 0.24)) % 1;
      const rollDistance = Math.abs(yNorm - rollCenter);
      const rollGlow = Math.max(0, 1 - rollDistance / (0.045 + strength * 0.08));
      const laneToken = Math.sin((x + 1) * 14.37 + Math.floor(timeSeconds * 12) * 1.91);
      const laneActive = laneToken > 0.72 ? 1 : 0;
      const streakHead = (timeSeconds * (0.55 + strength * 1.35) + x * 0.037) % 1;
      const streakDistance = Math.abs(yNorm - streakHead);
      const streakCore = Math.max(0, 1 - streakDistance / (0.014 + strength * 0.03));
      const streakTicks = Math.max(
        0,
        Math.sin(yNorm * 170 - timeSeconds * (28 + strength * 58) + x * 2.4)
      );
      const glitchStreak = laneActive * (streakCore * (8 + strength * 34) + streakTicks * (2 + strength * 10));
      const overdrive = Math.pow(gray / 255, 1.35) * (22 + strength * 72);
      const crush = Math.pow(1 - gray / 255, 1.2) * (8 + strength * 24);
      const boost =
        scanline * (14 + strength * 36) +
        triad * (6 + strength * 14) +
        flicker * (5 + strength * 14) +
        rollGlow * (18 + strength * 64) +
        glitchStreak +
        overdrive -
        crush;
      return clamp(gray + boost - edgeFalloff, 0, 255);
    }

    return gray;
  }

  function drawError(message) {
    ctx.clearRect(0, 0, viewWidth, viewHeight);
    ctx.fillStyle = '#fca5a5';
    ctx.font = '16px ' + (SETTINGS.renderFont || 'Helvetica, Arial, sans-serif');
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(message, viewWidth / 2, viewHeight / 2);
  }

  function readBounds() {
    const rect = mount.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width || mount.clientWidth || window.innerWidth || 1));
    const height = Math.max(1, Math.round(rect.height || mount.clientHeight || window.innerHeight || 1));
    return {
      left: rect.left,
      top: rect.top,
      width,
      height,
      right: rect.left + width,
      bottom: rect.top + height
    };
  }

  function resize() {
    bounds = readBounds();
    viewWidth = bounds.width;
    viewHeight = bounds.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(viewWidth * dpr));
    canvas.height = Math.max(1, Math.round(viewHeight * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function getSourceSize(element) {
    return {
      width: element.videoWidth || element.naturalWidth || 0,
      height: element.videoHeight || element.naturalHeight || 0
    };
  }

  function proceduralField(x, y, cols, rows, timeSeconds) {
    const nx = cols > 1 ? (x / (cols - 1)) * 2 - 1 : 0;
    const ny = rows > 1 ? (y / (rows - 1)) * 2 - 1 : 0;
    const scale = clamp(SOURCE.proceduralScale ?? 1, 0.45, 2.4);
    const speed = clamp(SOURCE.proceduralSpeed ?? 1, 0.2, 3.5);
    const t = timeSeconds * speed;
    const radius = Math.sqrt(nx * nx + ny * ny);
    const angle = Math.atan2(ny, nx);
    const flow = Math.sin((nx * 3.6 + t * 1.2) * scale);
    const drift = Math.cos((ny * 4.8 - t * 0.9) * scale);
    const ring = Math.sin((radius * 13.5 - t * 2.35 + angle * 2.6) * scale);
    const grain = Math.sin((nx * 18.7 + ny * 11.3 + t * 4.7) * scale);
    return clamp((flow * 0.33 + drift * 0.26 + ring * 0.31 + grain * 0.1 + 1) * 0.5, 0, 1);
  }

  function isActiveForRendering() {
    const requiresInView = EXPORT_OPTIONS.pauseWhenOffscreen !== false;
    return isPageVisible && (!requiresInView || isInViewport);
  }

  function isPlayableVideoSource(value) {
    return Boolean(value && typeof value.play === 'function' && typeof value.pause === 'function');
  }

  function syncSourcePlayback(shouldRun) {
    if (!source || source.kind === 'procedural' || SOURCE.type === 'image') return;
    if (!isPlayableVideoSource(source)) return;
    if (SOURCE.type === 'camera' && stream) {
      const tracks = typeof stream.getVideoTracks === 'function' ? stream.getVideoTracks() : stream.getTracks();
      tracks.forEach((track) => {
        track.enabled = shouldRun;
      });
    }
    if (shouldRun) {
      source.play().catch(() => {});
      return;
    }
    source.pause();
  }

  function requiresContinuousRendering(interactionEnabled = Boolean(EXPORT_OPTIONS.enableInteractionEffects)) {
    return SOURCE.type !== 'image' || SETTINGS.overlayPreset !== 'none' || (interactionEnabled && (pointer.inside || clickBursts.length > 0));
  }

  function getTargetFps(interactionEnabled) {
    const maxFps = clamp(Number(EXPORT_OPTIONS.maxFps ?? 30) || 30, 6, 60);
    if (EXPORT_OPTIONS.adaptivePerformance === false) return maxFps;
    const idleFps = clamp(Number(EXPORT_OPTIONS.idleFps ?? 12) || 12, 1, maxFps);
    const isInteractive = interactionEnabled && (pointer.inside || clickBursts.length > 0);
    return isInteractive ? maxFps : idleFps;
  }

  function handleRenderActivityChange(forceNextFrame = false) {
    if (!isActiveForRendering()) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      pendingForceRender = false;
      pointer = { ...pointer, inside: false };
      if (clickBursts.length) clickBursts = [];
      syncSourcePlayback(false);
      return;
    }

    syncSourcePlayback(true);
    if (forceNextFrame) {
      scheduleRender(true);
      return;
    }
    if (requiresContinuousRendering()) {
      scheduleRender();
    }
  }

  function handleDocumentVisibilityChange() {
    const nextVisible = document.visibilityState !== 'hidden';
    if (nextVisible === isPageVisible) return;
    isPageVisible = nextVisible;
    handleRenderActivityChange(nextVisible);
  }

  function handleIntersection(entries) {
    const entry = entries && entries[0];
    if (!entry) return;
    const nextInViewport = entry.isIntersecting && entry.intersectionRatio > 0;
    if (nextInViewport === isInViewport) return;
    isInViewport = nextInViewport;
    handleRenderActivityChange(nextInViewport);
  }

  function handleWindowResize() {
    resize();
    scheduleRender(true);
  }

  function scheduleRender(force = false) {
    if (force) pendingForceRender = true;
    if (!isActiveForRendering()) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      return;
    }
    if (!rafId) rafId = requestAnimationFrame(renderFrame);
  }

  function toCanvasPoint(event) {
    const nextBounds = bounds.width > 0 && bounds.height > 0 ? bounds : readBounds();
    const inside =
      event.clientX >= nextBounds.left &&
      event.clientX <= nextBounds.right &&
      event.clientY >= nextBounds.top &&
      event.clientY <= nextBounds.bottom;
    if (!inside) return null;
    const x = ((event.clientX - nextBounds.left) / Math.max(nextBounds.width, 1)) * viewWidth;
    const y = ((event.clientY - nextBounds.top) / Math.max(nextBounds.height, 1)) * viewHeight;
    return { x: clamp(x, 0, viewWidth), y: clamp(y, 0, viewHeight) };
  }

  function handleWindowPointerMove(event) {
    const point = toCanvasPoint(event);
    if (!point) {
      if (pointer.inside) {
        pointer = { ...pointer, inside: false };
        scheduleRender();
      }
      return;
    }
    pointer = { inside: true, x: point.x, y: point.y };
    scheduleRender();
  }

  function handleWindowPointerDown(event) {
    const point = toCanvasPoint(event);
    if (!point) return;
    pointer = { inside: true, x: point.x, y: point.y };
    clickBursts = [
      ...clickBursts.slice(-2),
      { x: point.x, y: point.y, startedAt: performance.now(), seed: Math.random() * Math.PI * 2 }
    ];
    scheduleRender();
  }

  function handleWindowBlur() {
    if (!pointer.inside) return;
    pointer = { ...pointer, inside: false };
    scheduleRender();
  }

  async function loadSource() {
    if (SOURCE.type === 'procedural') {
      return { kind: 'procedural' };
    }

    if (SOURCE.type === 'camera') {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.muted = true;
      video.playsInline = true;
      await video.play();
      return video;
    }

    if (SOURCE.type === 'video') {
      const video = document.createElement('video');
      video.src = SOURCE.url;
      video.crossOrigin = 'anonymous';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      await new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = reject;
      });
      await video.play();
      return video;
    }

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = SOURCE.url;
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    return image;
  }

  function renderFrame(now) {
    rafId = null;
    if (!source) return;
    if (!isActiveForRendering()) {
      syncSourcePlayback(false);
      return;
    }
    const interactionEnabled = Boolean(EXPORT_OPTIONS.enableInteractionEffects);
    if (interactionEnabled) {
      clickBursts = clickBursts.filter((burst) => now - burst.startedAt < CLICK_BURST_DURATION_MS);
    } else if (clickBursts.length) {
      clickBursts = [];
    }
    const forceRender = pendingForceRender;
    pendingForceRender = false;
    const targetFps = getTargetFps(interactionEnabled);
    const minFrameInterval = 1000 / Math.max(1, targetFps);
    if (!forceRender && lastRenderTime > 0 && now - lastRenderTime < minFrameInterval) {
      scheduleRender();
      return;
    }
    lastRenderTime = now;
    const proceduralMode = source.kind === 'procedural';

    const fontSize = clamp(SETTINGS.fontSize || 10, 6, 24);
    const spacing = clamp(SETTINGS.charSpacing ?? 1, 0.7, 2);
    const renderFont = SETTINGS.renderFont || 'Helvetica, Arial, sans-serif';
    const fontDeclaration = fontSize + 'px ' + renderFont;
    ctx.font = fontDeclaration;
    const measuredCharWidth = ctx.measureText('M').width;
    const charWidth = Math.max(fontSize * 0.45, measuredCharWidth || fontSize * 0.62);
    const cellWidth = charWidth * spacing;
    const cellHeight = fontSize * spacing;
    const cols = Math.max(24, Math.floor(viewWidth / cellWidth));
    const rows = Math.max(12, Math.floor(viewHeight / cellHeight));
    const charset = selectCharset();
    const timeSeconds = now * 0.001;
    const grayscale = new Float32Array(cols * rows);
    let data;

    sampleCanvas.width = cols;
    sampleCanvas.height = rows;

    if (proceduralMode) {
      const proceduralPreset = SOURCE.proceduralPreset || 'flow';
      const proceduralPixels = new Uint8ClampedArray(cols * rows * 4);
      data = proceduralPixels;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const offset = idx * 4;
          const field = proceduralField(x, y, cols, rows, timeSeconds);
          const pulse = 0.5 + 0.5 * Math.sin(timeSeconds * 1.8 + x * 0.06 - y * 0.04);
          const mixed = clamp(field * 0.78 + pulse * 0.22, 0, 1);
          const baseGray = Math.floor(mixed * 255);

          let r = baseGray;
          let g = baseGray;
          let b = baseGray;

          if (proceduralPreset === 'plasma') {
            r = clamp(Math.floor(baseGray * 0.72 + 92 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.1 + y * 0.09))), 0, 255);
            g = clamp(Math.floor(baseGray * 0.48 + 74 * (0.5 + 0.5 * Math.cos(timeSeconds * 1.6 + x * 0.07))), 0, 255);
            b = clamp(Math.floor(baseGray * 0.84 + 102 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.35 + (x + y) * 0.05))), 0, 255);
          } else if (proceduralPreset === 'mono') {
            const mono = clamp(Math.floor(baseGray * 1.08), 0, 255);
            r = mono;
            g = mono;
            b = mono;
          } else {
            r = clamp(Math.floor(baseGray * 0.64 + 86 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.2 + x * 0.11))), 0, 255);
            g = clamp(Math.floor(baseGray * 0.82 + 64 * (0.5 + 0.5 * Math.sin(timeSeconds * 1.45 + y * 0.08))), 0, 255);
            b = clamp(Math.floor(baseGray * 0.58 + 74 * (0.5 + 0.5 * Math.cos(timeSeconds * 1.05 + (x - y) * 0.07))), 0, 255);
          }

          proceduralPixels[offset] = r;
          proceduralPixels[offset + 1] = g;
          proceduralPixels[offset + 2] = b;
          proceduralPixels[offset + 3] = 255;

          const toned = applyTone(baseGray);
          grayscale[idx] = applyOverlayFx(toned, x, y, cols, rows, timeSeconds);
        }
      }
    } else {
      const sourceSize = getSourceSize(source);
      if (!sourceSize.width || !sourceSize.height) {
        scheduleRender();
        return;
      }

      const targetAspect = viewWidth / Math.max(viewHeight, 1);
      const sourceAspect = sourceSize.width / sourceSize.height;
      let cropX = 0;
      let cropY = 0;
      let cropWidth = sourceSize.width;
      let cropHeight = sourceSize.height;

      if (sourceAspect > targetAspect) {
        cropWidth = sourceSize.height * targetAspect;
        cropX = (sourceSize.width - cropWidth) * 0.5;
      } else if (sourceAspect < targetAspect) {
        cropHeight = sourceSize.width / targetAspect;
        cropY = (sourceSize.height - cropHeight) * 0.5;
      }

      sampleCtx.drawImage(source, cropX, cropY, cropWidth, cropHeight, 0, 0, cols, rows);
      const pixels = sampleCtx.getImageData(0, 0, cols, rows);
      data = pixels.data;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const offset = idx * 4;
          const r = data[offset];
          const g = data[offset + 1];
          const b = data[offset + 2];
          const baseGray = 0.299 * r + 0.587 * g + 0.114 * b;
          const toned = applyTone(baseGray);
          grayscale[idx] = applyOverlayFx(toned, x, y, cols, rows, timeSeconds);
        }
      }
    }

    if (SETTINGS.ditherType === 'bayer') {
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const threshold = bayerThreshold(x, y);
          const offset = (threshold - 0.5) * 255 * SETTINGS.ditherStrength;
          grayscale[idx] = clamp(grayscale[idx] + offset, 0, 255);
        }
      }
    }

    if (SETTINGS.ditherType === 'floyd-steinberg' || SETTINGS.ditherType === 'atkinson') {
      const work = new Float32Array(grayscale);
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const idx = y * cols + x;
          const oldValue = work[idx];
          const step = 255 / Math.max(2, charset.length - 1);
          const newValue = Math.round(oldValue / step) * step;
          const error = (oldValue - newValue) * SETTINGS.ditherStrength;
          work[idx] = clamp(newValue, 0, 255);

          if (SETTINGS.ditherType === 'floyd-steinberg') {
            if (x + 1 < cols) work[idx + 1] += (error * 7) / 16;
            if (x - 1 >= 0 && y + 1 < rows) work[idx + cols - 1] += (error * 3) / 16;
            if (y + 1 < rows) work[idx + cols] += (error * 5) / 16;
            if (x + 1 < cols && y + 1 < rows) work[idx + cols + 1] += error / 16;
          } else {
            if (x + 1 < cols) work[idx + 1] += error / 8;
            if (x + 2 < cols) work[idx + 2] += error / 8;
            if (x - 1 >= 0 && y + 1 < rows) work[idx + cols - 1] += error / 8;
            if (y + 1 < rows) work[idx + cols] += error / 8;
            if (x + 1 < cols && y + 1 < rows) work[idx + cols + 1] += error / 8;
            if (y + 2 < rows) work[idx + cols * 2] += error / 8;
          }
        }
      }
      for (let i = 0; i < grayscale.length; i += 1) {
        grayscale[i] = clamp(work[i], 0, 255);
      }
    }

    ctx.clearRect(0, 0, viewWidth, viewHeight);
    ctx.font = fontDeclaration;
    ctx.textBaseline = 'top';
    const hoverAttractStrength = clamp(SETTINGS.hoverStrength ?? 24, 4, 64);
    const hoverAreaSize = clamp(SETTINGS.mouseAreaSize ?? HOVER_ATTRACT_RADIUS, 40, 640);
    const hoverSpread = clamp(SETTINGS.mouseSpread ?? 1, 0.25, 3);
    const hoverDirection = SETTINGS.mouseInteractionMode === 'push' ? -1 : 1;
    const hasPointerAttraction = interactionEnabled && pointer.inside;
    const hasBurst = interactionEnabled && clickBursts.length > 0;
    const matrixMode = SETTINGS.overlayPreset === 'matrix';
    const matrixStrength = clamp(SETTINGS.overlayStrength ?? 0.45, 0, 1);
    let matrixBoost = null;

    if (matrixMode) {
      const matrixScale = clamp(SETTINGS.matrixScale ?? 15, 6, 48);
      const matrixSpeed = clamp(SETTINGS.matrixSpeed ?? 0.1, 0.1, 4);
      const columnScale = clamp(matrixScale / 12, 0.6, 4);
      const rainCols = Math.max(6, Math.ceil(cols / columnScale));
      if (
        matrixRainState.cols !== rainCols ||
        matrixRainState.rows !== rows ||
        matrixRainState.speeds.length !== rainCols
      ) {
        matrixRainState = {
          cols: rainCols,
          rows,
          speeds: Array.from({ length: rainCols }, () => 0.55 + Math.random() * 1.85),
          phases: Array.from({ length: rainCols }, () => Math.random() * (rows + 36)),
          lengths: Array.from({ length: rainCols }, () =>
            Math.max(7, Math.round(rows * (0.2 + Math.random() * 0.38)))
          ),
        };
      }

      matrixBoost = new Float32Array(cols * rows);
      for (let x = 0; x < cols; x += 1) {
        const lane = Math.min(rainCols - 1, Math.floor(x / columnScale));
        const trailLength = matrixRainState.lengths[lane];
        const cycle = rows + trailLength + 12;
        const head =
          ((timeSeconds * matrixRainState.speeds[lane] * matrixSpeed * rows +
            matrixRainState.phases[lane]) %
            cycle) -
          trailLength;

        for (let y = 0; y < rows; y += 1) {
          const distance = head - y;
          if (distance < 0 || distance > trailLength) continue;
          const falloff = 1 - distance / (trailLength + 1);
          const idx = y * cols + x;
          matrixBoost[idx] = falloff * (44 + matrixStrength * 148 + falloff * (62 + matrixStrength * 30));
        }

        if (Math.random() < 0.0032) {
          matrixRainState.speeds[lane] = 0.55 + Math.random() * 1.85;
          matrixRainState.phases[lane] = Math.random() * (rows + 36);
          matrixRainState.lengths[lane] = Math.max(7, Math.round(rows * (0.2 + Math.random() * 0.38)));
        }
      }
    }

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const idx = y * cols + x;
        const pixelOffset = idx * 4;
        const gray = Math.round(grayscale[idx]);
        const r = data[pixelOffset];
        const g = data[pixelOffset + 1];
        const b = data[pixelOffset + 2];
        ctx.fillStyle = colorFromMode(r, g, b, gray, x, y, cols, rows);
        let drawX = x * cellWidth;
        let drawY = y * cellHeight;
        let centerX = drawX + cellWidth * 0.5;
        let centerY = drawY + cellHeight * 0.5;

        if (hasPointerAttraction || hasBurst) {
          let offsetX = 0;
          let offsetY = 0;

          if (hasPointerAttraction) {
            const dx = pointer.x - centerX;
            const dy = pointer.y - centerY;
            const distance = Math.hypot(dx, dy);
            if (distance > 0.0001 && distance < hoverAreaSize) {
              const falloff = 1 - distance / hoverAreaSize;
              const spreadFactor = Math.pow(falloff, 1 / hoverSpread);
              const pull = spreadFactor * spreadFactor * hoverAttractStrength * hoverDirection;
              offsetX += (dx / distance) * pull;
              offsetY += (dy / distance) * pull;
            }
          }

          if (hasBurst) {
            for (let burstIndex = 0; burstIndex < clickBursts.length; burstIndex += 1) {
              const burst = clickBursts[burstIndex];
              const age = now - burst.startedAt;
              if (age >= CLICK_BURST_DURATION_MS) continue;
              const progress = clamp(age / CLICK_BURST_DURATION_MS, 0, 1);
              const dx = centerX - burst.x;
              const dy = centerY - burst.y;
              const distance = Math.hypot(dx, dy);
              if (distance >= CLICK_BURST_RADIUS) continue;
              const falloff = 1 - distance / CLICK_BURST_RADIUS;
              const impulse =
                CLICK_BURST_STRENGTH *
                falloff *
                (1 - progress * 0.55) *
                (1.25 + Math.sin(progress * Math.PI) * 0.45);
              let dirX = 1;
              let dirY = 0;
              if (distance > 0.0001) {
                dirX = dx / distance;
                dirY = dy / distance;
              } else {
                const angle = (idx + burst.seed) * 0.61803398875;
                dirX = Math.cos(angle);
                dirY = Math.sin(angle);
              }
              offsetX += dirX * impulse;
              offsetY += dirY * impulse;
            }
          }

          drawX += offsetX;
          drawY += offsetY;
          centerX += offsetX;
          centerY += offsetY;
        }

        if (matrixMode) {
          const boost = matrixBoost ? matrixBoost[idx] : 0;
          const ambient = 6 + matrixStrength * 14;
          const baseContrast = clamp((gray - 128) * (1.2 + matrixStrength * 0.55) + 128, 0, 255);
          const composedGray = clamp(Math.round(baseContrast * 0.38 + boost * 0.78 + ambient), 0, 255);
          if (composedGray < 20) continue;

          const glyphClock = timeSeconds * (10 + clamp(SETTINGS.matrixSpeed ?? 0.1, 0.1, 4) * 16);
          const drift =
            Math.sin((x + 1) * 2.17 + glyphClock * 1.7) +
            Math.cos((y + 1) * 1.93 - glyphClock * 1.1);
          const scramble = Math.sin((x + 1) * 91.13 + (y + 1) * 37.77 + glyphClock * 5.3 + boost * 0.06);
          const noise = drift * 0.28 + scramble * 0.72;
          let mapped = Math.floor(clamp((noise + 2) / 4, 0, 1) * (MATRIX_CHARS.length - 1));
          const jumpToken = Math.sin((Math.floor(glyphClock * 2.6) + x * 13 + y * 7) * 12.9898);
          if (jumpToken > 0.93) {
            mapped = 1 + ((Math.floor(glyphClock * 11) + x * 3 + y * 5) % (MATRIX_CHARS.length - 1));
          }
          const char = MATRIX_CHARS[clamp(mapped, 1, MATRIX_CHARS.length - 1)];
          if (char === ' ') continue;

          const isHead = boost > 182;
          const glowAlpha = clamp(0.08 + composedGray / 620 + (isHead ? 0.12 : 0), 0, 0.56);
          const glowGreen = clamp(Math.floor(72 + composedGray * 0.58), 0, 255);
          const glowRed = clamp(Math.floor(glowGreen * 0.24), 0, 160);
          const glowBlue = clamp(Math.floor(glowGreen * 0.34), 0, 180);
          ctx.fillStyle = 'rgb(' + glowRed + ', ' + glowGreen + ', ' + glowBlue + ')';
          ctx.shadowColor = 'rgba(' + glowRed + ', ' + glowGreen + ', ' + glowBlue + ', ' + glowAlpha + ')';
          ctx.shadowBlur = isHead ? Math.max(3, fontSize * 0.75) : Math.max(1.5, fontSize * 0.32);
          ctx.fillText(char, drawX, drawY);
          ctx.shadowBlur = 0;
          continue;
        }

        if (SETTINGS.style === 'halftone') {
          const normalized = gray / 255;
          const screen =
            (Math.sin((x * 0.82 + y * 0.33) * 1.55) + Math.cos((x * 0.27 - y * 0.94) * 1.25) + 2) * 0.25;
          const dotLevel = clamp(Math.pow(normalized, 0.92) * 0.82 + screen * 0.18, 0, 1);
          const maxRadius = Math.max(0.1, Math.min(cellWidth, cellHeight) * 0.5);
          const radius = maxRadius * dotLevel;
          if (radius < 0.35) continue;

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fill();
          continue;
        }

        if (SETTINGS.style === 'line') {
          const normalized = gray / 255;
          const lengthScale = clamp(SETTINGS.lineLength ?? 1, 0.1, 2.5);
          const widthScale = clamp(SETTINGS.lineWidth ?? 1, 0.2, 2.5);
          const thicknessSetting = clamp(SETTINGS.lineThickness ?? 1.6, 0.2, 8);
          const rotationDeg = SETTINGS.lineRotation ?? 0;
          const screen =
            (Math.sin((x * 0.79 + y * 0.41) * 1.37) + Math.cos((x * 0.33 - y * 0.93) * 1.09) + 2) * 0.25;
          const angle = (rotationDeg * Math.PI) / 180 + (screen - 0.5) * 0.55;
          const spanBase = Math.max(0.8, Math.min(cellWidth, cellHeight) * widthScale);
          const span = spanBase * clamp(normalized * lengthScale, 0.05, 1.5);
          if (span < 0.6) continue;
          const half = span * 0.5;
          const x0 = centerX - Math.cos(angle) * half;
          const y0 = centerY - Math.sin(angle) * half;
          const x1 = centerX + Math.cos(angle) * half;
          const y1 = centerY + Math.sin(angle) * half;
          const thicknessPx = clamp(thicknessSetting, 0.2, Math.max(0.2, Math.min(cellWidth, cellHeight) * 1.4));
          ctx.strokeStyle = colorFromMode(r, g, b, gray, x, y, cols, rows);
          ctx.lineWidth = thicknessPx;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.stroke();
          continue;
        }

        const char = charFromGray(gray, charset, x, y, cols, rows);
        if (char === ' ') continue;
        ctx.fillText(char, drawX, drawY);
      }
    }

    if (requiresContinuousRendering(interactionEnabled)) {
      scheduleRender();
    }
  }

  async function start() {
    resize();
    document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
    window.addEventListener('resize', handleWindowResize);
    if (typeof IntersectionObserver === 'function') {
      const visibilityThreshold = clamp(Number(EXPORT_OPTIONS.visibilityThreshold ?? 0.01) || 0.01, 0, 1);
      intersectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: [0, visibilityThreshold, 0.25],
      });
      intersectionObserver.observe(mount);
    }
    if (typeof ResizeObserver === 'function') {
      resizeObserver = new ResizeObserver(() => {
        resize();
        scheduleRender(true);
      });
      resizeObserver.observe(mount);
    }
    if (EXPORT_OPTIONS.enableInteractionEffects) {
      window.addEventListener('pointermove', handleWindowPointerMove, { passive: true });
      window.addEventListener('pointerdown', handleWindowPointerDown, { passive: true });
      window.addEventListener('blur', handleWindowBlur);
    }
    source = await loadSource();
    handleRenderActivityChange(true);
  }

  start().catch((error) => {
    drawError('Export source failed: ' + (error && error.message ? error.message : 'Unknown error'));
  });

  window.__asciiDitherExportDestroy = function() {
    if (rafId) cancelAnimationFrame(rafId);
    if (stream) stream.getTracks().forEach((track) => track.stop());
    document.removeEventListener('visibilitychange', handleDocumentVisibilityChange);
    window.removeEventListener('resize', handleWindowResize);
    if (intersectionObserver) intersectionObserver.disconnect();
    if (resizeObserver) resizeObserver.disconnect();
    window.removeEventListener('pointermove', handleWindowPointerMove);
    window.removeEventListener('pointerdown', handleWindowPointerDown);
    window.removeEventListener('blur', handleWindowBlur);
    mount.replaceChildren();
    delete mount.__asciiDitherDestroy;
  };
  mount.__asciiDitherDestroy = window.__asciiDitherExportDestroy;
})();
