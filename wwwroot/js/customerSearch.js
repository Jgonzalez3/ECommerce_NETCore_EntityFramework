// Write your JavaScript code.
$(document).ready(function(){
    $("#search").keyup(function(e){
        
        e.preventDefault();

        console.log(this.value)
        
    console.log(e);
    console.log($(e.currentTarget.form).serialize());


    $.ajax({
       url: "/search-name", /* Where should this go? */
       method: 'post', /* Which HTTP verb? */
       data: $(e.currentTarget.form).serialize(), /* Any data to send along? */
       success: function(res) { /* What code should we run when the server responds? */
            // console.log(res);
            var strRow = `
                        <thead>
                            <th>Customer Name</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </thead>
                        `
            res.forEach(e => {
                strRow += `
                        <tr>
                            <form action="/customers/remove" method="POST">
                                <input type="hidden" name="customerid" value="${e.customerid}">
                                <td>${e["name"]}</td>
                                <td>${e["displayDate"]}</td>
                                <td><button class="btn-danger" type="submit">Remove</td>
                            </form>
                        </tr>
                        `
            });
            $("#clist").html(strRow);
        }
    });

    });
});