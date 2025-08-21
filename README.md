# README

This repo is used to turn an airtable database into a "choose your own adventure" book. This particular example is a story I wrote for my nephew. Does it work? Yes. Is it the best way to go about it? Not sure to be honest.

## Steps for creating a choose your own adventure book

1. Populate the airtable base, one record = one entry.
2. Use google sheets to assign unique random numbers from a sequence of 1 to n, to each record, allowing for those records which need to use a fixed number. (Needs a bit of messing around with various formulas.)
3. Pull in the data from airtable to eleventy and create the story.

## Creating a physical or e-book

1. Eleventy creates a single file iterating over all the entries in sequence. Make sure that there is no padding or margin on the body and that headings are used where you want them.
2. Download this html file. Using MS word open this html file to automatically import it.
3. Find and replace any page break markers (I have used `~pagebreak~` for this).
4. Find and replace `"` with `"`, and `'` with `'`, to use the Word smart quotes replacer thing. This appears more reliable that using the markdown it similar functionality.
5. I also found that my markdown it engine missed a few italics so I did a word find `\_(*)\_` and replace with `\1` (+ format = italic) to bulk update - you need to select the `use wildcards` option in the Word dialogue box.
6. Copy the sections of the imported Word file into your template book `.docx` document.
7. Create pdf and make sure that fonts are embedded.

> [!TIP]
> After writing the above I figured how to import almost everything you need (in terms of layout and style) from the html file. Write up here: https://github.com/aewshopping/repo-blog/blob/main/base/notes/html-to-word.md

## My gotchas

1. GitHub secrets are scoped either to codespaces or to actions. If you have a secret in one it won't be available in the other! This confused me for a while when trying to access my airtable records.
2. Don't use airtable field names with the `-` character as this results in json titles that create problems. Also don't use spaces in field names. Instead use `_`.
3. When showing an airtable linked record in the json, it will show the linked record id _not_ the title of the linked record (which is what is displayed in airtable itself). So if you want to access the title of the linked record via the API you need to create an extra lookup field based on that linked record, explicitly showing the title.
