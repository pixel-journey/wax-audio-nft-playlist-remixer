# Education — a playlist under a cap

> **Rung:** `npm test` passes. Nothing is played.  
> **The test is the rule.**

## Predict, then run

The total may equal the cap. It may not pass it. A repeated id is refused. Ids are 1 to 32 of `a-z`, `0-9`, or hyphen. One to twelve tracks. Each track is 1 to 600 seconds. The cap is 1 to 7200 seconds.

| Call | Locked result |
| --- | --- |
| two tracks of 90 under a cap of 200 | ok, total `180` |
| 90 and 10 under a cap of 100 | ok, total `100`. Equal to the cap is allowed. |
| two tracks of 90 under a cap of 100 | not ok |
| the same id twice | not ok |

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this sum.
