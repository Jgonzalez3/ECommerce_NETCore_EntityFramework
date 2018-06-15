$(document).ready(function(){
    $("#productsearch").keyup(function(e){
        
        e.preventDefault();

        console.log(this.value)
        
    console.log(e);
    console.log($(e.currentTarget.form).serialize());

    $.ajax({
       url: "/product-search", /* Where should this go? */
       method: 'post', /* Which HTTP verb? */
       data: $(e.currentTarget.form).serialize(), /* Any data to send along? */
       success: function(res) { /* What code should we run when the server responds? */
            // console.log(res);    
            var strRow = "";
            if(res.length == 0){
                strRow = `
                            <div>
                            </div>
                        `
            }
            else{
                res.forEach(e => {
                    strRow += `
                    <div style="display: inline-block; margin: 10px;">
                        <img style="height: 110px; width: 110px;" src="${e['image']}" alt="${e["name"]}">
                        <p class="col-1">${e["name"]}</p>
                        <p class="col-1">(${e["quantity"]} left)</p>
                        <label>$${e["price"]}</label>
                    </div>
                    `
                });
                strRow += `
                    <p><a href="/products">show more...</a></p>
                    `
            }
            $("#productsBox").html(strRow);
        }
    });

    });
});