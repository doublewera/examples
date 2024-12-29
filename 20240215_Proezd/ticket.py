age = input('Wash wozrast?')  
age = int(age) 
tarif = input('chas, ned, mes, god') 
czena = 0 
print('Тип переменной name - это ', type(czena)) 
 
if 14 <= age <=24:  
    if tarif == 'chas': czena = 60/2 
    print('proezd polzeny ') 
elif 50 <= age or age<= 14:  
    print('proezd besplatnyi ')     
elif tarif == 'chas': 
    czena =  60 
    print('czena60 ')  
elif tarif == 'ned': 
    czena = 300 
    print('czena300rub ')  
elif tarif == 'mes': 
    czena = 1000 
    print('czena1k ')  
elif tarif == 'god': 
    czena = 10000 
    print('czena10k ')
