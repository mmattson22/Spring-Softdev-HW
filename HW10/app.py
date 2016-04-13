import urllib2,json,time
from flask import Flask, render_template, session, request, redirect, url_for

app = Flask(__name__)

def wrapper(f):
    def inner(*arg):
        print f.func_name + ":" + str(arg)
        return f(*arg)
    return inner

def timer(f):
    def inner(*arg):
        begin = time.time()
        f(*arg)
        end = time.time()
        return "execution time: " + str(end - begin)
    return inner

@wrapper
@app.route("/",methods=["GET","POST"])
@app.route("/home",methods=["GET","POST"])
def home():
    if request.method == "GET":
        return render_template("home.html")
    else:
        w = request.form.get('word')
        return redirect(url_for("answer",word=w))

@timer
@app.route("/answer",methods=["GET","POST"])
@app.route("/answer/<word>",methods=["GET","POST"])

def answer(word):
    """ 
    gets word that user entered in home page and uses etymology api to 
    display its etymology
    """
    key="a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
    url="http://api.wordnik.com:80/v4/word.json/%s/etymologies?useCanonical=true&api_key=%s"
    #print "\n\n\n\nWAKAKA " + word + " AKAKAW\n\n\n\n"
    try:
        url = url%(word,key)
        request = urllib2.urlopen(url)
        result = request.read()
        r = json.loads(result)
        x = r[0][38:]
        print x
        x = x.replace("<ety>","")
        x = x.replace("</ety>","")
        x = x.replace("<ets>","")
        x = x.replace("</ets>","")
        x = x.replace("[","")
        x = x.replace("]","")
        x = x.replace("<er>","")
        x = x.replace("</er>","")
        x = x.replace("fr.","//from")
        x = x.replace("cf.","//-//cf.")
        x = x.replace("Cf.","//-//cf.")
        d = x.split("//")
        print str(d)
        return render_template("answer.html",word=word, etymology=d, error=False)
    except:
        return render_template("answer.html",error=True, word="bad word", etymology=["no etymology for that word, try again"])


if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
