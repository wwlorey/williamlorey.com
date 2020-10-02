#!/usr/bin/env bash

echo -n "Title: "
read TITLE

echo -n "Date (YYYY-MM-DD): "
read DATE

while [ 1 ]
do
    echo -n "HTML path (file-path.html): "
    read FILE_PATH
    if test -f "$FILE_PATH"; then
        echo "Error: \"$FILE_PATH\" already exists."
    else
        break
    fi
done

echo "<!DOCTYPE html>
<html>
    <head>
        <!-- DATE: $DATE-->
        <meta charset='utf-8'>
        <title>$TITLE</title>
        <link rel='stylesheet' href='../stylesheet.css' type='text/css'>
        <link rel='icon' type='image/png' href='../images/love.png'>
    </head>
    <body>
        <h2>$TITLE</h2>

        <p id='signoff'>- <a href='../index.html'>Will</a></p>
    </body>
</html>" > $FILE_PATH
