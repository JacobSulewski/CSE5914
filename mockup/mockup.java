import java.util.*;

public class Mockup {
		public static void main(String[] args) {
				Scanner in = new Scanner(System.in);
				System.out.println("Welcome to the Movie Rater mockup. Here are the ranking categories to choose from: \n Plot\n Acting\n Ending\n Pacing\n");
		

				String category = in.nextLine();
				System.out.println("You want to a prioritize movies with a good " + category + ". Here are some we recommend.");
				System.out.println("Raiders of the Lost Ark");
				System.out.println("\tPacing: 8.5");
				System.out.println("\tActing: 9.0");
				System.out.println("\tEnding: 9.8");
				System.out.println("\tPlot: 7.8");
		}
}
