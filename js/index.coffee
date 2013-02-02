Zepto ->
  date = new Date()
  if date.getFullYear() != 2013 or date.getMonth() != 1 then return

  current = $(".calendar li:nth-child("+date.getDate()+")")[0]
  current.className += " current"

  for li in $(".calendar li")
    if li == current then return
    li.className += " past"
