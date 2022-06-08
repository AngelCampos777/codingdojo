class Samurai : Human
{
    public Samurai(string name) : base(name)
    {
        Health = 200;
    }
    public override int Attack(Human target)
    {
        base.Attack(target);
        if(target.Health < 50)
        {
            target.Health = 0;
            Console.WriteLine($"{Name} Assassinated {target.Name}");
        }
            return target.Health;
    }
    public void Meditate()
    {
        Health = 200;
    }
}