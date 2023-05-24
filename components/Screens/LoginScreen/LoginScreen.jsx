import {
	ImageBackground,
  Keyboard,
  KeyboardAvoidingView, 
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
  TouchableWithoutFeedback, 
	View,
} from "react-native";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);
  
  const keyboardHidden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState)
  };

  const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
  
  return (
		<TouchableWithoutFeedback onPress={keyboardHidden}>   
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
          source={require("../../../assets/images/bg-photo.jpg")}
        > 
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{...styles.form, paddingBottom: isShowKeyboard ? 0 : 111}}>
              <Text style={[styles.header]}>
                Увійти
              </Text>
              <View style={{ marginTop: 32 }}>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={isFocusedEmail ? styles.inputFocused : styles.input}
                  onChange={() => setIsFocusedEmail(true)}
                  value={state.email}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                  onFocus={() => setIsShowKeyboard(true)}
                />       
              </View>
              <View style={{ marginTop: 16, position: 'relative' }}> 
                <TextInput
                  placeholder="Пароль"
                  style={isFocusedPassword ? styles.inputFocused : styles.input}
                  onChange={() => setIsFocusedPassword(true)}
                  secureTextEntry={!showPassword}
                  value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <View style={styles.showPassword}>
                  <TouchableOpacity title="show" onPress={togglePasswordVisibility}>
                    <Text style={{color:'#1B4371'}}>{showPassword ? 'Сховати' : 'Показати'}</Text>
                  </TouchableOpacity>
                </View>       
              </View>
              <TouchableOpacity style={styles.btn} title={"Login"} onPress={keyboardHidden}>
                <Text style={{ color: '#fff' }} >
                  Увійти
                </Text>
              </TouchableOpacity>
              <Text
                style={styles.logInText}
                onPress={() => navigation.navigate("Registration")}>
                  Немає аккаунта? Зареєструватися
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground> 
			</View>
    </TouchableWithoutFeedback>         
  )
}

const styles = StyleSheet.create({
  container: {
		position: 'relative',    
		flex: 1,
    backgroundColor: "#fff",
	},
	
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  
  form: { 
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    zIndex: 30
  },
  
  input: {   
    backgroundColor: '#F6F6F6', 
    gap: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 50,
    color: '#BDBDBD',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  inputFocused: {
    height: 50,
    gap: 16,
    paddingLeft: 16,
    backgroundColor: '#fff',
    color: '#212121',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
    borderRadius: 8,
  },

  inputTitle: {
    color: "#f0f8ff",
  },
  
  text: {
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16
  },

  header: {   
    marginTop: 32,
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  
  showPassword: {
    top: 16,
    left: 275,
		position: 'absolute',
		flexDirection: 'row',
    alignItems: 'center'
	},
	
	btn: {
    height: 51,
    paddingTop: 16,
    marginTop: 40,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16,
  },  

  logInText: {
    color: "#1B4371",
    textAlign: 'center',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
}); 