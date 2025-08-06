// generator.config.js
module.exports = {
  templatesDir: './templates',
  outputDir: './src/modules',

  // Define templates and their configurations
  templates: {
    module: {
      extension: 'module.ts',
      required: true
    },
    controller: {
      extension: 'controller.ts',
      required: true
    },
    service: {
      extension: 'service.ts',
      required: true
    },
    'create-dto': {
      extension: 'dto.ts',
      required: false,
      outputPath: 'dto',
      filename: 'create-{{moduleName}}.dto.ts'
    },
    'update-dto': {
      extension: 'dto.ts',
      required: false,
      outputPath: 'dto',
      filename: 'update-{{moduleName}}.dto.ts'
    },
    schema: {
      extension: 'schema.ts',
      required: false,
      outputPath: 'schema',
      filename: '{{moduleName}}.schema.ts'
    },
    // You can add more templates like:
    // 'entity': {
    //   extension: 'entity.ts',
    //   required: false,
    //   outputPath: 'entities',
    //   filename: '{{moduleName}}.entity.ts'
    // },
    // 'repository': {
    //   extension: 'repository.ts',
    //   required: false,
    //   outputPath: 'repositories',
    //   filename: '{{moduleName}}.repository.ts'
    // }
  },

  // Define which modules should exclude specific templates
  exclusions: {
    'create-dto': ['auth', 'payments'],
    'update-dto': ['auth', 'payments'],
    'schema': ['auth', 'sidebar'],
    // 'entity': ['auth'],
    // 'repository': ['sidebar']
  },

  // Predefined modules for batch generation
  batchModules: [
    'auth',
    'users',
    'products',
    'brands',
    'categories',
    'orders',
    'carts',
    'payments',
    'discounts',
    'inventory',
    'sidebar'
  ]
};