'use strict';

module.exports = {
  experimental: {
    static_export: {
      script_replacement: '<script id="after_static_js"></script>',
      window_routes_variable: 'AFTER_STATIC_ROUTES',
      window_routes_data_variable: 'AFTER_STATIC_DATA_ROUTES',
    },
  },
};
