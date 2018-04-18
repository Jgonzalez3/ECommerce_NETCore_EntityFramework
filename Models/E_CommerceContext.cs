using Microsoft.EntityFrameworkCore;

namespace E_Commerce.Models{
    public class E_CommerceContext : DbContext{

        public E_CommerceContext(DbContextOptions<E_CommerceContext> options) : base(options) { }
        public DbSet<Customer> Customers  {get; set;}
        public DbSet<Product> Products {get;set;}
        public DbSet<Order> Orders {get;set;}
    }
}