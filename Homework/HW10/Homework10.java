public class Homework10 {
  public boolean check(char[] correctPositions, String word) {
    for (int i = 0; i < correctPositions.length; i++) {
      if (correctPositions[i] != '*' && correctPositions[i] != word.charAt(i))
        return false;
    }
    return true;
  }

  public static void main(String[] args) {
    Homework10 m = new Homework10();

    char[] correctPositions = new char[]{ 'W', '*', 'R'};
    String word = "WoRdle";
    System.out.println(m.check(correctPositions, word));

    char[] correctPositions1 = new char[]{ 'W', '*' };
    String word1 = "wordle";
    System.out.println(m.check(correctPositions1, word1));

    char[] correctPositions2 = new char[]{ 'S', '*', 'G', '*', 'R'};
    String word2 = "SUGAR";
    System.out.println(m.check(correctPositions2, word2));

    char[] correctPositions3 = new char[]{ }; 
    String word3 = "";
    System.out.println(m.check(correctPositions3, word3));

    char[] correctPositions4 = new char[]{ '*', '*', '*', '*', '*'};
    String word4 = "PARADIGMS";
    System.out.println(m.check(correctPositions4, word4));
  }
}