int[] numArr1 = {3, 4, 5, 6};
int[] numArr2 = {51, 3, 13, 9, 4, 1, 2, 10, 12, 7, 52};
int[] numArr3 = {3, -5, 2, -7, 8, 10, -2, 6, -8, 11};
int[] arr = {2, 5, 3, 1, 2, 7, 7, 7, 7, 7};

//1 print 1-255
// static void PrintNums()
// {
//     for(int i = 1;i <= 255;i++)
//     {
//         Console.WriteLine(i);
//     }
// }
// PrintNums();

//2print odd 1-255
// static void PrintOdds()
// {
//     for(int i = 1;i <= 255;i++)
//     {
//         if( i % 2 == 1)
//         {
//             Console.WriteLine(i);
//         }
//     }
// }
// PrintOdds();

//3 print sums 1 - 255
// static void PrintIntsAndSum0To255()
// {
//     int counter = 0;
//     for(int i = 1;i <= 255;i++)
//     {
//         int sum = counter + i;
//         Console.WriteLine($"Current Value:{i} Current Sum: {sum}");
//         counter = sum;
//     }
// }
// PrintIntsAndSum0To255();

//4 iterate Arr
// static void LoopArray(int[] numbers)
// {
//     for(int i = 0; i < numbers.Length; i++)
//     {
//         Console.WriteLine(numbers[i]);
//     }
// }
// LoopArray(numArr1);
// LoopArray(numArr2);
// LoopArray(numArr3);

//5 max
// static int FindMax(int[] numbers)
// {
//     int max = numbers[0];
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         if (max < numbers[i])
//         {
//             max = numbers[i];
//         }
//     }
//     return (max);
// }
// Console.WriteLine(FindMax(numArr1));
// Console.WriteLine(FindMax(numArr2));
// Console.WriteLine(FindMax(numArr3));

//6 get average
// static int Average(int[] numbers)
// {
//     int sum = 0;
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         sum = sum + numbers[i];
//     }
//     return (sum/numbers.Length);
// }
// Console.WriteLine(Average(numArr1));
// Console.WriteLine(Average(numArr2));
// Console.WriteLine(Average(numArr3));

//7arr w odds
// static List<int> OddArray()
// {
//     List<int> allOdds = new List<int>();
//     for(int i = 1; i <= 255; i++)
//     {
//         if(i % 2 == 1)
//         {
//             allOdds.Add(i);
//         }
//     }
//     return allOdds;
// }
// List<int> MyList = OddArray();
// foreach(int list in MyList)
// {
//     Console.WriteLine(list);
// }
//8 greater than y

//9 square the values
// static int[] SquaredArray(int[] numbers)
// {
//     for(int i = 0; i < numbers.Length; i++)
//     {
//         numbers[i] = numbers[i] * numbers[i];
//     }
//     return numbers;
// }

// static void SquareArrayValues(int[] numbers)
// {
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         numbers[i] = numbers[i] * numbers[i];
//     }
// }
// numArr1 = SquaredArray(numArr1);
// SquareArrayValues(numArr1);
// foreach(int num in numArr1)
// {
//     Console.WriteLine(num);
// }