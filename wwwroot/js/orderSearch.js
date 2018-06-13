$(document).ready(function(){
    $("#searchorder").keyup(function(e){
        
        e.preventDefault();

        console.log(this.value)
        
    console.log(e);
    console.log($(e.currentTarget.form).serialize());

    $.ajax({
       url: "/search-order", /* Where should this go? */
       method: 'post', /* Which HTTP verb? */
       data: $(e.currentTarget.form).serialize(), /* Any data to send along? */
       success: function(res) { /* What code should we run when the server responds? */
            //$('#placeholder3').html(serverResponse)
            console.log(res);

            // var strRow = `
            //             <thead>
            //                 <th>Customer Name</th>
            //                 <th>Created Date</th>
            //                 <th>Actions</th>
            //             </thead>
            //             `
            var strRow;
            if(res.length == 0){
                strRow = `
                            <tr>
                            </tr>
                        `
            }
            res.forEach(e => {
                let sum = e["quantity"]*e['product']['price'];
                console.log(sum);
                let sumFixed = sum.toFixed(2);
                let adjAmt = sumFixed * 100;
                console.log("adjAMT",adjAmt);
                strRow += `
                            <tr>
                                <td>${e["customer"]["name"]}</td>
                                <td>${e["product"]["name"]}</td>
                                <td>${e["quantity"]}</td>
                                <td>$${e["product"]["price"]}</td>
                                <td>${e["displayDate"]}</td>
                                <td>$${sumFixed}</td>
                                <td><form action="Charge" methods="POST">
                                <input type="hidden" name="amount" value=${adjAmt}>
                                <input type="hidden" name="description" value="${e['product']['name']}">
                                <script src="//checkout.stripe.com/v2/checkout.js"
                                class = "stripe-button"
                                data-key="pk_test_y2bl7ARyN1TwezIDauzDhR4f"
                                data-locale="auto"
                                data-image="${e['product']['image']}"
                                data-description="${e['product']['name']}"
                                data-amount="${adjAmt}"></script>
                                </form></td>
                            </tr>
                        `
            });
            $("#ordersTable").html(strRow);
        }
    });

    });
});