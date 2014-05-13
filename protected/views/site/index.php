<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Blog Application</title>

        <link rel="stylesheet" type="text/css" href="../../css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="../../css/main.css">

        <script type="text/javascript" src="../../js/assignment/js/jquery.min.js"></script>
        <script type="text/javascript" src="../../js/assignment/js/underscore-min.js"></script>
        <script type="text/javascript" src="../../js/assignment/js/backbone-min.js"></script>
    </head>

    <body>
        <div class="main">
            <div style="text-align: center;">
                <h1>Blog Application</h1>
            </div>

            <div id="abc"></div>

            <div id="blogdeatils"></div>

            <div id="sidebar"></div>

            <script type="text/template" id="tpl-wine-list-item">
                <a href='#wines/<%= id %>'><%= name %></a>
            </script>

            <script type="text/javascript" src="../../js/assignment/main.js"></script>
        </div>
    </body>
</html>