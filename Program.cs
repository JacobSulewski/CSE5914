using static System.Console;

WriteLine("Enter a topic: ");
ReadKey();
WriteLine("Movie");
WriteLine("Enter some categories:");
ReadKey();
WriteLine("plot, acting, ending");
List<Movie> movies = new() {
    new("Shutter Island", 7, 7, 9),
    new("Fight Club", 8, 7, 10),
    new("Book of Eli", 5, 4, 8),
    new("The Usual Suspects", 6, 7, 10)
    };
foreach(var movie in movies)
    WriteLine(movie.ToString());

class Movie
{
    string _name;
    int _acting;
    int _plot;
    int _ending;
    public Movie(string n, int a, int p, int e)
    {
        _name = n;
        _acting = a;
        _plot = p;
        _ending = e;
    }

    public override string ToString()
    {
        return $"{_name}\n\tPlot: {_plot}\n\tActing: {_acting}\n\tEnding: {_ending}";
    }
}