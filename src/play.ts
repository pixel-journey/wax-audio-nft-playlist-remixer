/**
 * A playlist under a time cap. Nothing is played.
 */

export type Track = { id: string; seconds: number };

const ID = /^[a-z0-9-]{1,32}$/;

export function program(tracks: readonly Track[], capSec: number): { ok: false; reason: string } | { ok: true; total: number } {
  if (!Number.isInteger(capSec) || capSec < 1 || capSec > 7_200) return { ok: false, reason: "capSec must be an integer from 1 to 7200" };
  if (tracks.length < 1 || tracks.length > 12) return { ok: false, reason: "pass 1 to 12 tracks" };
  const seen = new Set<string>();
  let total = 0;
  for (const track of tracks) {
    if (!ID.test(track.id)) return { ok: false, reason: `${track.id} is not a track id` };
    if (seen.has(track.id)) return { ok: false, reason: `${track.id} is repeated` };
    if (!Number.isInteger(track.seconds) || track.seconds < 1 || track.seconds > 600) return { ok: false, reason: "each track must be 1 to 600 seconds" };
    seen.add(track.id);
    total += track.seconds;
  }
  if (total > capSec) return { ok: false, reason: `${total} seconds is over the cap of ${capSec}` };
  return { ok: true, total };
}
