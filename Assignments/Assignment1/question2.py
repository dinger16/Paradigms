def dfs_traversal(graph, initial_node):
    stack = [initial_node]
    visited = []

    while stack:
        node = stack.pop(len(stack)-1)
        visited.append(node)

        for i in range(len(graph[node])-1, -1, -1):     #flip order of nodes when adding to stack
            if graph[node][i] not in visited and graph[node][i] not in stack:
                stack.append(graph[node][i])

    return visited

graph = {"+": ["*",3], "*":[2,7], 2:[],7:[],3:[]}
initial_node = "+" 

print(dfs_traversal(graph, initial_node))
# Answer: ['+', '*', 2, 7, 3]

graph = {0: [1,3], 1:[2,3], 2:[3,1], 3:[0,1]}
initial_node = 0

print(dfs_traversal(graph, initial_node))
# Answer: [0, 1, 2, 3]