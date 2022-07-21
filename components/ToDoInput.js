import { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

function ToDoInput({ visible, onAddToDo, onCancel }) {
  const [enteredToDo, setEnteredToDo] = useState('')

  function toDoInputHandler(enteredText) {
    setEnteredToDo(enteredText)
  }

  function addToDoHandler() {
    onAddToDo(enteredToDo)
    setEnteredToDo('')
  }

  function cancelHandler() {
    setEnteredToDo('')
    onCancel()
  }

  return (
    <Modal visible={visible} animation="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="another task I have to do!"
          onChangeText={toDoInputHandler}
          value={enteredToDo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandler} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addToDoHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})

export default ToDoInput
