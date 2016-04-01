digits="1234567890"
upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lowerCase="abcdefghijklmnopqrstuvwxyz"
upper = False
lower = False
number = False
def isPassValid(pwd):
    if (len([x for x in pwd if x in upperCase]) != 0):
        upper = True
        if (len([x for x in pwd if x in lowerCase]) != 0):
            lower = True
            if (len([x for x in pwd if x in digits]) !=0):
                number = True
                print "Valid Password"
                return True
            print "Invalid Password, needs number"
            return False
        print "Invalid Password, needs lower"
        return False
    print "Invalid Password, needs Upper"

def passStrength(pwd):
	numUppers = [x for x in pwd if x in upperCase]
	numLowers = [x for x in pwd if x in lowerCase]
	numNums = [x for x in pwd if x in digits]
	score = 0.0;
	if ((len(numUppers) + len(numLowers) + len(numNums)) != len(pwd)):
		score += 3.0
	score += len(numUppers)*1
	score += len(numNums)*1
	print score
isPassValid("WooooTEST11!1")
isPassValid("Woootest!")
isPassValid("WOOOOOTEST1")
isPassValid("woootest1")
passStrength("WooooTest1!")
