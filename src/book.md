---
layout: base_book.njk
eleventyExcludeFromCollections: true
---

<h1 class="text-centre">ARTHUR OTLEY<br>
and the<br>
Order of the Arthropods</h1>

<br>

<h4 class="text-centre">A.E.C. WEBB</h4>

<br>

<h2 class="text-centre">Ant Books</h2>

~pagebreak~

<div class="text-centre">
ANT BOOKS

Published by Ant Books Ltd  
A fictional books company, London, England

First published 2025

Copyright Anthony Webb 2025
All rights reserved

Printed in England by S Johnson, Gough Square, London

This book is sold subject to the condition that it shall not, by way of trade or otherwise, be lent, re-sold, read out loud on the London underground, enchanted with wings or otherwise circulated without the publisher's consent in any form of binding or cover other than that in which it is published and without a similar condition including this condition (even the bit about the wings) being imposed upon the subsequent purchaser, on penalty of being magically transformed into a warty toad for a period of no less than twelve months.
</div>

~pagebreak~

_<p class="text-centre">For Arthur, just in case it wasn't obvious!</p>_

~pagebreak~

~pagebreak~

<h2 class="text-centre">CONTENTS</h2>

PART ONE  
Off to magic school

PART TWO  
Mastering magic

PART THREE  
Dungeon adventure

~pagebreak~

~pagebreak~

{% for entry in story %}
<h3 class="text-centre" id={{entry.story_num}}>{{ entry.story_num}}<br>
{{ entry.title }}<br>
{{ entry.emoji }}</h3>
<div class="text-justify">
<p>{{ entry.content|safe}}</p>
</div>
<hr>
{% if entry.choice_1_text %}<p>1. {{ entry.choice_1_text|safe}} ~ <strong>{{ entry.choice_1_goto}}</p>{% endif %}
{% if entry.choice_2_text %}<p>2. {{ entry.choice_2_text|safe}} ~ <strong>{{ entry.choice_2_goto}}</strong></p>{% endif %}
{% if entry.choice_3_text %}<p>3. {{ entry.choice_3_text|safe}} ~ <strong>{{ entry.choice_3_goto}}</strong></p>{% endif %}
{% if entry.choice_4_text %}<p>4. {{ entry.choice_4_text|safe}} ~ <strong>
{{ entry.choice_4_goto}}</strong></p>{% endif %}
{% if entry.choice_5_text %}<p>5. {{ entry.choice_5_text|safe}} ~ <strong>{{ entry.choice_5_goto}}</strong></p>{% endif %}

{% endfor %}