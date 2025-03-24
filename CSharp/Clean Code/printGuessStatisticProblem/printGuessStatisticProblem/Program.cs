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
            var messagCreator = new GuessStatisticMessageCreator();
            var message = messagCreator.CreateMessage(candidate, count);

            Console.WriteLine(message);
        }
    }

    public class GuessStatisticMessageCreator
    {
        private string _number;
        private string _verb;
        private string _pluralModifier;

        public string CreateMessage(string candidate, int count)
        {
            CreatePluralDependentMessageParts(count);
            return $"There {_verb} {_number} {candidate}{_pluralModifier}";
        }

        private void CreatePluralDependentMessageParts(int count)
        {
            if (count == 0)
            {
                ThereAreNoLetters();
            }
            else if (count == 1)
            {
                ThereIsOneLetter();
            }
            else
            {
                ThereAreManyLetters(count);
            }
        }

        private void ThereAreNoLetters()
        {
            _verb = "are";
            _number = "no";
            _pluralModifier = "s";
        }

        private void ThereIsOneLetter()
        {
            _verb = "is";
            _number = "1";
            _pluralModifier = "";
        }

        private void ThereAreManyLetters(int count)
        {
            _verb = "are";
            _number = count.ToString();
            _pluralModifier = "s";
        }
    }
}
