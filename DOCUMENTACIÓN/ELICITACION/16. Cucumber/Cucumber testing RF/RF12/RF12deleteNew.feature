Feature: Testing delete new in news section

  Scenario: Eliminación de noticias de la seccion de noticias por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de noticias
    When selecciona una noticia, selecciona la acción de eliminar y confirma la eliminación
    Then la noticia se elimina correctamente de la base de datos
