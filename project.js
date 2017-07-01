let bankData = 
        [
            {
                "name": "Big Guy Financial",
                "apy": 0.75,
                "earnings": 376.41
            },
            {
                "name": "URBank",
                "apy": 0.87,
                "earnings": 436.89
            },
            {
                "name": "Dewey, Cheatam & Howe",
                "apy": 0.01,
                "earnings": 5.00
            },
            {
                "name": "First Onion",
                "apy": 0.01,
                "earnings": 5.00
            },
            {
                "name": "Bank of Everywhere",
                "apy": 0.01,
                "earnings": 5.00
            }
        ]

window.addEventListener('load', function () {


let table = $('<table></table>').addClass('table');
let row = $('<tr></tr>').addClass('row');
table.append(row);
row.append('<td colspan="2" class="tableHead">' + 'Annual Percentage Yield' + '</td>')
row.append('<td class="tableHead">' + 'Est. Earnings for 1 year *' + '</td>')
for (let i = 0; i < bankData.length; i++) {
    let row = $('<tr></tr>').addClass('row');
    row.append('<td class="tableName">' + bankData[i].name + '</td>')
    row.append('<td class="tableData">' + bankData[i].apy.toFixed(2) + '%' + '</td>')
    row.append('<td class="tableData">' + '$' + bankData[i].earnings.toFixed(2) + '</td>')
    table.append(row);
}


$('#financeInfo').append(table);

    $(document).ready(function(){
        
        $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        }); 
    }); 
});  

