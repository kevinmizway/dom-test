$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#you").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>How are you?</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#you").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, Dear user!</li>")
  });

  $("button#stop").click(function() {
    $("ul#you").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>")
  });
});
