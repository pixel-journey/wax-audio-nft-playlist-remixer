import { ATOMIC_ORIGIN, atomicAssets } from "./api";
import { program } from "./play";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const list = program(
  [
    { id: "a", seconds: 90 },
    { id: "b", seconds: 90 },
  ],
  200,
);
if (!list.ok) throw new Error(list.reason);
const ready = list;

export const USE_CASES: UseCase[] = [
  {
    title: "Owned assets are not track lengths",
    detail: `Two tracks total ${ready.total} seconds under a cap of 200. The asset request is not sent.`,
    request: atomicAssets(ATOMIC_ORIGIN, "alice", "pixeljourney"),
    transaction: null,
  },
  {
    title: "Over the cap is a refusal, not a mix",
    detail: "The same 180 seconds over a cap of 100 is refused. Nothing is played and no transfer is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (ready.total !== 180) throw new Error(String(ready.total));
  if (program([{ id: "a", seconds: 90 }, { id: "a", seconds: 10 }], 200).ok) throw new Error("repeat");
}
