import { Pressable, StyleSheet, Text, View } from 'react-native'

function ToDoItem({ id, text, onDeleteItem }) {
  return (
    <View style={styles.toDoItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.toDoText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  toDoItem: {
    borderRadius: 6,
    margin: 8,
    backgroundColor: '#5e0acc',
  },
  toDoText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
})

export default ToDoItem
