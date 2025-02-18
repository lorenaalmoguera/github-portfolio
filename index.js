// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for both icons
    const githubIcon = document.getElementById('GitHubIcon');
    const linkedinIcon = document.getElementById('LinkedinIcon');
  
    if (githubIcon) {
      githubIcon.addEventListener('click', function() {
        showMacAlert('https://github.com/lorenaalmoguera');
      });
    }
  
    if (linkedinIcon) {
      linkedinIcon.addEventListener('click', function() {
        showMacAlert('https://www.linkedin.com/in/lorena-almoguera-romero-122427177/');
      });
    }
  });
  
  // Function to Create Mac-Style Alert
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
      // Redirect on Accept
      window.location.href = url; 
    };
  
    alertPopup.querySelector('.cancel').onclick = () => {
      // Close Popup on Cancel
      alertPopup.remove();
    };
  }
  

  // Add event listener for CV download
document.addEventListener('DOMContentLoaded', function() {
    const cvIcon = document.getElementById('cv-icon');
    
    if (cvIcon) {
      cvIcon.addEventListener('click', function() {
        downloadCV();
      });
    }
  });
  
  // Function to Download CV
  function downloadCV() {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'files/CV_2025_LORENA_ALMOGUERA_ROMERO.pdf'; // Path to your CV
    downloadLink.download = 'CV_2025_LORENA_ALMOGUERA_ROMERO.pdf'; // Name of the downloaded file
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  