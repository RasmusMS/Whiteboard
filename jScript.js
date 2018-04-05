function main(){
  $('#PostIt').on('click', function() {
    var postItNote = document.createElement("textarea");
    $('#addNote').append('<textarea id="tekst" class="movable" draggable="true" style="position: relative;"></textarea>');
    $(function() {
      $('#tekst').draggable({
        cancel: 'text'
      });
    });
    alert('Hello World!');
  });
}

$(document).ready(main);
