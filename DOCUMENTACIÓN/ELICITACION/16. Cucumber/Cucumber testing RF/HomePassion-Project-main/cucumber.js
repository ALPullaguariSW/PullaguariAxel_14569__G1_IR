module.exports = {
  default: {
    require: ['features/step_definitions/**/*.js'],
    format: ['json:cucumber_report.json'], // Configuración para generar el archivo JSON
    snippets: true, // Habilitar los snippets
  },
};
