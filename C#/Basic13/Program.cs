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
// static int GreaterThanY(int[] numbers, int y)
// {
//     int count = 0;
//     for(int i = 0; i < numbers.Length; i++)
//     {
//         if(numbers[i] > y)
//         {
//             count++;
//         }
//     }
//     return count;
// }
// Console.WriteLine(GreaterThanY(arr,6));

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

// 10 eliminate negitive nums
// static void EliminateNegatives(int[] numbers)
// {
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         if(numbers[i] < 0)
//         {
//             numbers[i] = 0;
//         }
//         Console.WriteLine(numbers[i]);
//     }
// }
// EliminateNegatives(numArr3);

//11 min,max,avg
// static void MinMaxAverage(int[] numbers)
// {
//     int min = 0;
//     int max = 0;
//     int sum = 0;
//     for (int i = 0; i < numbers.Length; i++)
//     {
//         sum = sum + numbers[i];
//         if(numbers[i] >= max)
//         {
//             max = numbers[i];
//         }
//         if(numbers[i] <= min)
//         {
//             min = numbers[i];
//         }
//     }
//     Console.WriteLine($"min: {min}, max: {max}, average: {sum/numbers.Length}");
// }
// MinMaxAverage(numArr1);
// MinMaxAverage(numArr2);
// MinMaxAverage(numArr3);

//12 shifting arr vals
// static void ShiftValues(int[] numbers)
// {
//     for (int i = 0; i < numbers.Length - 1; i++)
//     {
//         numbers[i] = numbers[i+1];
//     }
//     numbers[numbers.Length - 1] = 0;

//     foreach(int x in numbers)
//     {
//         Console.WriteLine(x);
//     }
// }

// ShiftValues(numArr1);
// ShiftValues(numArr2);
// ShiftValues(numArr3);

//13 number to str
// static void NumToString(int[] numbers)
// {
//     object[] box = new object[numbers.Length];
//     for (int i = 0; i < numbers.Length - 1; i++)
//     {
//         if(numbers[i] < 0)
//         {
//             box[i] = "dojo";
//         }
//         else
//         {
//             box[i] = numbers[i];
//         }
//     }
//     foreach(object x in box)
//     {
//         Console.WriteLine(x);
//     }
// }
// NumToString(numArr3);
