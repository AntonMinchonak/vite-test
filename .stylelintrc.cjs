// const propertyGroups = require('stylelint-config-recess-order/groups');
const customPropertyGroups = [
  {
    properties: ['content', 'quotes'],
  },
  {
    properties: ['visibility', 'opacity'],
  },
  {
    properties: ['display', 'position', 'top', 'right', 'bottom', 'left', 'z-index'],
  },
  {
    emptyLineBefore: 'always',
    properties: ['float', 'clear'],
  },
  {
    properties: ['box-sizing'],
  },
  {
    properties: ['cursor'],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'justify-items',
      'justify-self',
      'order',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'grid',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'grid-template-rows',
      'grid-template-columns',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-span',
      'column-count',
      'column-width',
    ],
  },
  {
    emptyLineBefore: 'always',
    properties: [
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
    ],
  },
  {
    properties: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  },
  {
    properties: ['overflow', 'overflow-x', 'overflow-y', 'resize'],
  },
  {
    properties: [
      'outline',
      'outline-offset',
      'outline-width',
      'outline-style',
      'outline-color',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-image',
      'border-image-source',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
    ],
  },
  {
    properties: ['box-shadow'],
  },
  {
    properties: [
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-repeat',
      'background-size',
    ],
  },
  {
    properties: [
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'caption-side',
    ],
  },
  {
    properties: ['table-layout', 'border-collapse', 'border-spacing', 'empty-cells'],
  },

  {
    properties: ['vertical-align'],
  },
  {
    properties: [
      'direction',
      'tab-size',
      'text-align',
      'text-align-last',
      'text-justify',
      'text-indent',
      'text-transform',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-style',
      'text-rendering',
      'text-shadow',
      'text-overflow',
    ],
  },
  {
    properties: [
      'font',
      'font-family',
      'font-size',
      'font-size-adjust',
      'font-stretch',
      'font-weight',
      'font-smoothing',
      'osx-font-smoothing',
      'font-variant',
      'font-style',
    ],
  },
  {
    properties: [
      'line-height',
      'word-spacing',
      'letter-spacing',
      'white-space',
      'word-break',
      'word-wrap',
      'color',
    ],
  },
  {
    properties: ['counter-reset', 'counter-increment'],
  },
  {
    properties: ['page-break-before', 'page-break-after', 'page-break-inside'],
  },
  {
    properties: [
      'backface-visibility',
      'perspective',
      'perspective-origin',
      'transform',
      'transform-origin',
      'transform-style',
    ],
  },
  {
    properties: [
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
    ],
  },
  {
    properties: [
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',
    ],
  },
];

module.exports = {
  // plugins: ['stylelint-selector-bem-pattern'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-clean-order',
    'stylelint-config-recess-order',
  ],
  rules: {
    // Change all Prettier reported things to warnings.
    'prettier/prettier': [true, { severity: 'warning' }],
    // TODO: figure out if we need this order/order rule and if we can use order from
    // stylelint-config-clean-order.
    // 'order/order': [
    //     [
    //         'dollar-variables',
    //         'custom-properties',
    //         {
    //             type: 'at-rule',
    //             name: 'extend',
    //         },
    //         {
    //             type: 'at-rule',
    //             name: 'include',
    //         },
    //         {
    //             type: 'at-rule',
    //             name: 'mixin',
    //         },
    //         {
    //             type: 'at-rule',
    //             name: 'include',
    //             hasBlock: false,
    //         },
    //         'declarations',
    //         {
    //             type: 'at-rule',
    //             name: 'include',
    //             hasBlock: true,
    //         },
    //         'rules',
    //         {
    //             type: 'at-rule',
    //             name: 'media',
    //             hasBlock: true,
    //         },
    //     ],
    // ],
    'order/order': null,
    // Configure groups from 'stylelint-config-recess-order'.
    // 'order/properties-order': propertyGroups.map((group) => ({
    //     ...group,
    //     emptyLineBefore: 'always',
    //     noEmptyLineBetween: true,
    // })),
    // Use custom property groups.
    'order/properties-order': customPropertyGroups.map((group) => ({
      ...group,
      noEmptyLineBetween: true,
    })),
    // Custom rules not included into configs we extend.
    'at-rule-disallowed-list': ['debug', { message: (rule) => `Remove "${rule}" rule` }],
    'color-named': 'never',
    'max-nesting-depth': 4,
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 1,
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
    'property-no-vendor-prefix': [
      true,
      {
        // TODO: enable autofix later on; after checking that it works fine.
        disableFix: true,
      },
    ],
    // TODO: figure out if we need this plugin and rule.
    // 'plugin/selector-bem-pattern': {
    //   componentName: '[A-Z]+',
    //   componentSelectors: {
    //     initial: '^\\.{componentName}(?:-[a-z]+)?$',
    //     combined: '^\\.combined-{componentName}-[a-z]+$',
    //   },
    //   utilitySelectors: '^\\.util-[a-z]+$',
    // },
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'no-empty-source': null,
      },
    },
  ],
};
