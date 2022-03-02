import React, { useState } from "react";
import {
  View,
  Model,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

const Datepick = (props) => {
  const { textStyle, onDateChange } = props;
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
  };
  const handleCancel = () => {
    setDate(moment(new Date()));
    setShow(false);
  };
  const handleDone = () => {
    onDateChange(date);
    setShow(false);
  };

  return (
    <TouchableOpacity onPress={() => setShow(true)}>
      <View style={{backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 17, height: 40, width: 180}}>
        <Text
          style={{
            borderRadius: 17,
            padding: 5,
            color: 'white',
            height: 40,
            textAlignVertical: 'center',
            textAlign: 'center'
          }}
        >
          {date.format("DD/MM/YYYY")}
        </Text>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={["portrait"]}
          onRequestClose={() => {
            alert("NONONO");
            setShow(false);
          }}
          style={{ borderRadius: 6 }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "flex-end",
                flexDirection: "row",
              }}
              visible={show}
              onPress={() => setShow(false)}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginHorizontal: 20,
                  borderRadius: 6,
                  borderTopColor: "#e9e9e9",
                  borderTopWidth: 1,
                }}
                onPress={() => {
                  console.log("clickeeedddd");
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 6,
                    overflow: "hidden",
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <DateTimePicker
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      value={new Date(date)}
                      mode={"date"}
                      maximumDate={new Date(2024, 11, 31)}
                      onChange={onChange}
                      locale="es-ES"
                    />
                  </View>

                  <TouchableOpacity
                    style={[styles.btnText, styles.btnCancel]}
                    onPress={handleCancel}
                  >
                    <Text> Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btnText, styles.btnDone]}
                    onPress={handleDone}
                  >
                    <Text> Done</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

Datepick.defaultProps = { textStyle: {}, onDateChange: () => {} };

const styles = StyleSheet.create({
  btnText: {
    position: "absolute",
    top: 0,
    height: 42,
    paddingHorizontal: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});

export default Datepick;
