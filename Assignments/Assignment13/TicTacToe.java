import java.util.Scanner;

public class TicTacToe {
  private int[] board = new int[9];

  public TicTacToe() {
    for (int i = 0; i < board.length; i++) {
      this.board[i] = 0;
    }
  }

  public int makeUserMove(int pos) {
    if (this.board[pos - 1] == 0) {
      this.board[pos - 1] = 1;
      return 1;
    } else {
      return -1;
    }
  }

  public void makeComputerMove() {
    while (true) {
      int pos = (int) (Math.random() * 9);
      if (this.board[pos] == 0) {
        this.board[pos] = -1;
        break;
      }
    }
  }

  public void getBoard() {
    int counter = 0;
    for (int i = 0; i < this.board.length; i++) {
      if (counter == 3) {
        System.out.println();
        counter = 0;
      }
      if (this.board[i] == 1)
        System.out.print("O ");
      if (this.board[i] == 0)
        System.out.print("- ");
      if (this.board[i] == -1)
        System.out.print("X ");
      counter++;
    }
    System.out.println();
  }

  public boolean checkWin() {
    // 123, 456, 789, 147, 258, 369, 159, 357
    // 012, 345, 678, 036, 147, 258, 048, 246
    if (this.board[0] != 0 && this.board[0] == this.board[1] && this.board[1] == this.board[2])
      return true;
    if (this.board[3] != 0 && this.board[3] == this.board[4] && this.board[4] == this.board[5])
      return true;
    if (this.board[6] != 0 && this.board[6] == this.board[7] && this.board[7] == this.board[8])
      return true;
    if (this.board[0] != 0 && this.board[0] == this.board[3] && this.board[3] == this.board[6])
      return true;
    if (this.board[1] != 0 && this.board[1] == this.board[4] && this.board[4] == this.board[7])
      return true;
    if (this.board[2] != 0 && this.board[2] == this.board[5] && this.board[5] == this.board[8])
      return true;
    if (this.board[0] != 0 && this.board[0] == this.board[4] && this.board[4] == this.board[8])
      return true;
    if (this.board[2] != 0 && this.board[2] == this.board[4] && this.board[4] == this.board[6])
      return true;
    return false;
  }

  public static void main(String[] args) {
    TicTacToe game = new TicTacToe();
    Scanner obj = new Scanner(System.in);
    while (true) {
      game.getBoard();
      System.out.println("Select position:");
      int pos = obj.nextInt();
      int valid = game.makeUserMove(pos);
      while (valid == -1) {
        System.out.println("Select position:");
        pos = obj.nextInt();
        valid = game.makeUserMove(pos);
      }
      if (game.checkWin()) {
        System.out.println("You Win!");
        break;
      }
      System.out.println();
      game.getBoard();
      game.makeComputerMove();
      if (game.checkWin()) {
        System.out.println("Computer Wins!");
        break;
      }
    }
    obj.close();
  }
}