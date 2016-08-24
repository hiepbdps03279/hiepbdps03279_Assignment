		  function check()
{
if(document.contact.txt_name.value=="")
{
$("#name").html('Nhập tên của bạn!');
document.contact.txt_name.focus();
return false;
}else{
	$("#name").html('');
}


if(document.contact.txt_email.value=="")
{
$("#email").html('Nhập Email của bạn!');
document.contact.txt_email.focus();
return false;
}else{
	$("#email").html('');
}

if(document.contact.txt_phone.value=="")
{
$("#phone").html('Nhập số điện thoại của bạn!');
document.contact.txt_phone.focus();
return false;
}else{
	$("#phone").html('');
}


if(document.contact.txt_content.value=="")
{
$("#content").html('Nhập nội dung!');
document.contact.txt_content.focus();
return false;
}else{
	$("#content").html('');
}

return true;
}// JavaScript Document