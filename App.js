import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import ToDoItem from './components/ToDoItem'
import ToDoInput from './components/ToDoInput'

export default function App() {
  const [toDos, setToDos] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  function startAddToDoHandler() {
    setModalVisible(true)
  }

  function endAddToDoHandler() {
    setModalVisible(false)
  }

  function addToDoHandler(newToDo) {
    if (newToDo) {
      setToDos((currentToDos) => [
        ...currentToDos,
        { text: newToDo, key: Math.random().toString() },
      ])
    }
    setModalVisible(false)
  }

  function deleteToDoHandler(id) {
    setToDos((currentToDos) => currentToDos.filter((g) => g.key !== id))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New To Do Task"
          color="#a065ec"
          onPress={startAddToDoHandler}
        />
        <ToDoInput
          visible={modalVisible}
          onAddToDo={addToDoHandler}
          onCancel={endAddToDoHandler}
        />
        <View style={styles.toDosContainer}>
          {toDos.length > 0 && <Text style={styles.toDoTitle}>To Do List</Text>}
          <FlatList
            data={toDos}
            renderItem={(itemData) => {
              return (
                <ToDoItem
                  id={itemData.item.key}
                  text={itemData.item.text}
                  onDeleteItem={deleteToDoHandler}
                />
              )
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1, // app container takes all available height
    // background color set in app.json ... backgroundColor: '#1e085a',
  },
  toDosContainer: {
    flex: 4,
  },
  toDoTitle: {
    color: '#fff',
    fontWeight: '700',
  },
})
