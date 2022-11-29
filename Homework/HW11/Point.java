package Homework.HW11;
import java.lang.Math;

public class Point {
    private int x;
    private int y;

    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }

    private double getDistance() {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    @Override
    public boolean equals(Object other){
        // reflexive
        if(other == this)
            return true;
        // non-null
        if(other == null)
            return false;
        // don't even bother! they have different types
        if(getClass() != other.getClass())
            return false;
        Point point = (Point) other; // why do we need this type cast?
        return this.getDistance() == point.getDistance();
    }

    @Override
    public int hashCode(){
        int varCodeX = x;
        int varCodeY = y;
        // inits hash with the var code for one of the fields
        int hash = varCodeX;
        //  hash = <prime number> * hash + var_code;
        hash = 41 * hash + varCodeY;
        return hash;
    }

    @Override
    public String toString() {
        return "[" + x + ", " + y + "]";
    }

    public static void main(String[] args) {
        // Point p1 = new Point(2, 3);
        // Point p2 = new Point(-3, 1);
        // Point p3 = new Point(-2, -3);

        // System.out.println(p1.equals(p2));
        // System.out.println(p1.equals(p3));
        // System.out.println(p1.equals(null));
        // System.out.println(p1.equals(p1));
    }

}