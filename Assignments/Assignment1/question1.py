def bfs_traversal(graph, initial_node):
    queue = [initial_node]
    visited = []

    while queue:
        node = queue.pop(0)
        visited.append(node)

        for neighbor in graph[node]:
            if neighbor not in visited and neighbor not in queue:
                queue.append(neighbor)

    return visited


graph = {"+": ["*",3], "*":[2,7], 2:[],7:[],3:[]}
initial_node = "+" 

print(bfs_traversal(graph, initial_node))
# Answer: ['+', '*', 3, 2, 7]

graph = {0: [1,3], 1:[2,3], 2:[3,1], 3:[0,1]}
initial_node = 0

print(bfs_traversal(graph, initial_node))
# Answer: [0, 1, 3, 2]