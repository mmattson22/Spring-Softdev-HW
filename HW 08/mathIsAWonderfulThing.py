def union(Data1,Data2):
    return [x for x in Data1] + [x for x in Data2 if x not in Data1]

def intersection(Data1,Data2):
    return [x for x in Data1 if x in Data2]

def setDifference(Data1,Data2):
    return [x for x in Data1 if x not in SetA]

def symmetricDiff(Data1,Data2):
    return setDifference(union(Data1,Data2),intersection(Data1,Data2))

def cartesianProduct(Data1,Data2):
    return [(x,y) for x in Data1 for y in Data2]
