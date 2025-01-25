// Function to animate counting effect
    function animateValue(id, start, end, duration, increment) {
    var current = start;
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
      obj.textContent = current.toLocaleString(); // Format number with commas
      if (current == end) {
        clearInterval(timer);
      } else {
        current += increment; // Increment by the specified value
        if (Math.abs(current - end) < Math.abs(increment)) { // Ensure not to overshoot the target
          current = end;
        }
      }
    }, duration);
  }
  
    // Call animateValue function for each target
    animateValue("count1", 0, 7, 1000, 1); // Example values
    animateValue("count2", 0, 6100000, 300, 203050);  // Example values
    animateValue("count5", 0, 1400000, 200, 50293); // Example values
    animateValue("count7", 0, 2000, 1000, 500); // Example values
    animateValue("count8", 0, 500, 800, 50); // Example values


  document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName('collapsible-btn');
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Handle submenu toggle
  document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent the parent dropdown from closing
      const submenu = this.nextElementSibling;

      if (submenu && submenu.classList.contains('dropdown-menu')) {
        submenu.classList.toggle('show'); // Toggle the visibility of the submenu
      }
    });
  });

  // Replace your existing JavaScript with the following:

// Handle submenu under 'Onboard new state'
const navbarDropdownOnboard = document.getElementById('navbarDropdownOnboard');
const dropdownMenuOnboard = navbarDropdownOnboard.nextElementSibling;

navbarDropdownOnboard.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor click behavior
  
  if (dropdownMenuOnboard.classList.contains('show')) {
    dropdownMenuOnboard.classList.remove('show');
  } else {
    dropdownMenuOnboard.classList.add('show');
  }
});

// Close the 'Onboard new state' submenu when clicking outside
document.addEventListener('click', function (event) {
  if (!navbarDropdownOnboard.contains(event.target)) {
    dropdownMenuOnboard.classList.remove('show');
  }
});

// Close all submenus when the main dropdown is hidden
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  dropdown.addEventListener('hidden.bs.dropdown', function () {
    const submenus = this.querySelectorAll('.dropdown-menu');
    submenus.forEach(function (submenu) {
      submenu.classList.remove('show');
    });
  });
});

  // Adjust submenu positioning based on viewport overflow
  const submenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu');

  submenus.forEach(function (submenu) {
    submenu.parentElement.addEventListener('mouseenter', function () {
      const submenuRect = submenu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Flip the submenu to the left if it overflows the screen
      if (submenuRect.right > viewportWidth) {
        submenu.classList.add('dropdown-flip');
      } else {
        submenu.classList.remove('dropdown-flip');
      }
    });

    submenu.parentElement.addEventListener('mouseleave', function () {
      submenu.classList.remove('dropdown-flip'); // Reset flipping on mouse leave
    });
  });
});


