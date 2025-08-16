---
layout: base.njk
pagination:
  data: story
  size: 1
  alias: story
permalink: "story/{{ story.story_num }}/"
---

<header>

<div class="flex-columns">
<div class="flex-col1">Arthur Otley and the Order of the Arthropods</div>
<div class="flex-col2"><div>
<div class="flex-col3"><a href="../../">home</a></div>
</div>

</header>

<article class="flex-col2">

{% set directoryPath = page.url.split('/').slice(0, -2).join('/') + '/' %}

<h1 class="text-centre" id={{story.story_num}}>{{ story.story_num}}<br>
{{ story.title }}<br>
<span class="text-size-x2">{{ story.emoji }}</span></h1>
<div>
<p>{{ story.content|safe}}</p>
</div>
<hr>
{% if story.choice_1_text %}<p>1. {{ story.choice_1_text|safe}} ~ <strong><a href="{{ directoryPath }}{{story.choice_1_storynum}}" >{{ story.choice_1_goto}}</a></strong></p>{% endif %}
{% if story.choice_2_text %}<p>2. {{ story.choice_2_text|safe}} ~ <strong><a href="{{ directoryPath }}{{story.choice_2_storynum}}" >{{ story.choice_2_goto}}</a></strong></p>{% endif %}
{% if story.choice_3_text %}<p>3. {{ story.choice_3_text|safe}} ~ <strong><a href="{{ directoryPath }}{{story.choice_3_storynum}}" >{{ story.choice_3_goto}}</a></strong></p>{% endif %}
{% if story.choice_4_text %}<p>4. {{ story.choice_4_text|safe}} ~ <strong><a href="{{ directoryPath }}{{story.choice_4_storynum}}" >{{ story.choice_4_goto}}</a></strong></p>{% endif %}
{% if story.choice_5_text %}<p>5. {{ story.choice_5_text|safe}} ~ <strong><a href="{{ directoryPath }}{{story.choice_5_storynum}}" >{{ story.choice_5_goto}}</a></strong></p>{% endif %}

<br>

<form id="numberForm">
  <p><input type="number" id="numberInput" name="numberInput" min="1" max="300" required inputmode="numeric">
  <button type="submit" class="btn btn-dark">→</button></p>
</form>

<script>
document.getElementById('numberForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.getElementById('numberInput');
  
  // Check if the input is valid using HTML5 validation
  if (input.checkValidity()) {
    const number = input.value;
    const currentPath = window.location.pathname;
    const newPath = currentPath.split('/').slice(0, -2).join('/');
    const newUrl = `${window.location.origin}${newPath}/${number}`;
    window.location.href = newUrl;
  }
});
</script>

</article>

<footer>
<a href="{{story.record_link}}" target="_blank">airtable record</a> | <a href="{{story.interface_link}}" target="_blank">airtable interface</a>
</footer>
