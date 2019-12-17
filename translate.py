import sys
from random import randint as rand

alphabet = list("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
convertedSentence = ""

def convert(word):
	global convertedSentence, alphabet
	converted = ""
	doubleT = doubleT_Presence = th_Presence = False
	for i in range(len(word)):
		if doubleT or th_Presence:
			doubleT = th_Presence = False
			continue
		elif ((word[i] == "L" or word[i] == "l") and not doubleT_Presence) or (word[i] == "R" or word[i] == "r"):
			converted += "W" if word[i].isupper() else "w"
		elif (word[i] == "T" or word[i] == "t") and ((word[i + (1 if i + 1 < len(word) else 0)] == "T" or word[i + (1 if i + 1 < len(word) else 0)] == "t")):
			converted += (("D" if word[i].isupper() else "d") + ("D" if word[i + 1].isupper() else "d")) if i + 1 < len(word) else "t"
			doubleT = doubleT_Presence = True if i + 1 < len(word) else False
		elif (word[i] == "T" or word[i] == "t") and ((word[i + (1 if i + 1 < len(word) else 0)] == "H" or word[i + (1 if i + 1 < len(word) else 0)] == "h")):
			converted += ("F" if word[i].isupper() else "f") if i + 2 == len(word) else "t"
			th_Presence = True if i + 2 == len(word) else False
		else:
			converted += word[i]
	convertedSentence += ((converted[0] + "-" + converted[0:]) if (rand(1, 10) == 1 and converted[0] in alphabet) else converted) + " "

words = sys.argv[1].split(" ")
for i in words:
	convert(i)

print("\n" + convertedSentence)