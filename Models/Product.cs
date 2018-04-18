using System;
using System.Collections.Generic;

namespace E_Commerce.Models{
    public class Product{
        public int ProductId {get;set;}
        public string name {get;set;}
        public string description {get;set;}
        public int quantity {get;set;}
        public string image {get;set;}
        public double price {get;set;}
        public DateTime created_at {get;set;}
        public DateTime updated_at {get;set;}
        public List<Order> orders {get;set;}
        public Product(){
            orders = new List<Order>();
            this.created_at = DateTime.Now;
            this.updated_at = DateTime.Now;
        }
    }
}