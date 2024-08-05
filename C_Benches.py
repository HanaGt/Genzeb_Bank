n = int(input())  
m = int(input())  

a = [int(input()) for _ in range(n)]  

total = sum(a) + m
max_k = max(a) + m
min_k = (total + n - 1) // n

print(min_k, max_k)
