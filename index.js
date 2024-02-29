function switchIcon(id) {
  var button_tag = document.getElementById(`${id}-tag`)
  var img_change = document.getElementById(id)
  let dropdown = "./Images/dropdown.png"
  let dropup = "./Images/dropup.png"
  let f = "false"
  let t = "true"

  if (button_tag.getAttribute('aria-expanded') === t) {
    img_change.setAttribute('src', dropup)
  }
  else if (button_tag.getAttribute('aria-expanded') === f) {
    img_change.setAttribute('src', dropdown)
  }
}

// Changes pictures in basement remodeling page
var it = 1
function go(direction) {

  if (direction === "right") {
    if (it != 6) {
      it += 1;
      var pic_to_get = `./Images/Project Pictures/basement/basement-pic-${it}.jpeg`
      console.log(it)
      document.getElementById('picture_change').setAttribute('src', pic_to_get)
    }
    else {
      console.log("No more pictures.")
    }
  }
  if (direction === "left") {
    if (it != 1) {
      it -= 1;
      var pic_to_get = `./Images/Project Pictures/basement/basement-pic-${it}.jpeg`
      console.log(it)
      document.getElementById('picture_change').setAttribute('src', pic_to_get)
    }
    else {
      console.log("Other way chief.")
    }
  }


}