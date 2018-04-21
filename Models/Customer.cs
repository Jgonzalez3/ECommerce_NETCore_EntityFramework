using System;
using System.Collections.Generic;

namespace E_Commerce.Models{
    public class Customer{
        public int CustomerId {get;set;}
        public string name {get;set;}
        public DateTime created_at {get;set;}
        public DateTime updated_at {get;set;}
        public List<Order> orders {get;set;}
        public Customer(){
            orders = new List<Order>();
            this.created_at = DateTime.Now;
            this.updated_at = DateTime.Now;
        }
        public string displayDate {
            get {
                return this.created_at.ToString("MMM dd yyyy");
            }
        }
    }
}