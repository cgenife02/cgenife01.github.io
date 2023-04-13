<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WEB250 * Chuchu Genife Shebba Beauty * Home</title>
  <link rel="shortcut icon" type="image/jpg" href="images/leaves.jpg">
  <link rel="stylesheet" href="style/style.css"> 
</head>
<body>
<header>
  <a href = "index.php"  >
	  </a>
    <div class="header"> 
     <h1>WEB-250 * Chuchu Genife * Sheeba Beauty</h1>
     <nav>
       <ul class="menu-indexu">
         <li class="menu-indexl"><a href="?p=home.php">Home</a></li>
         <li class="menu-indexl"><a href="?p=contract.php" target="_self">Contract</a></li>
         <li class="menu-indexl"><a href="?p=introduction.php" target="_self">Introduction</a></li>
         <li class="menu-indexl"><a href="?p=brand.php" target="_self">Brand</a></li> 
        </ul>
     </nav>
    </div>
</header>
<hr />
<!-- dynamic content goes here -->

<?php
	$sPage = $_GET["p"];
	//echo ("You picked the page: " . $sPage); 
	
	if($sPage == "") {  $sPage = "home.php"; }
	include($sPage);
?>


<hr />

<footer>
    <div class="footer">
      <div>
       <a href="https://github.com/cgenife02"> Github </a>
         &nbsp;
  
       <a href="https://cgenife02.github.io"> Github io </a>
         &nbsp;
  
       <a href="https://www.codecademy.com/profiles/Chuchu2I"> Codecademy </a>
         &nbsp;
  
       <a href="https://www.freecodecamp.org/chuchuG"> Freecodecamp </a>
        &nbsp;
  
       <a  href="https://jsfiddle.net/user/ChuchuG/fiddles/"> Jsfiddle </a>
        &nbsp;
  
       <a  href="https://www.linkedin.com/feed/"> Linkedin </a>
        &nbsp;
      </div>
       <br>
      <div><em>Derived from Mother Nature</em></div>
       <br>
      <div ><em>Built by Sheeba Beauty</em></div>
       <br>
      <div>
       <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fcgenife02.github.io%2Fweb215%2Findex.html"><img src="https://cgenife02.github.io/web215/images/html_validate.png" alt="HTML" style="border:0;width:88px;height:31px">                                                                                                              
       </a>
  
       <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcgenife02.github.io%2Fweb215%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"><img src="https://cgenife02.github.io/web215/images/css_validate.gif" alt="CSS" style="border:0;width:88px;height:31px" >
       </a> 
      </div>
    </div>
     <script>
     document.getElementById("link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
     document.getElementById("link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
     </script>
    
</footer>
  
</body>
</html>

