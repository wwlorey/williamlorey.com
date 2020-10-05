#!/usr/bin/env bash

echo "Checking for resume..."
if test -f "resume/william_lorey_resume.pdf"; then
    echo "Pulling resume..."
    cd resume
    git pull
    cd ..
else
    echo "Cloning resume..."
    git clone https://github.com/wwlorey/resume.git
fi

echo "Copying resume..."
cp resume/william_lorey_resume.pdf william_lorey_resume.pdf
echo "Resume updated."
