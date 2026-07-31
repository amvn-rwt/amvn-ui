/**
 * UI sound registry — paths map to files in /public/audio.
 *
 * themeOn  → switching to light
 * themeOff → switching to dark
 */
export const sounds = {
  themeOn: "/audio/theme-on.mp3",
  themeOff: "/audio/theme-off.mp3",
} as const;

export type SoundName = keyof typeof sounds;

export function playSound(name: SoundName) {
  if (typeof window === "undefined") return;

  const audio = new Audio(sounds[name]);
  void audio.play().catch(() => {
    // Autoplay may be blocked before a gesture; ignore.
  });
}
