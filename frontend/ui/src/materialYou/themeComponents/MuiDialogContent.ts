import { Theme } from '@mui/material'
import { Components } from '@mui/material/styles'

export const MuiDialogContent: Components<Theme>['MuiDialogContent'] = {
  styleOverrides: {
    root: {
      padding: '0 24px',
    },
  },
}
