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
            res.forEach(e => {
                let sum = e["quantity"]*e['product']['price'];
                console.log(sum);
                let adjAmt = sum * 100;
                console.log(adjAmt);
                var strRow = `
                        <tbody id = "ordersTable">
                            <tr>
                                <td>${e["customer"]["name"]}</td>
                                <td>${e["product"]["name"]}</td>
                                <td>${e["quantity"]}</td>
                                <td>${e["product"]["price"]}</td>
                                <td>${e["displayDate"]}</td>
                                <td>$${sum}</td>
                                <td><form action="Charge" methods="POST">
                                <input type="hidden" name="amount" value=${adjAmt}></td>
                                <input type="hidden" name="description" value="${e['product']['name']}">
                                <script src="//checkout.stripe.com/v2/checkout.js"
                                class = "stripe-button"
                                data-key="@Stripe.Value.PublishableKey"
                                data-locale="auto"
                                data-image="${e['product']['image']}"
                                data-description="${e['product']['name']}"
                                data-amount="${adjAmt}"></script>
                            </tr>
                        <tbody>
                        `
            });
            $("#ordersTable").html(strRow);
        }
    });

    });
});