---
layout: base_book_intro.njk
eleventyExcludeFromCollections: true
---

{% for entry in story %}
<h3 class="text-centre" id={{entry.story_num}}>{{ entry.story_num}}<br>
{{ entry.title }}<br>
{{ entry.emoji }}</h3>
<p>{{ entry.content|safe}}</p>
<p class="text-centre">............................................................</p>
<div class="text-choice">
{% if entry.choice_1_text %}<p>1. {{ entry.choice_1_text|safe}} ~ <strong>{{ entry.choice_1_goto}}</strong></p>{% endif %}
{% if entry.choice_2_text %}<p>2. {{ entry.choice_2_text|safe}} ~ <strong>{{ entry.choice_2_goto}}</strong></p>{% endif %}
{% if entry.choice_3_text %}<p>3. {{ entry.choice_3_text|safe}} ~ <strong>{{ entry.choice_3_goto}}</strong></p>{% endif %}
{% if entry.choice_4_text %}<p>4. {{ entry.choice_4_text|safe}} ~ <strong>
{{ entry.choice_4_goto}}</strong></p>{% endif %}
{% if entry.choice_5_text %}<p>5. {{ entry.choice_5_text|safe}} ~ <strong>{{ entry.choice_5_goto}}</strong></p>{% endif %}
</div>

{% endfor %}

### List of characters

Arthur Otley - an ordinary boy without a care in the world. He is you: the hero of this story.

Evan Otley - Arthur's younger brother. He wants to go to magic school too.

Daniel Colliers-Wood - a first year in Ravenwing House, his ambition is to combine science and magic and invent teleportation.

Robin Colliers-Wood - Daniel's younger brother. Sometimes he likes bad guys but he has a good heart. 

Robert Bleezeley - a fourth year in Lionpaw House. He is a fan of a good joke and also justice.

Alex Bleezeley - twin brother of Robert. A sportsman, and an expert in jacuzzi.

Aaron Bleezeley - younger brother of Robert and Alex. He's brave but sometimes foolish.

Snako Malboy - a Snakefang House first year. His family have been in Snakefang House for generations. A world champion sneerer.

Kensley Potato - a first year in Hedgehog House, she likes to keep her head down, her feet on the floor and her eyes on her shoes. 

Zebediah Slumblebore - headmaster of Hogsnorts School of Magic. Favourite food is mashed potatoes and watermelon, but not both at the same time. 

Professor Eric Knid - he teaches the care of magical creatures, especially insects which he thinks people don't care about enough.

Professor Comicus Jape - an expert in offensive magic, he also loves a bit of a giggle.

Professor Madam Blavatsky - teaches Defence Against Dark Magic, together with transcendental meditation. 

Professor Adeptus - one of the least important professors at Hogsnorts, he has been head of IT for the last thirty years and he still hasn't been able to get the WiFi working.

Wally - owner of Wally's Wanderful Wand Shop, and part time mind reader. 

Wesley the Weasel - Slumblebore's adopted pet weasel. He used to be a real boy.

Brian Banana, Rebecca Radishbottom, Betty Appleton - students in Hedgehog House.

Azog the Great - king of the spiders.

Percy the Pigeon - a giant pigeon.

### List of Hogsnorts School Houses, their colours and their chants

**Lionpaw House** (_red and gold_) -"South paw, North paw, we score, Lionpaw!" [Shadow boxing]<br><br>

**Snakefang House** (_green and silver_) - "Snake House rules, yah, sssssssss" [stick tongue out]<br><br>

**Ravenwing House** (_blue and copper_) - "Mind over matter, Ravenwings comin' at yaaaa!" [Flap hands like wings to the side of head]<br><br>

**Hedgehog House** (_brown_) - "Hoggers up, hoggers down, hoggers hoggers stand your ground" [stand up, sit down, stand up]
