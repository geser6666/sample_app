function show_alert()
            {
                alert('aaaaa!!!')
            }

var count = 6;
function checker()
{
field_id="micropost_content";
max_length=140;
document.getElementById(field_id).max_length=140;
 
 gettext =document.getElementById(field_id).value;
        //alert(gettext.length);
        if (gettext.length > max_length )
	{	document.getElementById(field_id).value =
		document.getElementById(field_id).value.substr (0, max_length);
		gettext =document.getElementById(field_id).value;
	}
	    document.getElementById("id_counter_simbol").innerHTML = max_length - gettext.length+"/"+max_length;
	    
 
} 