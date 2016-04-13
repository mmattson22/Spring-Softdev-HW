import urllib2
import json

#url = "https://www.google.com/#safe=off&q=iguana"
url='http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=bfdd18d7-bf71-407d-bd66-430d3f0a89b7'


request = urllib2.urlopen(url)
result = request.read()
print result
