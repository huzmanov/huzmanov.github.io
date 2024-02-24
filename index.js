function switchIcon(id) {
  var img_change = document.getElementById(id)
  let dropdown = "./Images/dropdown.png"
  let dropup = "./Images/dropup.png"

  
  if (img_change.getAttribute('src') === dropdown){
    img_change.setAttribute('src', dropup)
  }
  else if (img_change.getAttribute('src') === dropup){
    img_change.setAttribute('src', dropdown)
  }
}