function handleCheckboxSelection(checkboxName) {
    const checkboxes = document.getElementsByName(checkboxName);
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          checkboxes.forEach((cb) => {
            if (cb !== this) {
              cb.checked = false;
            }
          });
        }
      });
    });
  }
  