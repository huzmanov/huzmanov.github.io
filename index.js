function switchIcon(id) {
  var button_tag = document.getElementById(`${id}-tag`)
  var img_change = document.getElementById(id)
  let dropdown = "./Images/dropdown.png"
  let dropup = "./Images/dropup.png"
  let f = "false"
  let t = "true"
  
  if (button_tag.getAttribute('aria-expanded') === t){
    img_change.setAttribute('src', dropup)
  }
  else if (button_tag.getAttribute('aria-expanded') === f){
    img_change.setAttribute('src', dropdown)
  }
}