// https://docs.expo.dev/guides/using-eslint/
import { fileURLToPath } from 'url';
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const path = require('path');

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

module.exports = defineConfig([
  ...expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: path.join(__dirname, 'tsconfig.json'),
        },
        node: {
          paths: [__dirname],  // Lookup from project root
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }        
      }
    }
  }
]);
