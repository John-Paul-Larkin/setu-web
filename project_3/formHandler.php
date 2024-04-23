<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style-index.css" />
    <link rel="stylesheet" href="./styles/style-global.css" />

    <title>Form results</title>
    <!-- C00001754 -->
    <!-- John Paul larkin -->
    <!-- Project Part 2 20% -->

    <!-- Roboto font link from fonts.google.com -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <!-- Navigation bar -->
    <header class="header" id="top">
      <div class="nav-container">
        <!-- Logo -->
        <a href="https://www.bordbia.ie/recipes/potato-recipes/" class="logo">
          <img src="./images/logo2.png" alt="humble spud logo" />
        </a>
        <!-- Hamburger icon -->
        <input class="checkbox" type="checkbox" id="checkbox" />
        <label class="hamburger" for="checkbox"><span class="hamburger-line"></span></label>
        <!-- Menu -->
        <nav class="nav">
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./recipes.html">Recipes</a></li>
            <li><a href="./questionnaire.html">Questionnaire</a></li>
            <li><a href="./about.html">About us</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="container results">
        <h1>Form results</h1>
        <table>
            <tr>
                <th>Question</th>
                <th>Response</th>
            </tr>
            <tr>
                <td>How often you eat Potatoes </td>
                <?php echo "<td>" . $_POST["how_often"] . "</td>"; ?>
            </tr>
            <tr>
                <td>When you last ate Potatoes </td>
                <?php echo "<td>" . $_POST["last_eat"] . "</td>"; ?>
            </tr>
            <tr>
                <td>Favourite way to eat</td>
                <?php echo "<td>" . $_POST["fav_way_eat"] . "</td>"; ?>
            </tr>
            <tr>
                <td>Your favourite memory </td>
                <?php echo "<td>" . $_POST["fav_memory"] . "</td>"; ?>
            </tr>
            <tr>
                <td>Your email address </td>
                <?php echo "<td>" . $_POST["email"] . "</td>"; ?>
            </tr>
        </table>
    </div>

    <footer>
      <div>
        <!-- Fragment identifier -->
        <a href="#top">Scroll to top</a>
        <p>© Big Potato</p>
      </div>
    </footer>
  </body>
</html>