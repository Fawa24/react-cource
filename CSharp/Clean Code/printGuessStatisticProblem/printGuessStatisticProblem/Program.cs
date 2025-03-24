namespace printGuessStatisticProblem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            PrintGuessStatistic("candidate", 0);
        }

        private static void PrintGuessStatistic(string candidate, int count)
        {
            string number;
            string verb;
            string pluralModifier;
            if (count == 0)
            {
                number = "no";
                verb = "is";
                pluralModifier = "s";
            }
            else if (count == 1)
            {
                number = "1";
                verb = "is";
                pluralModifier = "";
            }
            else
            {
                number = count.ToString();
                verb = "are";
                pluralModifier = "s";
            }

            Console.WriteLine($"There {verb} {number} {candidate}{pluralModifier}");
        }
    }
}
