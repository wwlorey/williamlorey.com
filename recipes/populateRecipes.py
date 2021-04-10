#!/usr/bin/env python3

import os

BEGIN_INSERT_STRING = 'BEGIN RECIPES'
END_INSERT_STRING = 'END RECIPES'
TITLE_TAG = '<title>'
INDEX_PATH = 'index.html'

def getComment(html, commentId):
    comment = '<!-- %s' % commentId
    start = html.find(comment)
    end = html.find('-->', start + 1)
    return html[start+len(comment):end].replace(' ', '') # Dates shouldn't include spaces

def getTag(html, tag):
    start = html.find(tag)
    end = html.find('<', start + 1)
    return html[start+len(tag):end]

class Recipe:
    def __init__(self, filePath, title):
        self.filePath = filePath
        self.title = title

    def getHtml(self):
        return '<li><a href="%s">%s</a></li>' % (self.filePath, self.title)

''' Get insert start and end indices '''
homeContent = open(INDEX_PATH, 'r').read().split('\n')
for index, line in enumerate(homeContent):
    if BEGIN_INSERT_STRING in line:
        insertStart = index + 1
    elif END_INSERT_STRING in line:
        insertEnd = index
        break

print('Insert start:', insertStart)
print('Insert end:', insertEnd)

homeContent = homeContent[:insertStart] + homeContent[insertEnd:]

''' Generate and sort Recipe objects '''
files = [f for f in os.listdir('.') if '.html' in f and f != INDEX_PATH]
recipes = []
for file in files:
    content = open(file, 'r').read()
    title = getTag(content, TITLE_TAG)
    recipes.append(Recipe(file, title))

recipes.sort(key=lambda recipe: recipe.title)

''' Write recipes '''
position = insertStart
homeContent.insert(position, '<ul>')
position += 1
for recipe in recipes:
    homeContent.insert(position, recipe.getHtml())
    position += 1

homeContent.insert(position, '</ul>')

open(INDEX_PATH, 'w').write('\n'.join(homeContent))
print('Wrote %i recipe(s) to %s' % (len(files), INDEX_PATH))
