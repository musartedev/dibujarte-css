 #Obtener informacion relevante a partir de un archivo JS

def analisisJS(path):
    #Cantidad total de lineas de codigo
    fichero = open(path, 'r')
    numeroLineasTotal = len(fichero.readlines())
    fichero.close()
    #print (numeroLineasTotal) 

    return numeroLineasTotal 
