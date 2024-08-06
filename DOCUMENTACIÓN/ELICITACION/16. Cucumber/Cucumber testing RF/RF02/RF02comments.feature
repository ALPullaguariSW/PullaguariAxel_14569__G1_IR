Feature: Testing comments section

  Scenario: Visualización de la sección de comentarios
    Given el visitante ha ingresado a la página web
    When selecciona la opción "comentarios" en el menú principal
    Then los comentarios de los visitantes se muestran correctamente
    And el visitante puede añadir un nuevo comentario exitosamente
