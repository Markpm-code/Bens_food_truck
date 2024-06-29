  // Gallery load more button script
  $('#loadMore-btn').click(function () {
    var hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    for (var i = 0; i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove('hidden');
    }
    $('#loadMore-btn').hide();
  })