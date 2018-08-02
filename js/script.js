$(document).ready(function () {

    $('body').css("text-align", "center",)

    function getPosts(i, counterFiguers) {
        $.getJSON('https://jsonplaceholder.typicode.com/photos/' + i, function (data) {

            var figura = document.createElement('figure');;
            var imidz = document.createElement('img');
            imidz.setAttribute('src', data.url);
            var figCaption = document.createElement('p')
            figCaption.innerHTML = data.id + ' ' + data.title;
            figura.append(imidz, figCaption);
            document.getElementById('posts-list').append(figura);
            if (i >= 5 > counterFiguers || counterFiguers + 5 == i) return;

            getPosts(++i, counterFiguers);


        });

    }
    getPosts(1, 0);

    /*po pierwszym załadowaniu*/
    $('#jato').click(function (i) {
        console.log("omething")
        var counterFiguers = $('#posts-list figure').length;
        getPosts(counterFiguers + 1, counterFiguers)
    });
$('.icon').mouseover(function(){
    $(".topnav").addClass('responsive')
});
$('.icon').mouseout(function(){
    $(".topnav").removeClass('responsive')
});


$("#footer a").click(function(){

    document.documentElement.scrollTop = 0; 

});
  document.addEventListener('scroll',function(){
      if(document.documentElement.scrollTop>=window.innerHeight){
          $(".topnav").addClass('bgch')
      }
      else{
          $(".topnav").removeClass("bgch")
      }
  })
  })