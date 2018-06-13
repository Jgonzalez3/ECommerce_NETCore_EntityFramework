using System;
using System.Collections.Generic;

namespace E_Commerce.Models{
    public class Order{
            public int OrderId {get;set;}
            public int quantity {get;set;}
            public int CustomerId {get;set;}
            public Customer customer {get;set;}
            public int ProductId {get;set;}
            public Product product {get;set;}
            public DateTime created_at {get;set;}
            public DateTime updated_at {get;set;}
            public Order(){
                this.created_at = DateTime.Now;
                this.updated_at = DateTime.Now;
            }
            public string displayDate{
                get{
                    return this.created_at.ToString("MMM dd yyyy");
                }
            }
    }
}