﻿// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
    List<Eruption> eruptions = new List<Eruption>()
    {
        new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
        new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
        new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
        new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
        new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
        new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
        new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
        new Eruption("Santorini", 46,"Greece", 367, "Shield Volcano"),
        new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
        new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
        new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
        new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
        new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
    };
// Example Query - Prints all Stratovolcano eruptions
// IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!
// Eruption firstChileEruption = eruptions.First(d => d.Location == "Chile");
// Console.WriteLine(firstChileEruption);
// Eruption firstHawaiianEruption = eruptions.First(d => d.Location == "Hawaiian Is");
// Console.WriteLine(firstHawaiianEruption);
// Eruption firstNZEruption = eruptions.First(d => d.Location == "New Zealand" && d.Year > 1900);
// Console.WriteLine(firstNZEruption);
// IEnumerable<Eruption> highEruptions = eruptions.Where(c => c.ElevationInMeters >= 2000);
// PrintEach(highEruptions, "Stratovolcano eruptions.");
// IEnumerable<Eruption> zEruptions = eruptions.Where(c => c.Volcano == "Z*");
// PrintEach(zEruptions, "z eruptions.");

// int Elevation = eruptions.Max(c => c.ElevationInMeters);
// Console.WriteLine(Elevation);
// Eruption firstNZEruption = eruptions.First(d => d.ElevationInMeters == Elevation);
// Console.WriteLine(firstNZEruption);
// IEnumerable <Eruption> alphEruptions = eruptions.OrderBy(c => c.Volcano);
// PrintEach(alphEruptions, "alph eruptions.");
// IEnumerable <Eruption> earlyAlphEruptions = eruptions.Where(c => c.Year <= 1000).OrderBy(c => c.Volcano);
// PrintEach(earlyAlphEruptions, "earlyAlph eruptions.");


// Helper method to print each item in a List or IEnumerable.This should remain at the bottom of your class!
static void PrintEach(IEnumerable<dynamic> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (var item in items)
    {
        Console.WriteLine(item.ToString());
    }
}