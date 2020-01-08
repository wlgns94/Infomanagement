var get_Tbody = document.getElementById("tbody");
var get_Table = document.getElementById("myTable");
var td_tag = document.createElement('td');
var tr_tag = document.createElement('tr');

function AddButton_click()
{
    var table_name = get_Tbody;
    var new_row = table_name.insertRow();
    for(let i = 0; i < 4; i++)
    {
        let text = prompt("Input your info");
        var new_cell = new_row.insertCell();
        new_cell.innerHTML = text;
        if(i == 2)
        {
            new_row.id = text;
        }
    }
}

function DelButton_click()
{
    var old_table = document.getElementById('tbody');
    if(old_table.rows.length < 1)
    {
        alert("You can't delete more.");
        return;
    }

    var number = prompt("Input Your Phone Number");
    var msg = document.getElementById(number);
    var parent = msg.parentNode;
    parent.removeChild(msg);
    //console.log(old_table.childNodes);
    //console.log(msg.childNodes);
    
}

function EditButton_click()
{
    var serial_number = prompt('Your Number');
    var table = document.getElementById(serial_number);
    var num = prompt('Select number 1.Name 2.Address 3.Phone Number 4.E-mail');
    var str = prompt('Input Your Info');
    if(num > 0 && num < 4)
        table.childNodes[num - 1].innerHTML = str;
    if(num == 3)
    {
        table.id = str;
    }
}

function Hilight_click()
{
    var serial_number = prompt('Select Number');
    var table = document.getElementById(serial_number);
    
    if(window.confirm('Do you wnat to Hilight?'))
    {
        table.style.backgroundColor = 'yellow';
    }
    else
    {
        alert('XXX');
    }
}