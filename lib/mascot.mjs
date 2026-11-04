// Nugget, the guide's mascot: a friendly gold nugget. Flat colors only, so it works on any background.

const INK = '#2A1B05';

const FACES = {
  happy: `
    <circle cx="48" cy="60" r="5.5" fill="${INK}"/><circle cx="74" cy="60" r="5.5" fill="${INK}"/>
    <circle cx="50" cy="58" r="1.8" fill="#fff"/><circle cx="76" cy="58" r="1.8" fill="#fff"/>
    <path d="M52 72 Q61 82 70 72" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" fill="none"/>`,
  worried: `
    <circle cx="48" cy="62" r="5.5" fill="${INK}"/><circle cx="74" cy="62" r="5.5" fill="${INK}"/>
    <circle cx="50" cy="60" r="1.8" fill="#fff"/><circle cx="76" cy="60" r="1.8" fill="#fff"/>
    <path d="M41 50 L54 54 M81 50 L68 54" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <path d="M53 79 Q61 72 69 79" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M97 34 q5 7 0 11 q-5 -4 0 -11z" fill="#4FA3E0"/>`,
  party: `
    <path d="M41 62 Q48 54 55 62 M67 62 Q74 54 81 62" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M50 71 Q61 90 72 71z" fill="${INK}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M50 22 L62 2 L74 22z" fill="#0E8F7E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="62" cy="2" r="3.5" fill="#E4572E"/>
    <circle cx="14" cy="22" r="3" fill="#E4572E"/><circle cx="108" cy="30" r="3" fill="#0E8F7E"/><circle cx="106" cy="86" r="3" fill="#E4572E"/>`,
};

/** mood: happy | worried | party */
export function mascot(mood = 'happy', cls = 'nugget') {
  const face = FACES[mood] || FACES.happy;
  return `<svg class="${cls}" viewBox="0 0 120 120" role="img" aria-label="Nugget the gold nugget, looking ${mood === 'party' ? 'happy and celebrating' : mood}" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="112" rx="30" ry="5" fill="#000" opacity=".12"/>
  <path d="M22 70 C14 50 24 24 48 18 C66 13 92 20 100 42 C108 62 98 92 72 100 C50 106 30 94 22 70Z" fill="#F2B01E" stroke="#8A5A00" stroke-width="4" stroke-linejoin="round"/>
  <path d="M36 38 C42 30 52 27 60 28" stroke="#FFE08A" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M84 84 C90 78 93 70 93 64" stroke="#D18E0C" stroke-width="4" stroke-linecap="round" fill="none"/>
  <ellipse cx="38" cy="72" rx="5.5" ry="3.2" fill="#F08A5D" opacity=".6"/><ellipse cx="84" cy="72" rx="5.5" ry="3.2" fill="#F08A5D" opacity=".6"/>
  ${face}
</svg>`;
}
