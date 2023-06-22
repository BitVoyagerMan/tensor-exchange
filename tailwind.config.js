module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {  
    container: {
      'center': true,
      screens: {
        'xxl' : {'min' : '1400px'},
        'xl' : {'min' : '1200px'},
        'lg' : {'min' :  '992px'},
        'md' : {'min' : '768px'},
        'sm' : {'min' : '576px'}
      }

      
    },
  
    
  },
  variants: {},
  plugins: [],
}

