---
{"dg-publish":true,"permalink":"/dashboards/physical-tbr/"}
---

[[Welcome to my digital garden\|Back to start page]]

These are the books I have stacked in piles in my apartment that I haven't gotten around to reading yet. 

*Disclaimer*: This does not equal my TBR. Some of them weren't on my radar but were gifts, lots of books I want to read, I just haven't bought (yet). 


```base
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: if(price, price.toFixed(2) + " dollars")
  ppu: (price / age).toFixed(2)
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: Price
  file.ext:
    displayName: Extension
views:
  - type: table
    name: My table
    filters:
      and:
        - status != "done"
        - or:
            - formula.ppu > 5
            - price > 2.1
    order:
      - Title
      - note.
    sort: []
    limit: 10
  - type: cards
    name: Cardview
    filters:
      and:
        - file.inFolder("books")
        - '!file.hasProperty("finished")'
    order:
      - title
      - author
    sort:
      - property: title
        direction: ASC
    image: note.cover
    cardSize: 130
    imageFit: contain

```
