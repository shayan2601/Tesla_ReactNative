import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faFan,
  faKey,
  faLock,
  faToolbox,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/index";

const CarItem = () => {
  const [locked, setLocked] = useState(false);

  const lockUnlock = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* Headers */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon size={24} style={styles.icon} icon={faCog} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Tesla Model 3</Text>

        <TouchableOpacity>
          <FontAwesomeIcon size={24} style={styles.icon} icon={faToolbox} />
        </TouchableOpacity>
      </View>
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>

      {/* status */}

      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      <ScrollView>
        {/* control items */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlButton}>
              <FontAwesomeIcon size={24} style={styles.icon} icon={faFan} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlButton}>
              <FontAwesomeIcon size={24} style={styles.icon} icon={faKey} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={lockUnlock}>
            <View style={styles.controlButton}>
              <FontAwesomeIcon
                size={24}
                style={styles.icon}
                icon={locked ? faLock : faUnlock}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
};
export default CarItem;
