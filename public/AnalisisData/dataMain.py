#Determinar los datos relevantes adquiridos de Dibujarte CSS
import numpy as np
import matplotlib.pyplot as plt

import dataHTML
import dataCSS
import dataJS

#Asignar los nombres de los archivos
nombres = list()
fichero = open("nombres.txt", "r")
for linea in fichero:
    linea = linea.replace("\n","")
    nombres.append(linea)
fichero.close()

#Numero de participantes
participantes = len(nombres)

#Cantidad de lineas de codigo HTML y CSS
numeroLineasReal = list()
contarClases = list()

numeroLineasCSS = list()
contarElementos = list()

numeroLineasTotal = list()

for i in range(participantes-1):
    #Para HTML
    path1 = "PATH-TO-index" + str(i) + ".html"
    aux1, aux2 = dataHTML.analisisHTML(path1)
    numeroLineasReal.append(aux1)
    contarClases.append(aux2)
    #Para CSS
    path2 = "PATH-TO-style" + str(i) + ".css"
    aux3,aux4 = dataCSS.analisisCSS(path2)
    numeroLineasCSS.append(aux3)
    contarElementos.append(aux4)
    #Entre HTML y analisisCSS
    numeroLineasTotal.append(aux1+aux3)

print("Cantidad de participantes:",participantes)

#Graficar cantidad de lineas de codigo para cada proyecto
N = participantes-1
ind = np.arange(N)
width = 0.30

fig, ax = plt.subplots()

graph1 = ax.barh(ind,numeroLineasReal, width, label='HTML')
graph2 = ax.barh(ind + width, numeroLineasCSS, width,label='CSS')
graph3 = ax.barh(ind + 2*width, numeroLineasTotal, width, label='TOTAL')

ax.set_title('CANTIDAD DE LINEAS DE CODIGO / DIBUJARTE-CSS')
plt.yticks(ind + width, (nombres))
ax.legend(loc='best')

for i, v in enumerate(numeroLineasReal):
    ax.text(v + 3, i - .1, str(v), color='blue', fontweight='bold')
for i, v in enumerate(numeroLineasCSS):
    ax.text(v + 3, i + .2, str(v), color='orange', fontweight='bold')
for i, v in enumerate(numeroLineasTotal):
    ax.text(v + 3, i + .5, str(v), color='green', fontweight='bold')

plt.show()

#Graficar cantidad de elementos y clases utilizadas
N = participantes-1
ind = np.arange(N)
width = 0.30

fig, ax = plt.subplots()

graph1 = ax.barh(ind,contarClases, width, label='HTML')
graph2 = ax.barh(ind + width, contarElementos, width,label='CSS')

ax.set_title('CANTIDAD DE ELEMENTOS Y CLASES / DIBUJARTE-CSS')
plt.yticks(ind + width, (nombres))
ax.legend(loc='best')

for i, v in enumerate(contarClases):
    ax.text(v + 0.5, i - .1, str(v), color='blue', fontweight='bold')
for i, v in enumerate(contarElementos):
    ax.text(v + 0.5, i + .2, str(v), color='orange', fontweight='bold')

plt.show()

#Si es una animacion -> presentar la sumatoria de lineas de codigo de JS
pregunta = input("Queres analizar archivos .js: [True/False]? ")

if (pregunta ==  True):

    numeroTotal = list()
    numeroLineasJS = list()

    for i in range(participantes-1):
        #Para JS
        path3 = "PATH-TO-script" + str(i) + ".js"
        aux5 = dataJS.analisisJS(path3)
        numeroLineasJS.append(aux5)
        numeroTotal.append(numeroLineasTotal[i] + aux5)

    #Graficar cantidad de lineas de codigo para cada proyecto
    N = participantes-1
    ind = np.arange(N)
    width = 0.2

    fig, ax = plt.subplots()

    graph1 = ax.barh(ind,numeroLineasReal, width, label='HTML')
    graph2 = ax.barh(ind + width, numeroLineasCSS, width,label='CSS')
    graph3 = ax.barh(ind + 2*width, numeroTotal, width, label='TOTAL')
    graph4 = ax.barh(ind + 3*width, numeroLineasJS, width, label='JS')

    ax.set_title('CANTIDAD DE LINEAS DE CODIGO / DIBUJARTE-CSS')
    plt.yticks(ind + 1.5*width, (nombres))
    ax.legend(loc='best')

    for i, v in enumerate(numeroLineasReal):
        ax.text(v + 3, i - .1, str(v), color='blue', fontweight='bold')
    for i, v in enumerate(numeroLineasCSS):
        ax.text(v + 3, i + .11, str(v), color='orange', fontweight='bold')
    for i, v in enumerate(numeroTotal):
        ax.text(v + 3, i + .3, str(v), color='green', fontweight='bold')
    for i, v in enumerate(numeroLineasJS):
        ax.text(v + 3, i + .5, str(v), color='red', fontweight='bold')

    plt.show()

