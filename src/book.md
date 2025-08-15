---
permalink: 'book.html'
permalinkBypassOutputDir: true
eleventyExcludeFromCollections: true
---
# Arthur Otley and the Order of the Arthropods

Start here...

{% for entry in story %}
<h3 class="text-centre" id={{entry.story_num}}>{{ entry.story_num}}<br>
{{ entry.title }}<br>
{{ entry.emoji }}</h3>
<p>{{ entry.content|safe}}</p>
<p>1. {{ entry.choice_1_text|safe}} - <a href="#{{entry.choice_1_storynum}}" >{{ entry.choice_1_goto}}</a></p>
{% if entry.choice_2_text %}<p>2. {{ entry.choice_2_text|safe}} - <a href="#{{entry.choice_2_storynum}}" >{{ entry.choice_2_goto}}</a></p>{% endif %}
{% if entry.choice_3_text %}<p>3. {{ entry.choice_3_text|safe}} - <a href="#{{entry.choice_3_storynum}}" >{{ entry.choice_3_goto}}</a></p>{% endif %}
{% if entry.choice_4_text %}<p>4. {{ entry.choice_4_text|safe}} - <a href="#{{entry.choice_4_storynum}}" >{{ entry.choice_4_goto}}</a></p>{% endif %}
{% if entry.choice_5_text %}<p>5. {{ entry.choice_5_text|safe}} - <a href="#{{entry.choice_5_storynum}}" >{{ entry.choice_5_goto}}</a></p>{% endif %}
<hr>
{% endfor %}