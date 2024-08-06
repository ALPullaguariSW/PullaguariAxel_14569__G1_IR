Feature: Testing insert products in catalog

  Scenario: Inserción de productos en el catálogo por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de catálogo
    When selecciona una categoría, selecciona la acción de añadir, llena el formulario de producto y lo envía
    Then el producto se ingresa correctamente en la base de datos
