<!-- no link jump
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
-->

<!--
	first load will have competition although no popup error
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
</script>
-->