// generator.config.js
module.exports = {
  templatesDir: './templates',
  outputDir: './src/modules',

  // Define templates and their configurations
  templates: {
    module: {
      extension: 'module.ts',
      required: true,
    },
    controller: {
      extension: 'controller.ts',
      required: true,
    },
    service: {
      extension: 'service.ts',
      required: true,
    },
    'create-dto': {
      extension: 'dto.ts',
      required: false,
      outputPath: 'dto',
      filename: 'create-{{singularName}}.dto.ts',
    },
    'update-dto': {
      extension: 'dto.ts',
      required: false,
      outputPath: 'dto',
      filename: 'update-{{singularName}}.dto.ts',
    },
    schema: {
      extension: 'schema.ts',
      required: false,
      outputPath: 'schema',
      filename: '{{singularName}}.schema.ts', // Now uses singular name
    },
    // You can add more templates like:
    // 'entity': {
    //   extension: 'entity.ts',
    //   required: false,
    //   outputPath: 'entities',
    //   filename: '{{singularName}}.entity.ts'
    // },
    // 'repository': {
    //   extension: 'repository.ts',
    //   required: false,
    //   outputPath: 'repositories',
    //   filename: '{{singularName}}.repository.ts'
    // }
  },

  // Define which modules should exclude specific templates
  exclusions: {
    'create-dto': ['auth'],
    'update-dto': ['auth'],
    schema: ['auth'],
    // 'entity': ['auth'],
    // 'repository': ['sidebar']
  },

  // Predefined modules for batch generation
  batchModules: [
    'users',
    'user_preferences',
    'articles',
    'checklists',
    'categories',
    'tags',
    'comments',
    'questions',
    'answers',
    'testimonials',
    'roles',
    'permissions',
  ],
};