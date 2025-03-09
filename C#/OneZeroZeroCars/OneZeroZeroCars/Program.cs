namespace OneZeroZeroCars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var mainThr = Thread.CurrentThread;
            mainThr.Name = "Main thread";

            var threadCountDown = new Thread(() => CountDown("Thread #1"));
            var threadCountUp = new Thread(() => CountUp("Thread #2"));

            threadCountDown.Start();
            threadCountUp.Start();

            Console.WriteLine($"{mainThr.Name} is completed");

            Console.ReadKey();
        }

        public static void CountDown(string thrName)
        {
            for (int i = 10; i >= 0; i--)
            {
                Console.WriteLine($"{thrName}: {i} seconds left");
                Thread.Sleep(1000);
            }
        }

        public static void CountUp(string thrName)
        {
            for (int i = 0; i <= 10; i++)
            {
                Console.WriteLine($"{thrName}: {i} seconds counted");
                Thread.Sleep(1000);
            }
        }
    }
}
