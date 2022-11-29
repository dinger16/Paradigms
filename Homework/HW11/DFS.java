package Homework.HW11;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

public class DFS {
    
    public List<String> traverse(String root, Map<String,List<String>> graph) {
        List<String> visited = new ArrayList<String>();
        Stack<String> stack = new Stack<String>();

        stack.push(root);
        while (!stack.empty()) {
            String cur = stack.pop();
            if (!visited.contains(cur)) {
                visited.add(cur);
                for (int i = graph.get(cur).size() - 1; i >= 0; i--)
                    stack.push(graph.get(cur).get(i));
            }
        }

        return visited;
    } 
    
    public static void main(String[] args) {
        // String root = "a";
        // Map<String, List<String>> graph = new HashMap<>();
        // graph.put("a", Arrays.asList("b", "e"));
        // graph.put("b", Arrays.asList("c", "d"));
        // graph.put("c", Arrays.asList("e"));
        // graph.put("d", Arrays.asList("b"));
        // graph.put("e", Arrays.asList("a", "f"));
        // graph.put("f", Arrays.asList());

        // String root = "a";
        // Map<String, List<String>> graph = new HashMap<>();
        // graph.put("a", Arrays.asList("b"));
        // graph.put("b", Arrays.asList("c", "d"));
        // graph.put("c", new ArrayList<>());
        // graph.put("d", new ArrayList<>());

        String root = "b";
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("a", Arrays.asList("b"));
        graph.put("b", Arrays.asList("a"));

        DFS dfs = new DFS();
        List<String> answer = dfs.traverse(root, graph);
        System.out.println(answer);
    }
}
