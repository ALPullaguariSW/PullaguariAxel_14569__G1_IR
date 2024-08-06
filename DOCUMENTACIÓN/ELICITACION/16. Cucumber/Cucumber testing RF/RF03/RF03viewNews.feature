Feature: Testing news section
  Scenario: Visualización de la sección de noticias
    Given el visitante ha ingresado a la página web
    When selecciona la opción "noticias" en el menú principal
    Then las tres noticias recientes se muestran correctamente
