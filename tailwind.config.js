module.exports = {
  content: [
    './dist/*.html'
  ],
  theme: {
    extend: {
      colors:{
       "bkpurple" :"#5267DF",
       "bkred"   :"#FA5959",
       "bkblue"  :"#242A45",
       "bkgrey"  :"#9194A2",
       "bkwhite" :"#f7f7f7",
      },
    },
    

    fontFamily:{
      Poppins: ["Poppins, sans-serif"],
    },

    container: {
      center:true, 
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        '2xl': "1124px",
      },
    },
  },
  plugins: [],
}
