t = int(input())

for _ in range(t):
    n, k = map(int, input().split())

    if n % k == 0:
        print(1) 
    else:
        val = (k - n % k) % k
        max_value = 1 + (val + n - 1) // n  
        print(max_value)
