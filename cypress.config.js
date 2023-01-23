const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  pageLoadTimeout: 9000, //Tiempo de carga de la página al inicio
  defaultCommandTimeout: 15000, //Tiempo de espera (Tiene hasta 15s para cargar el elemento para todos los proyectos aqui es general)
  
  e2e: {
    async setupNodeEvents(on, config) {
      // Esto agrega el cucumber preprocesor a la serie de configuraciones
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature"
  }
})