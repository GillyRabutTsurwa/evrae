import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {DesktopIcon} from '@sanity/icons'
import {colorInput} from '@sanity/color-input'
import {codeInput} from '@sanity/code-input'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'evrae',

  projectId: 'gpcnr09p',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    colorInput(),
    presentationTool({
      previewUrl: {
        origin: 'https://localhost:3000',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
  ],
  icon: DesktopIcon,

  schema: {
    types: schemaTypes,
  },
})
