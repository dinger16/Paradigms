def tree_to_text(tree, root_node):
    if not tree[root_node]:
        print(root_node.split("_")[1], end="")
        return
    
    tree_to_text(tree, tree[root_node][0])
    print(root_node.split("_")[1], end="")
    tree_to_text(tree, tree[root_node][1])

    
tree =  {"n1_+": ["n2_*","n3_3"], "n2_*":["n4_2","n5_7"], "n4_2":[],"n5_7":[],"n3_3":[]}
root_node = "n1_+" 
# Answer: "2*7+3"

tree_to_text(tree, root_node)
print() #fix newline formatting

tree ={'n1_+': ['n2_3', 'n3_*'], 'n3_*': ['n4_/', "n5_2"], 'n4_/': ["n6_10", "n7_5"], "n6_10": [], "n7_5": [], "n5_2": [], 'n2_3': []}
root_node = "n1_+" 
# Answer: "3+10/5*2"

tree_to_text(tree, root_node)
print() #fix newline formatting