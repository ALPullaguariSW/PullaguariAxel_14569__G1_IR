Feature: Testing update new in new section

  Scenario: Modificación de información de noticia del la seccion de noticias por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de noticias
    When selecciona una noticia, selecciona la acción de actualizar, llena el formulario de noticia y lo envía
    Then la noticia se modifica correctamente en la base de datos
