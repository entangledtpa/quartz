---
title: 🪴 Quartz 3.3
enableToc: false
---
#overview
# Alle paper
```dataview
TABLE lead as "Autoren", supervisor as "Supervisor", statistician as "Statistiker", working_title as "Titel"
FROM "paper"
```

# Alle paper mit Supervisor Marialuisa
```dataview
TABLE lead as "Autoren", working_title as "Titel"
FROM "paper"
WHERE contains(supervisor, "Marialuisa")
```

# Alle paper nach Status ohne submitted
```dataview
LIST status
FROM "paper"
WHERE status != "submitted"
SORT status
```
