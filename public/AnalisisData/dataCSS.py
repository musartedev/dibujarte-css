 #Obtener informacion relevante a partir de un archivo CSS

def analisisCSS(path):
    #Cantidad total de lineas de codigo
    fichero = open(path, 'r')
    numeroLineasTotal = len(fichero.readlines())
    fichero.close()
    #print (numeroLineasTotal) 

    #Cantidad de elementos en el proyecto
    ##Para eso contamos la frecuencia de aparicion de }
    data = open(path).read()
    contarElementos = data.count("}")
    #print(contarElementos)
    
    return numeroLineasTotal,contarElementos
