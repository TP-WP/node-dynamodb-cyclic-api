API REST for cyclic deploy

configurar variables de entorno en panel de aplicacion <variables>:
CYCLIC_DB = busy-red-sturgeon-gearCyclicDB

Uso de la API:  
/ - ruta por defecto - mensaje de bienvenida  
/usuarios - unica ruta ademas de la por defecto  
&ensp;-GET: sin parametros. Devuelve lista completa de usuarios sin ordenar sin paginacion  
&ensp;-GET /single: get user by id
&ensp;&ensp;-@userId  
&ensp;-POST: crea un nuevo usuario. Parametros:  
&ensp;&ensp;-@id  
&ensp;&ensp;-@nombre  
&ensp;&ensp;-@edad  
&ensp;&ensp;-@rut  
&ensp;&ensp;-@telefono  
&ensp;&ensp;-@direccion  
&ensp;-PUT: actualiza un usuario determinado por su id. Parametros:  
&ensp;&ensp;-@idUsuario  
&ensp;&ensp;-@nombre  
&ensp;&ensp;-@edad  
&ensp;&ensp;-@rut  
&ensp;&ensp;-@telefono  
&ensp;&ensp;-@direccion  
&ensp;-DELETE: elimina un usuario determinado por su id. Parametros:  
&ensp;&ensp;-@idUsuario
