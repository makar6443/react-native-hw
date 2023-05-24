import { SvgXml } from "react-native-svg";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

import { uploadIcon } from "../assets/icons/icons/";

export const Avatar = () => {
  return (
    <View style={styles.avatarThumb}>
      <Image
        // source={require("../assets/images/user.jpg")}
        style={styles.userAvatar}
      ></Image>
      <TouchableOpacity>
        <View style={styles.userAvatarButton}>
          <SvgXml
            xml={uploadIcon}
            width={25}
            height={25}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarThumb: {
    position: "relative",
    marginTop: -75,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 40,
  },
  userAvatar: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  userAvatarButton: {
    position: "absolute",
    width: 25,
    height: 25,
    top: -40,
    left: 107,
  },
});