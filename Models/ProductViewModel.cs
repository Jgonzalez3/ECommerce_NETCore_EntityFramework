using System.ComponentModel.DataAnnotations;

namespace E_Commerce.Models
{
    public class ProductViewModel{
        [Required(ErrorMessage= "Product Name required")]
        public string name {get;set;}
        [Required(ErrorMessage= "Product Description required")]
        public string description {get;set;}
        [Required(ErrorMessage= "Product Quantity required")]
        public int quantity {get;set;}
        [Required(ErrorMessage= "Product Image Url required")]
        public string image {get;set;}
        [Required(ErrorMessage= "Product Price required")]
        public string price {get;set;}
    }
}