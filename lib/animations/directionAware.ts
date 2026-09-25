export function getDirectionalClipPath(dir: 'ltr' | 'rtl'): string {
  return dir === 'rtl' ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
}

export function getDirectionalTransformX(dir: 'ltr' | 'rtl', distance: number = 50): number {
  return dir === 'rtl' ? distance : -distance;
}
