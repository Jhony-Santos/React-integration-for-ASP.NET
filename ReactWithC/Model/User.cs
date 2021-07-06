using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactWithC.Model
{
    [Table("User")]
    public class User
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("role")] 
        public String Role { get; set; }

    }
}
