using System.ComponentModel.DataAnnotations;

namespace E_Commerce.Models
{
    public class ProductViewModel{
        [Required(ErrorMessage= "Product Name required")]
        public string name {get;set;}
        [Required(ErrorMessage= "Product Description required")]
        public string description {get;set;}
        [Range(0,9999)]
        [Required(ErrorMessage= "Product Quantity required")]
        public int? quantity {get;set;}
        [Required(ErrorMessage= "Product Image Url required")]
        public string image {get;set;}
        [Range(0.01, 9999.99)]
        [Required(ErrorMessage= "Product Price required")]
        public decimal? price {get;set;}
    }
}