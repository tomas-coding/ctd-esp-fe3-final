const themeObject = {
    dark:{
        palette: {
            type: 'dark',
            primary: {
              main: '#3f54b5',
              light: '#6572c3',
              dark: '#2c347e',
              contrastText: '#ffffff',
            },
            secondary: {
              main: '#ffffff',
            },
            text: {
              primary: 'rgba(255, 255, 255, 0.99)',
            },
            background: {
              default: 'rgba(48, 48, 48, 0.98)',
              paper: 'rgba(66, 66, 66, 0.98)',
            },
          },
          components: {
            MuiInputLabel: {
              styleOverrides: {
                root: {
                  color: '#ffffff', // Color blanco para las etiquetas de los inputs
                },
              },
            },
            MuiInput: {
              styleOverrides: {
                root: {
                  color: '#ffffff', // Color blanco para el texto de los inputs
                  borderColor: '#ffffff', // Color blanco para los bordes de los inputs
                },
              },
            },
          },
          
        }
      ,
    light:{palette: {
        type: 'light',
        primary: {
            main: '#6572c3',
        },
        secondary: {
          main: '#ffffff'
        },
        gradient:
          'linear-gradient(to left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark))',
        border: {
          subtle: 'var(--mui-palette-neutral-200)',
        },

      },}
}
export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_DENTISTS': 
            return {...state, dentists: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV': 
        return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)}
        case 'CHANGE_THEME': 
        return {...state, theme: action.payload == "light" ? themeObject.dark:themeObject.light}
        default:
            return state;    
    }
}