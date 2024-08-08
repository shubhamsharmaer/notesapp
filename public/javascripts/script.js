document.getElementById('inputField').addEventListener('focus', function() {
      document.getElementById('saveBtn').style.display = 'inline-block'; // Show the save button when input is focused
    });

    document.getElementById('inputField').addEventListener('blur', function() {
      if (this.value === '') {
        document.getElementById('saveBtn').style.display = 'none'; // Hide the save button if input is empty and loses focus
      }
    });

    document.getElementById('noteForm').addEventListener('submit', function(event) {
      var title = document.getElementById('inputField').value;
      var details = document.getElementById('detailsField').value;
      if (title.trim() === '' || details.trim() === '') {
          event.preventDefault(); // Prevent form submission if any field is empty
          alert('Both fields are required!');
      }
    }); 

    // handle menu btn toggle
    const navDialog =  document.getElementById('nav-dialog');
    const formshow = document.getElementById('noteForm');
    
    function blurform(){
      formshow.classList.toggle('blur-sm');
    }
    function handleMenu() {
      navDialog.classList.toggle('hidden');
      formshow.classList.remove('blur-sm');
  }

  