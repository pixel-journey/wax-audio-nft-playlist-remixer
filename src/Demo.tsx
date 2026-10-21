"use client";

import { program } from "./play";

export function Demo() {
  const list = program(
    [
      { id: "a", seconds: 90 },
      { id: "b", seconds: 90 },
    ],
    200,
  );
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>180 seconds under a cap of 200</h1>
      <p className="lede">The same list over a cap of 100 is refused. A repeated id is refused. Nothing is played.</p>
      {list.ok ? <p>Total {list.total} seconds.</p> : <p>{list.reason}</p>}
    </main>
  );
}
