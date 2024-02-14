import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    Switch, 
    FlatList, 
    StyleSheet,
    Pressable,
} from "react-native";

import ItemList from './components/ItemList'

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [tasks, setTasks] = useState([]);

  const theme = useTheme();

  const handleAddTask = () => {
    if (inputValue) { 
      // Add new task
      const createdTask = {id: editIndex, title: inputValue, isFinished: false}
      setTasks([...tasks, createdTask]);

      const newIndex = editIndex + 1
      setEditIndex(newIndex);
    
      setInputValue("");
    } 
  }; 

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id != id);
    setTasks(updatedTasks);
  };
  
  return (
      <View> 
          <Text style={styles.title}>ToDo App</Text>

          <TextInput 
              style={styles.input} 
              placeholder="Enter task"
              value={inputValue} 
              onChangeText={(text) => setInputValue(text)} 
          />

          <Pressable 
              style={styles.addButton} 
              onPress={handleAddTask}> 
              <Text style={styles.addButtonText}> 
                  {"Add Task"} 
              </Text> 
          </Pressable> 

          <FlatList
              data={tasks} 
              renderItem={({item})  => <ItemList onDelete={handleDeleteTask} id={item.id} title={item.title}/>} 
              keyExtractor={(item) => item.id}
          /> 
      </View>
  ); 
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 40, 
  },
  title: {
    marginTop: 40,
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
  },
  addButton: {

  },
  addButtonText: {

  },
}); 