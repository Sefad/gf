function jc_setfrmfld()
{

var obj = document.documentElement;
while (obj.lastChild) obj = obj.lastChild;
obj = obj.parentNode;
var a = obj.parentNode;
var inp = a.getElementsByTagName('input');
var td = inp.item(inp.length-1).parentNode;

var n='Тест Новая страница',m='',l='',e='er@bg.uj',p='122333',c='';
if(a&&a.lead_name && n && a.lead_name.getAttribute('type') != 'hidden')a.lead_name.value=n;
if(a&&a.lead_middle_name && m && a.lead_middle_name.getAttribute('type') != 'hidden')a.lead_middle_name.value=m;
if(a&&a.lead_last_name && l && a.lead_last_name.getAttribute('type') != 'hidden')a.lead_last_name.value=l;
if(a&&a.lead_email && e && a.lead_email.getAttribute('type') != 'hidden')a.lead_email.value=e;
if(a&&a.lead_phone && p && a.lead_phone.getAttribute('type') != 'hidden')a.lead_phone.value=p;
if(a&&a.lead_city && c && a.lead_city.getAttribute('type') != 'hidden')a.lead_city.value=c;
        
}
function jc_chkscrfrm(a, uname, uname_req, middlename, middlename_req, lastname, lastname_req, email, email_req, phone, phone_req, city, city_req, extra_fields, extra_fields_req, extra_fields_hid)
{
    if(uname && uname_req && a.lead_name && (a.lead_name.value=='' || a.lead_name.value.indexOf(" ваше ")>-1))
    {
        a.lead_name.focus();
        alert('Пожалуйста, введите имя!');
        return false;
    }
    if(middlename && middlename_req && a.lead_middle_name && (a.lead_middle_name.value=='' || a.lead_middle_name.value.indexOf(" ваше ")>-1))
    {
        a.lead_middle_name.focus();
        alert('Пожалуйста, введите отчество!');
        return false;
    }
    if(lastname && lastname_req && a.lead_last_name && (a.lead_last_name.value=='' || a.lead_last_name.value.indexOf(" вашу ")>-1))
    {
        a.lead_last_name.focus();
        alert('Пожалуйста, введите фамилию!');
        return false;
    }

    if(email && email_req && a.lead_email && (a.lead_email.value=='' || a.lead_email.value.indexOf(" ваш ") >- 1))
    {
        a.lead_email.focus();
        alert('Пожалуйста, введите свой адрес E-mail!');
        return false;
    }
    else if (email && a.lead_email && a.lead_email.value!='' && a.lead_email.value!='Введите ваш e-mail')
    {
        var b=/^[a-z0-9_\-\.\+]+@([a-z0-9]+[\-\.])*[a-z0-9]+\.[a-z]{2,6}$/i;
        if(!b.test(a.lead_email.value))
        {
            a.lead_email.focus();
            alert('Пожалуйста, введите КОРРЕКТНЫЙ адрес E-mail!');
            return false;
        }
    }
    var oferta = document.getElementById('offerta_accept');
    if(oferta && !oferta.checked)
    {
        oferta.focus();
        alert('Вы должны принять условия оферты!');
        return false;
    }
    if(phone && phone_req && a.lead_phone && (a.lead_phone.value=='' || a.lead_phone.value.indexOf(" ваш ") >- 1))
    {
        a.lead_phone.focus();
        alert('Пожалуйста, введите свой номер телефона!');
        return false;
    }
    if (city && city_req && a.lead_city && (a.lead_city.value == '' || a.lead_city.value.indexOf(" ваш ") >- 1))
    {
        a.lead_city.focus();
        alert('Пожалуйста, введите свой город!');
        return false;
    }

        if (extra_fields.length > 0) {
        var result = true;
        for (i=0; i< extra_fields_req.length; i++) {
            var splitted = extra_fields_req[i].split('|');
            var type = splitted[0];
            var index = splitted[1];
            var title = decodeURI(splitted[2]);
            var name = 'lf_'+type+'['+index+']';

                        if (a[name].value != title && extra_fields_hid.indexOf(parseInt(index)) < 0) {
                if (type == 'int') {
                    if (isNaN(a[name].value) || a[name].value.indexOf(".")>-1 || a[name].value < 0) {
                        a[name].focus();
                        alert('Пожалуйста, введите целое число!');
                        result = false;
                        break;
                    }
                }
                if (type == 'float') {
                    if ((isNaN(a[name].value) || a[name].value.indexOf(".")==-1) && a[name].value != 0) {
                        a[name].focus();
                        alert('Пожалуйста, введите дробное (с точкой) число!');
                        result = false;
                        break;
                    }
                }
                if (type == 'char') {
                    if (a[name].value.length > 255) {
                        a[name].focus();
                        alert('Пожалуйста, введите не более 255 символов!');
                        result = false;
                        break;
                    }
                }
            }
        }
        if (!result) return false;
    }
        if (extra_fields_req.length > 0){
        var result_req = true;
        for(i=0; i< extra_fields_req.length; i++){
            var splitted = extra_fields_req[i].split('|');
            var type = splitted[0];
            var index = splitted[1];
            var title = decodeURI(splitted[2]);
            var name = 'lf_'+type+'['+index+']';

            if (a[name].value == '' || a[name].value == title || (type == 'bool' && !a[name].checked)) {
                if (type != 'bool' && type != 'radiobutton') {
                    a[name].focus();
                }
                alert('Пожалуйста, заполните обязательное поле "'+title+'"!');
                result_req = false;
                break;
            }
        }
        if (!result_req) return false;
    }
        if (a.lead_name && a.lead_name.value.indexOf("имя")>-1) {
        a.lead_name.value = '';
    }
    if (a.lead_middle_name && a.lead_middle_name.value.indexOf("отчество")>-1) {
        a.lead_middle_name.value = '';
    }
    if (a.lead_last_name && a.lead_last_name.value.indexOf("фамилию")>-1) {
        a.lead_last_name.value = '';
    }
    if (a.lead_email && a.lead_email.value.indexOf("e-mail")>-1) {
        a.lead_email.value = '';
    }
    if (a.lead_phone && a.lead_phone.value.indexOf("телефон")>-1) {
        a.lead_phone.value = '';
    }
    if (a.lead_city && a.lead_city.value.indexOf("город")>-1) {
        a.lead_city.value = '';
    }
    for(i=0; i< extra_fields.length; i++){
        var splitted = extra_fields[i].split('|');
        var type = splitted[0];
        var index = splitted[1];
        var title = decodeURI(splitted[2]);
        var name = 'lf_'+type+'['+index+']';

        if (a[name].value == title) {
            a[name].value = '';
        }
    }

    return true;
}
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
if (getCookie('sitePreview') != '1') {
	var real_location = location.hostname;
	if (real_location.indexOf("justclick.ru")+1) {
		// мы на домене JC, заменим юзерскую оферту офертой JC
		var oferta_link = '/media/oferta.php';
		$('[id ^= "subscr-form-"]').find('tr[rel="oferta"]').remove();
		var oferta_element = '<tr rel="oferta">'+'<td align="right" style="padding-top: 15px;" colspan="2"><input id="offerta_accept" type="checkbox" checked="" name="offerta_accept"><span><small>Прочитал и согласен с <a class="oferta" target="_blank" href="'+oferta_link+'" onclick="window.open(\''+oferta_link+'\',\'Oferta\',\'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=450,height=450\'); return false;">договором оферты</a></small></span></td>\n\t\t</tr>';
		$('[id ^= "subscr-form-"]').find('tr:last').before(oferta_element);
	}
}
