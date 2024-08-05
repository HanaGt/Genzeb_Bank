t = int(input())
for _ in range(t):
    a , b , c , n = map(int , input().split())

    summ =  a + b + c + n

    if summ % 3 == 0 and max(a , b , c) <= summ // 3:
        print("YES")
    else:
        print("NO")