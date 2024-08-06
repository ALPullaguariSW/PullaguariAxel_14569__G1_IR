Feature: Testing insert news in news section

  Scenario: Inserción de noticias en la seccion de noticias por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de noticias
    When selecciona la acción de añadir, llena el formulario de noticia y lo envía
    Then la noticia se ingresa correctamente en la base de datos
