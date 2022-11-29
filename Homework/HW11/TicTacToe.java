package Homework.HW11;
import java.util.Scanner;


public class TicTacToe {
  private int[] board = new int[9];

  public TicTacToe(Player p1, Computer cpu) {
    for (int i = 0; i < board.length; i++) {
      this.board[i] = 0;
    }
  }

  public void updateBoard(int[] updatedBoard) {
    this.board = updatedBoard;
  }

  public void getBoard() {
    int counter = 0;
    for (int i = 0; i < this.board.length; i++) {
      if (counter == 3) {
        System.out.println("\n---+---+---");
        counter = 0;
      }
      if (this.board[i] == 1)
        System.out.print(" O ");
      if (this.board[i] == 0)
        System.out.print("   ");
      if (this.board[i] == -1)
        System.out.print(" X ");
      if (counter < 2)
        System.out.print('|');
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

  public boolean boardFull() {
    for (int i = 0; i < this.board.length; i++) {
        if (this.board[i] == 0)
            return false;
    }
    return true;
  }

    public static void main(String[] args) {
        Player p1 = new Player();
        Computer cpu = new Computer();

        TicTacToe game = new TicTacToe(p1, cpu);
        Scanner obj = new Scanner(System.in);
        boolean win = false;
        while (!game.boardFull()) {
            game.getBoard();
            System.out.print("Select position:");
            int pos = obj.nextInt();
            int[] userMove = p1.makeUserMove(pos, game.board);
            game.updateBoard(userMove);

        if (game.checkWin()) {
            System.out.println();
            game.getBoard();
            System.out.println("You Win!");
            win = true;
            break;
        }
        
        System.out.println();
        game.getBoard();
        if (!game.boardFull()) {
            System.out.println("Computer's Turn:");
            int[] cpuMove = cpu.makeComputerMove(game.board);
            game.updateBoard(cpuMove);
        
            if (game.checkWin()) {
                System.out.println();
                game.getBoard();
                System.out.println("Computer Wins!");
                win = true;
                break;
            }
        }
    }
    if (!win)
        System.out.println("It's a Tie!");
    obj.close();
  }
  
}
class Player {
    public int[] makeUserMove(int pos, int[] board) {
        board[pos - 1] = 1;
        return board;
    }
}

class Computer {
    public int[] makeComputerMove(int[] board) {
        while (true) {
          int pos = (int) (Math.random() * 9);
          if (board[pos] == 0) {
            board[pos] = -1;
            break;
          }
        }
        return board;
      }
}