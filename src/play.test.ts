import { describe, expect, it } from "vitest";
import { program } from "./play";

describe("playlist cap", () => {
  it("sums unique tracks and refuses the cap", () => {
    expect(program([{ id: "a", seconds: 90 }, { id: "b", seconds: 90 }], 200)).toEqual({ ok: true, total: 180 });
    expect(program([{ id: "a", seconds: 90 }, { id: "b", seconds: 10 }], 100)).toEqual({ ok: true, total: 100 });
    expect(program([{ id: "a", seconds: 90 }, { id: "b", seconds: 90 }], 100).ok).toBe(false);
    expect(program([{ id: "a", seconds: 90 }, { id: "a", seconds: 90 }], 200).ok).toBe(false);
  });
});
