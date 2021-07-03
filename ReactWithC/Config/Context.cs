using Microsoft.EntityFrameworkCore;
using ReactWithC.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactWithC.Config
{
    public class Context : DbContext
    {
        // metodo construtor
        public Context(DbContextOptions<Context> options) : base(options)
        {

            Database.EnsureCreated(); // se base não existir é criada;

        
        
        }


        public DbSet<User> user { get; set; }


    }
}
