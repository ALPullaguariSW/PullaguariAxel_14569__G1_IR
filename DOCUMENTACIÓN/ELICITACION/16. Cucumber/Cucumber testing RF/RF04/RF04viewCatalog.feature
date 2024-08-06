Feature: Testing view in catalog section
  Scenario: Visualización de la sección de catálogo
    Given el visitante ha ingresado a la página web
    When selecciona la opción "catálogo" en el menú principal
    Then las categorías de productos se muestran correctamente
    And el visitante puede seleccionar una categoría y ver los productos disponibles