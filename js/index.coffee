Zepto ->
  date = new Date()
  if date.getFullYear() != 2013 or date.getMonth() != 1 then return

  current = $(".calendar li:nth-child("+date.getDate()+")")[0]
  $(current).addClass 'current'

  for li in $ ".calendar li"
    if li == current then return
    $(li).addClass " past"
    
_gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-255368-15']);
_gaq.push(['_trackPageview']);

(() ->
  ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true
  ga.src = (if 'https:' == document.location.protocol then 'https://ssl' else 'http://www') + '.google-analytics.com/ga.js'
  s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)
)()

