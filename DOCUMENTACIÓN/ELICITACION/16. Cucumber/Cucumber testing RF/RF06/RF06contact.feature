Feature: Testing send email in contact section
  Scenario: Envío de correos desde la sección de contacto
    Given el visitante ha ingresado a la página web y está en la sección de contacto
    When llena el formulario de envío y lo envía
    Then el correo se envía correctamente y se muestra un mensaje de éxito
