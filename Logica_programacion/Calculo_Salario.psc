Algoritmo Calculo_Salario
	Escribir lista_de_expresiones ["Ingrese su nombre, apellido y sueldo actual en ese orden: "]
	nombre<-"vacio"
	apellido<-"vacio"
	sueldo<-0
	sueldo2<-0
	c1<-0
	Leer nombre,apellido,sueldo
	Si sueldo<33000 Entonces
		sueldo2<-sueldo*0.2 + sueldo
		c1<-1
	SiNo
		sueldo2<-sueldo*0.15 + sueldo
	Fin Si
	Si c1 > 0 Entonces
		Escribir lista_de_expresiones "Hola señor: ",nombre," ",apellido,", su sueldo actual es de: ",sueldo,", se le otorga un porcentaje de aumento de: 20%. Su nuevo sueldo es: ",sueldo2
	SiNo
		Escribir lista_de_expresiones "Hola señor: ",nombre," ",apellido,", su sueldo actual es de: ",sueldo,", se le otorga un porcentaje de aumento de: 15%. Su nuevo sueldo es: ",sueldo2
	Fin Si
FinAlgoritmo
