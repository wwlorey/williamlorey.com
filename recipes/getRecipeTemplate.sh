#!/usr/bin/env bash

echo -n "Title: "
read TITLE

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
        <meta charset='utf-8'>
        <meta name='robots' content='noindex'>
        <title>$TITLE</title>
        <link rel='stylesheet' href='../stylesheet.css' type='text/css'>
        <link rel='icon' type='image/png' href='../images/table-setting.png'>
        <meta name='viewport' content='width=device-width,initial-scale=1'> 
    </head>
    <body>
        <h1>$TITLE</h1>

        <h2>Ingredients</h2>
        <ul>
        </ul>

        <h2>Instructions</h2>
        <ol>
        </ol>

        <a href=''>source</a>

    </body>
</html>" > $FILE_PATH
