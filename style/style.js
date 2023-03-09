import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#8B0000',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
      },
      buttonTitle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
      },
      content: {
        flex: 1,
        backgroundColor: '#262625',
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        paddingTop: 30,
      },
      forgotPasswordContainer: {
        alignItems: 'flex-end',
      },
      form: {
        alignItems: 'center',
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        paddingHorizontal: 16,
      },
      label: {
        color: 'rgba(235, 235, 245, 0.6)',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        width: 80,
      },
      container: {
        flex: 1,
        backgroundColor: '#262625',
        justifyContent: "flex-start",
        
      },
      subtitle: {
        color: 'rgba(235, 235, 245, 0.6)',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
      },
      textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
      },
      textInput: {
        color: '#FFFFFF',
        flex: 1,
        fontSize: 16,
      },
      title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 34,
      },
      welcomeView: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        width: 120,
        height: 50,
      },
      logoView:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
      }
  });

  export default styles;