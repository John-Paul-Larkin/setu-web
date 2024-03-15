<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form inputs</title>
    <link rel="stylesheet" href="./style.css" />
    <!-- C00001754 -->
    <!-- John Paul larkin -->
    <!-- 14/3/2024 -->
</head>
<body> 
    <h1>Welcome to the results of the form</h1>
    <div class="output">
        <?php echo "<p>Hello <span>" . $_POST["name"] . "</span></p>"; ?>
        <?php echo "<p>Your favourite animal is <span>" . $_POST["favourite-animal"] . "</span> and your opinion on options is <span>" . $_POST["option-opinion"] . "</span></p>"; ?>
        <?php echo "<p>Contact date is <span>" . $_POST["contact-date"] . "</span></p>"; ?>
    </div>
</body>
</html>