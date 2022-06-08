class Wizard : Human
{
    public Wizard(string name) : base(name)
    {
        Intelligence = 25;
        Health = 50;
    }
    public Wizard(string name, int str, int itl, int dex, int hp) : base(name,str,itl,dex,hp)
    {
        Intelligence = itl + 20;
        Health = hp/2;
    }
        public override int Attack(Human target)
    {
        // take the itl * 5 subtract that from targets hp
        int dmg = Intelligence * 5;
        target.Health -= dmg;
        Health += dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage and healed for {dmg}.");
        return target.Health;
    }

        public int Heal(Human target)
    {
        // take the itl * 5 subtract that from targets hp
        int heal = Intelligence * 10;
        target.Health += heal;
        Console.WriteLine($"{Name} healed {target.Name} for {heal} health.");
        return target.Health;
    }
}