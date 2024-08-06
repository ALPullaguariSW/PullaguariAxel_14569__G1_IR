Feature: Testing delete product in catalog

  Scenario: Eliminación de productos del catálogo por el administrador
    Given el administrador ha ingresado al sistema y está en la sección de catálogo
    When selecciona una categoría, selecciona la acción de eliminar y confirma la eliminación
    Then el producto se elimina correctamente de la base de datos
