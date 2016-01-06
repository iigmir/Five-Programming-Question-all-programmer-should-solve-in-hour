"""
Successione di Fibonacci:
a=1
b=2
a+=b
b+=a
a+=b
b+=a

1+=2
2+=3
3+=5
5+=8
"""

def fbnc(n):
	a=0
	b=1
	print (a)
	print (b)
	for i in range(n):
		a += b
		b += a
		print (a)
		print (b)
	return ("Loops Times:",n)

print (fbnc(100))


"""
Another version:
a=0
b=1
while b <= n:
(n is not counter)
"""
