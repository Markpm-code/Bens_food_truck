function expandImage(element) {
    const imagePath = element.getAttribute('src');
    document.getElementById('expanded-img').setAttribute('src', imagePath);
    document.getElementById('expanded-image').style.display = 'flex';
  }
  
  function closeImage() {
    document.getElementById('expanded-image').style.display = 'none';
  }
