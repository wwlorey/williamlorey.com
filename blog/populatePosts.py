#!/usr/bin/env python3

import os

BEGIN_POSTS_STRING = 'BEGIN POSTS'
END_POSTS_STRING = 'END POSTS'
DATE_STRING = 'DATE:'
TITLE_TAG = '<title>'
BLOG_HOME_PATH = 'index.html'
MONTH_NAMES = [
    None,
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

def getComment(html, commentId):
    comment = '<!-- %s' % commentId
    start = html.find(comment)
    end = html.find('-->', start + 1)
    return html[start+len(comment):end].replace(' ', '') # Dates shouldn't include spaces

def getTag(html, tag):
    start = html.find(tag)
    end = html.find('<', start + 1)
    return html[start+len(tag):end]

def getMonth(dateString):
    return dateString[:len('YYYY-MM')]

def getMonthHeading(monthString):
    year = monthString[:len('YYYY')]
    month = int(monthString[-2:])
    monthString = MONTH_NAMES[month]
    print('Found post(s) from %s %s' % (year, monthString))
    return '<h4>%s %s</h4>\n<ul>' % (year, monthString)

class Post:
    def __init__(self, date, filePath, title):
        self.date = date
        self.filePath = filePath
        self.title = title

    def getPostHtml(self):
        return '<li>%s: <a href="%s">%s</a></li>' % (self.date, self.filePath, self.title)

''' Get insert start and end indices '''
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

''' Generate and sort Post objects '''
postFiles = [f for f in os.listdir('.') if '.html' in f and f != BLOG_HOME_PATH]
posts = []
for postFile in postFiles:
    postContent = open(postFile, 'r').read()
    date = getComment(postContent, DATE_STRING)
    title = getTag(postContent, TITLE_TAG)
    posts.append(Post(date, postFile, title))

posts.sort(key=lambda post: post.date, reverse=True)

''' Write posts '''
position = insertStart
prevMonth = None
for post in posts:
    currentMonth = getMonth(post.date)
    if currentMonth != prevMonth:
        if prevMonth != None:
            blogHomeContent.insert(position, '</ul>\n')
            position += 1
        
        blogHomeContent.insert(position, getMonthHeading(currentMonth))
        position += 1
        prevMonth = currentMonth

    blogHomeContent.insert(position, post.getPostHtml())
    position += 1

blogHomeContent.insert(position, '</ul>\n')

open(BLOG_HOME_PATH, 'w').write('\n'.join(blogHomeContent))
print('Wrote %i blog post(s) to %s' % (len(postFiles), BLOG_HOME_PATH))
