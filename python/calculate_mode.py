def calculate_mode(arr):
    list = {}
    for i in arr:
        if i in list:
            list[i] += 1
        else: list[i] = 1
    
    answer = []
    max = 0
    
    for j in list:
        if list[j] > max:
            max = list[j]
    
    for k in list:
        if max == list[k]:
            answer.append(k)
    return answer
    