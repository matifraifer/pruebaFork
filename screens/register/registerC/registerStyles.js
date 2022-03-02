import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   logo: {
       width: 170,
       height: 170,
       marginTop: 30,
       marginBottom: 16
   },
   finputContainer: {
    flexDirection: 'row',
   },
   containerInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 18,
    marginLeft: 2
   },
   input: {
    width: 90,
    height: 40,
    justifyContent: "center",
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 14,
    paddingLeft: 10,
  },
  bText: {
    color: 'white',
    marginRight: 30
  },
  birthdayImage: {
    // marginRight: 5
    marginLeft: 6
  },
  userILn: {
      opacity: 0.3
  },
  containerB: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  containerLargeI: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 18,
    marginTop: 12
  },
  largeInput: {
    width: 240,
    height: 40,
    justifyContent: "center",
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 14,
    paddingLeft: 10,
  },
  containerLargeIC: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 18,
  },    
  characters: {
      color: 'white',
      opacity: 0.5,
      fontSize: 9,
      position: 'relative',
      left: 100
  },
  allContainerP:{
      flexDirection: 'row'
  },
  numberInputCon:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 18,
    marginTop: 12,
    marginRight: 2
  },
  containerPhoneCon: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    paddingHorizontal: 18,
    marginTop: 12
  },
  numberInput: {
    width: 55,
    height: 40,
    justifyContent: "center",
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 14,
    paddingLeft: 10,
  },
  phoneInput: {
    width: 142,
    height: 35,
    justifyContent: "center",
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 14,
    paddingLeft: 10,
  },
  button: {
      backgroundColor: '#DCCB33',
      marginTop: 50,
      width: 287,
      height: 43,
      borderRadius: 21.5,
      justifyContent: 'center'
  },
  textButton: {
      textAlign: 'center',
      fontWeight: '700',
      color: '#FFFFFF'
  },
  acountText: {
      fontSize: 12,
      color: '#FFFFFF',
      marginTop: 15,
      textDecorationLine: 'underline'
  },
  seeEye: {
    opacity: 0.15
  },
  phoneImage: {
    opacity: 0.3
  }
})

export default styles;