using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext {
    public DbSet<Braco> Braco { get; set; }
    public DbSet<Cabeca> Cabeca { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite("DataSource=app.db;Cache=Shared");

}

public static class helperDb {  
    public static void ApagarTudo<T>(this DbSet<T> dbSet) where T : class
    {
        dbSet.RemoveRange(dbSet);
    }
}