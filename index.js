// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for icons & link
  const githubIcon = document.getElementById('GitHubIcon');
  const linkedinIcon = document.getElementById('LinkedinIcon');
  const journeyLink = document.querySelector('.MyJourneyLink');
  const cvIcon = document.getElementById('cv-icon');

  // GitHub Alert
  if (githubIcon) {
    githubIcon.addEventListener('click', function() {
      showMacAlert('https://github.com/lorenaalmoguera');
    });
  }

  // LinkedIn Alert
  if (linkedinIcon) {
    linkedinIcon.addEventListener('click', function() {
      showMacAlert('https://www.linkedin.com/in/lorena-almoguera-romero-122427177/');
    });
  }

  // Open Learning Journey Popup
  if (journeyLink) {
    journeyLink.addEventListener('click', function() {
      showTakenCourses();
    });
  }

  // CV Download Functionality
  if (cvIcon) {
    cvIcon.addEventListener('click', function() {
      downloadCV();
    });
  }

  // Close Learning Journey Popup
  const closePopup = document.querySelector('.close-popup');
  if (closePopup) {
    closePopup.addEventListener('click', function() {
      document.getElementById('coursesPopup').classList.add('hidden');
    });
  }
});

// Function to Show Mac-Style Alert and Redirect on Accept
function showMacAlert(url) {
  // Remove existing alerts
  const existingAlert = document.querySelector('.mac-alert');
  if (existingAlert) {
    existingAlert.remove();
  }

  // Create Alert Popup
  const alertPopup = document.createElement('div');
  alertPopup.classList.add('mac-alert');
  alertPopup.innerHTML = `
    <div class="mac-alert-header">
      <div class="mac-alert-buttons">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <span class="mac-alert-title">Confirmation</span>
    </div>
    
    <div class="mac-alert-content">
      <p>Are you sure you want to visit this site?</p>
    </div>
    <div class="mac-alert-footer">
      <button class="mac-btn accept">Accept</button>
      <button class="mac-btn cancel">Cancel</button>
    </div>
  `;

  // Append Popup to Body
  document.body.appendChild(alertPopup);

  // Button Functionality
  alertPopup.querySelector('.accept').onclick = () => {
    window.location.href = url; // Redirect on Accept
  };

  alertPopup.querySelector('.cancel').onclick = () => {
    alertPopup.remove(); // Close Popup on Cancel
  };
}

// Function to Download CV
function downloadCV() {
  const downloadLink = document.createElement('a');
  downloadLink.href = 'files/CV_2025_LORENA_ALMOGUERA_ROMERO.pdf'; // Path to your CV
  downloadLink.download = 'CV_2025_LORENA_ALMOGUERA_ROMERO.pdf'; // Name of the downloaded file
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Function to Show Fullscreen Popup
function showTakenCourses() {
  document.getElementById('coursesPopup').classList.remove('hidden');
}

// Function to Close Popup
document.addEventListener('DOMContentLoaded', function() {
  const closePopup = document.querySelector('.close-popup');
  if (closePopup) {
    closePopup.addEventListener('click', function() {
      document.getElementById('coursesPopup').classList.add('hidden');
    });
  }
});

// Function to Filter Courses (Fixes Spacing Issue)
function filterCourses() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let category = document.getElementById('categoryFilter').value;
  let courses = document.getElementById('coursesList').getElementsByTagName('li');

  for (let i = 0; i < courses.length; i++) {
      let text = courses[i].textContent.toLowerCase();
      let courseCategories = courses[i].getAttribute('data-category').split(',').map(c => c.trim());

      let matchesSearch = text.includes(input) || input === '';
      let matchesCategory = category === "all" || courseCategories.includes(category);

      if (matchesSearch && matchesCategory) {
          courses[i].classList.remove('hidden'); // Show item
      } else {
          courses[i].classList.add('hidden'); // Hide item and collapse
      }
  }
}


