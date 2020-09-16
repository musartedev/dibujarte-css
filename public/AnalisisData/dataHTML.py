#Obtener informacion relevante a partir de un archivo HTML

def analisisHTML(path):
    #Cantidad total de lineas de codigo
    fichero = open(path, 'r')
    numeroLineasTotal = len(fichero.readlines())
    fichero.close()
    #print (numeroLineasTotal) 

    #Cantidad total de lineas en CODEPEN
    ##Por defecto al descargar el archivo, el .zip agrega lineas comentados y saltos de linea -> agrega 14 lineas por defecto
    numeroLineasReal = numeroLineasTotal - 14
    #print(numeroLineasReal)

    #Cantidad de clases en el proyecto
    ##Para eso contamos la frecuencia de aparicion de </div>
    data = open(path).read()
    contarClases = data.count("</div>")
    #print(contarClases)

    return numeroLineasReal, contarClases
