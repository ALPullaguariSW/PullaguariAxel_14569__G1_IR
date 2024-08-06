Feature: Testing search in catalog section
  Scenario: Búsqueda de productos en el catálogo
    Given el visitante ha ingresado a la página web y está en la sección de catálogo
    When ingresa texto de búsqueda y realiza la búsqueda
    Then los productos coincidentes se muestran correctamente
