Feature: Testing about us section

  Scenario: Visualización de la sección "Sobre nosotros"
    Given el visitante ha ingresado a la página web
    When selecciona la opción "sobre nosotros" en el menú principal
    Then la página de información del negocio se muestra correctamente
