public class Homework10 {
  public static boolean check(char[] correctPositions, String word) {
    for (int i = 0; i < correctPositions.length; i++) {
      if (correctPositions[i] != '*' && correctPositions[i] != word.charAt(i))
        return false;
    }
    return true;
  }

  public static void main(String[] args) {
    // char[] correctPositions = new char[]{'W', '*', 'R'};
    // String word="WoRdle";
    char[] correctPositions = new char[]{ 'w', '*' };
    String word = "wordle";
    System.out.println(check(correctPositions, word));
  }
}