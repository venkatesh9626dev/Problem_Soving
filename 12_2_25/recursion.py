import math
from functools import reduce

# Printing range of n number from 1

def print_range(n):
    
    if n == 1:
        print(n)
        return 
    
    print_range(n-1)
    print(n)
    
print_range(5)

# fibonacci number

def fibonacci(n):
    
    if n == 0:
        return 0
    if 1>=n<=2:
        return 1
    
    return (fibonacci(n-1) + fibonacci(n-2))

print(fibonacci(5))

#Binary Search

def binary_search(arr:list,t:int,l:int,r:int) ->int:
    if l > r:
        return -1
    mid = l+r // 2
    if arr[mid] == t:
        return mid
    elif arr[mid] > t:
        return binary_search(t,arr,l,mid -1)
    else:
        return binary_search(t,arr,mid-1,r)
    
    
arr=[2,3,3,4,7,9]
print(binary_search( arr, 4 , 0 , len(arr) -1))

