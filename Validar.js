function Validar() {
	var usuario, correo, clave, caja, expresion;
	
	usuario = document.getElementById("user").value;
	correo = document.getElementById("email").value;
	clave = document.getElementById("clave").value;
	caja =document.getElementById("cajatexto").value;
	
  expresion = /\w+@\w+\.+[a-z]/;
	
 if(usuario == "")
{
	alert("el campo usuario esta vacio");
		return false;
}
	
else if(correo == "")
{
	alert("el campo email esta vacio");
		return false;
}
else if(clave == "")
{
	alert("el campo del password esta vacio");
	return false;
}
else if(usuario == "" || correo == "" || clave == "" )
{
	alert("todos los campos estan vacios");
	return false;
}
	
else if( clave.length>16)
		{
			alert("Error clave Minimo 4 caracteres");
			return false;
		}
/*else if (correo.length>4)
	{
		alert("Error correo Minimo 4 caracteres ");
		return false;
	}*/
else if (!expresion.text(correo))
	{
		alert("Error el correo no es valido");
		return false;
	}
	
else if (caja == "mierda" || caja == "carajo" || caja == "imbecil")
	{
        alert("No escribir palabras soeces");
		return false;
	}
}

