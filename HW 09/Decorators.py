import time

def nameArgs(f):
    def inner(*arg):
        print f.func_name + ": " + str(arg)
        return f(*arg)
    return inner

@nameArgs
def fib(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fib(num-1)+fib(num-2)

def whaaat():
    print "I'm afraid I don't understand decorators/closures fully yet"


whaaat()
