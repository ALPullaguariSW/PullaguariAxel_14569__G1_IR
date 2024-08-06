Feature: Testing update product in catalog

  Scenario: Modificación de información de productos del catálogo por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de catálogo
    When selecciona una categoría, selecciona la acción de actualizar, llena el formulario de producto y lo envía
    Then el producto se modifica correctamente en la base de datos
