def merge_two_sorted_array(arr1,arr2):
    l = 0
    r = 0
    
    result = []
    
    while (l < len(arr1) and r < len(arr2)):
        
        if arr1[l] <= arr2[r]:
            result.append(arr1[l])
            l = l + 1
        else:
            result.append(arr2[r])
            r = r + 1
    
    push_arr = {}
    
    if l < len(arr1):
        push_arr = {"arr" : arr1,"index" :l}
    elif r < len(arr2):
        push_arr = {"arr" : arr2,"index" :r}
        
    for index in range(push_arr["index"],len(push_arr["arr"])):
        result.append(push_arr["arr"][index])
        
    return result


def merge_sort(arr,start,end):
    
    if len(arr) == 2:
        return merge_two_sorted_array([arr[0]],[arr[1]])

    mid = (start + end) // 2
    
    
    if end == start:
        return [arr[mid]]

    else:
        arr1 = merge_sort(arr,start,mid)
        arr2 = merge_sort(arr,mid+1,end)
        
        return merge_two_sorted_array(arr1,arr2)
    
    


arr = [6,24,11,2,43,1,2]

print(merge_sort(arr,0,len(arr)-1))

