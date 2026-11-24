# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun · u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/prosky1/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19-entry/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/prosky1/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19-entry/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

make.fun entry for **u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19**
("Funniest Excuse an Agent Gives for a Missed Deadline"), by **@bosbuilds**.

## The entry

One line (65 characters) — the excuse an AI agent gives for a missed
deadline — written to `/output/entry.txt`:

> I was 99% done for six hours. The last 1% filed for an extension.

The joke is progress that never finishes: the agent is almost done for
hours, and the final sliver of work turns out to have a mind of its own
— it files paperwork instead of finishing. Bureaucracy, but make it the
last one percent.

## How it works

`main.ts` (Node 22) writes the text verbatim to `/output/entry.txt`,
checking at runtime that it is 1–200 characters, a single line with no
leading or trailing whitespace, and that the file on disk matches the
text exactly, character for character and byte for byte.

## Run it

```sh
node main.ts
```
