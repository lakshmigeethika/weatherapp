// var coordinates = {};
var lat;
var long;
var unit="metric";
var temp;

$(document).ready(function(){
  navigator.geolocation.getCurrentPosition (success,error);
  // success function
  function success(position)
   {
  lat = position.coords.latitude;
  long = position.coords.longitude;
   $("#coords").html("The latttitude is "+ lat + " The longitude is " + long );

    // url for API request

//use https://cors-anywhere.herokuapp.com to enable cross origin requests
var url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&appid=772e29493b86a79ad283b68169f94227&";

  $.getJSON(url,function(info){
    // console.log("is it passed")
    temp=info.main.temp;
    var country=info.sys.country
   console.log(temp);
   $(".location").html(info.name + " , " +country);

   $("#tempdiv").html(temp.toPrecision(3));
   $("#description").html(info.weather[0].description);

  // changing background images

    //Thunderstorm
  if(info.weather[0].id>=200 && info.weather[0].id<=232)
  {  $("body").css("background","url('http://wallpapercave.com/wp/FTvkLn5.jpg')");
  }

    //Drizzle
 else if(info.weather[0].id>=300 && info.weather[0].id<=321){  $("body").css("background","url('http://orig06.deviantart.net/8880/f/2010/161/c/d/rain_ver2_by_linkingeek.jpg')"); }

  //Rain
  else if(info.weather[0].id>=500 && info.weather[0].id<=531)
  {  $("body").css("background","url('https://images.alphacoders.com/544/thumb-1920-544201.jpg')");
  }

  //Snow
 else if(info.weather[0].id>=600 && info.weather[0].id<=622)
 {  $("body").css("background","url('https://www.vent.at/urlaub/images/ORTE/WI/vent/winter/skigebiet_landschaft/vent_wintersportbericht_background,method=crop,prop=data,id=1636-900.jpg')");
 }

  //Atmosphere
  else if(info.weather[0].id>=701 && info.weather[0].id<=781)
  { $("body").css("background","url('https://greatatmosphere.files.wordpress.com/2013/06/bora-bora-summer-beach-travel-destinations-2013-beautiful-landscapes-photography-wallpaper-great-atmosphere-250.jpg?w=1600&h=1200')");
  }

  //Clear
  else if(info.weather[0].id==800)
  { $("body").css("background","url('http://xdesktopwallpapers.com/wp-content/uploads/2011/05/Clear-Sky-in-Morning.jpg')");
  }

  //Clouds
   else if(info.weather[0].id>=801 && info.weather[0].id<=804)
   { $("body").css("background","url('https://www.walldevil.com/wallpapers/a79/scenery-farme-natural-wallpaper-beautiful-sunshine-dark-clouds-wallpapers.jpg')");
   }

  //Extreme
  else if(info.weather[0].id>=900)
  { $("body").css("background","url('https://lh3.ggpht.com/oy_trWmjINZxAUZVA1gdDXeiyAtNNP_p-JOkOGJ2__deRhlOY68_Y0tF0An0f31R_Q=h900')");
  }

  });
   }

  // error function
  function error(){
    $("#coords").html("can't retrieve");
  }
//   toggle button chnage  of units
  $("#toggle").click(function(){


    //changing to F
    if(unit=="metric"){
      $("#toggle").html("fahrenheit");
       far= temp * (9/5) + 32;
      $("#tempdiv").html(far.toPrecision(4));
      unit="fahrenheit";
      console.log("the units in celcius are chnaged to " +unit);
    }

    else if(unit=="fahrenheit"){
     $("#toggle").html("celsius");
      $("#tempdiv").html(temp.toPrecision(4));
     unit="metric";
    console.log("the units are " +unit);
    }
  });
});
