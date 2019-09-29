$('li').click(function() {
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
$('#semangat').append(
  "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
);
// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
$('ul').on('click', 'li', function() {
  //  code Here...
  $(this).css({
    color: 'black',
    textDecoration : 'line-through'
  })
});

// buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
//  code Here...
 $('#plus').on('click', function(){
    if ($('input').val() != null && $('input').val() != '') {
      let tambah = $('input').val();
      let Html = `
            <li>
              <span><i class="fa fa-trash"></i></span> ${tambah}
            </li>
      `;
      $('#todos').append(Html);
      $('input').val('');
    }
  });