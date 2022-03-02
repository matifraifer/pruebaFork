import { TextInput, StyleSheet } from "react-native";

const NumberInput = ({ref, value, onChangeText, onSelectionChange}) =>{
    return(
        <TextInput
        ref={ref}
        style={styles.input}
        maxLength={1}
        value={value}
        keyboardType={"numeric"}
        onChangeText={onChangeText}
        onSelectionChange={onSelectionChange}
      />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 40,
        height: 51,
        backgroundColor: "white",
        borderRadius: 6,
        marginHorizontal: 15,
        marginBottom: 75,
        textAlign: "center",
        padding: 10,
        fontSize: 22,
      },
})
export default NumberInput