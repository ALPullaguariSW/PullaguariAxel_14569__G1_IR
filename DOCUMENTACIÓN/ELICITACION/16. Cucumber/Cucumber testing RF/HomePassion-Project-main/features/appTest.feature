Feature: Testing "Home Passion" website functionalities

  Scenario: Visualización de la sección "Sobre nosotros"
    Given el visitante ha ingresado a la página web
    When selecciona la opción "sobre nosotros" en el menú principal
    Then la página de información del negocio se muestra correctamente

  Scenario: Visualización de la sección de comentarios
    Given el visitante ha ingresado a la página web
    When selecciona la opción "comentarios" en el menú principal
    Then los comentarios de los visitantes se muestran correctamente
    And el visitante puede añadir un nuevo comentario exitosamente

  Scenario: Visualización de la sección de noticias
    Given el visitante ha ingresado a la página web
    When selecciona la opción "noticias" en el menú principal
    Then las tres noticias recientes se muestran correctamente

  Scenario: Visualización de la sección de catálogo
    Given el visitante ha ingresado a la página web
    When selecciona la opción "catálogo" en el menú principal
    Then las categorías de productos se muestran correctamente
    And el visitante puede seleccionar una categoría y ver los productos disponibles

  Scenario: Búsqueda de productos en el catálogo
    Given el visitante ha ingresado a la página web y está en la sección de catálogo
    When ingresa texto de búsqueda y realiza la búsqueda
    Then los productos coincidentes se muestran correctamente

  Scenario: Envío de correos desde la sección de contacto
    Given el visitante ha ingresado a la página web y está en la sección de contacto
    When llena el formulario de envío y lo envía
    Then el correo se envía correctamente y se muestra un mensaje de éxito

  Scenario: Ingreso del administrador
    Given el administrador ha ingresado a la página web y está en la sección de "Acceder"
    When llena el formulario de login y lo envía
    Then el sistema valida los datos y permite el ingreso

  Scenario: Inserción de productos en el catálogo por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de catálogo
    When selecciona una categoría, selecciona la acción de añadir, llena el formulario de producto y lo envía
    Then el producto se ingresa correctamente en la base de datos

  Scenario: Eliminación de productos del catálogo por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de catálogo
    When selecciona una categoría, selecciona la acción de eliminar y confirma la eliminación
    Then el producto se elimina correctamente de la base de datos

  Scenario: Modificación de información de productos del catálogo por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de catálogo
    When selecciona una categoría, selecciona la acción de actualizar, llena el formulario de producto y lo envía
    Then el producto se modifica correctamente en la base de datos

  Scenario: Generación de reportes por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de reportes
    When selecciona el tipo de reporte, llena el formulario de parámetros y lo envía
    Then el sistema genera y muestra el reporte correctamente

  Scenario: Visualización de estadísticas por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de estadísticas
    When selecciona la sección de estadísticas
    Then las estadísticas generales se muestran correctamente

  Scenario: Configuración del perfil del administrador
    Given el administrador ha ingresado al sistema y está en la sección de perfil
    When edita la información del perfil y guarda los cambios
    Then la información del perfil se modifica correctamente
