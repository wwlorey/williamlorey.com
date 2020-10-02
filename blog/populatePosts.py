#!/usr/bin/env python3

import os

BEGIN_POSTS_STRING = 'BEGIN POSTS'
END_POSTS_STRING = 'END POSTS'
DATE_STRING = 'DATE:'
TITLE_TAG = '<title>'
BLOG_HOME_PATH = 'index.html'

def getPostLi(date, filePath, title):
    return '<li>%s: <a href="%s">%s</a></li>' % (date, filePath, title)

def getTag(html, tag):
    start = html.find(tag)
    end = html.find('<', start + 1)
    return html[start+len(tag):end]

def getComment(html, commentId):
    comment = '<!-- %s' % commentId
    start = html.find(comment)
    end = html.find('-->', start + 1)
    return html[start+len(comment):end].replace(' ', '') # Dates shouldn't include spaces

blogHomeContent = open(BLOG_HOME_PATH, 'r').read().split('\n')
for index, line in enumerate(blogHomeContent):
    if BEGIN_POSTS_STRING in line:
        insertStart = index + 1
    elif END_POSTS_STRING in line:
        insertEnd = index
        break

print('Insert start:', insertStart)
print('Insert end:', insertEnd)

blogHomeContent = blogHomeContent[:insertStart] + blogHomeContent[insertEnd:]

position = insertStart
postFiles = [f for f in os.listdir('.') if '.html' in f and f != BLOG_HOME_PATH]
for postFile in postFiles:
    postContent = open(postFile, 'r').read()
    date = getComment(postContent, DATE_STRING)
    title = getTag(postContent, TITLE_TAG)
    blogHomeContent.insert(position, getPostLi(date, postFile, title))
    position += 1

open(BLOG_HOME_PATH, 'w').write('\n'.join(blogHomeContent))
print('Wrote %i blog posts to %s' % (len(postFiles), BLOG_HOME_PATH))
