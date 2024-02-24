import { GluestackUIProvider, Center, Box, Heading, Button, ButtonText, Input, InputField } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import React, { useState } from "react"; 
import { FlatList } from "react-native";

import ItemList from './components/ItemList'

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [tasks, setTasks] = useState([]);

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
        <GluestackUIProvider config={config}>
            <Box bg="$primary100" flex={1}>

                <Center bg="$primary200" h={200}>
                    <Heading>TODO APP</Heading>

                    <Input
                        variant="outline"
                        size="md"
                        marginTop={16}
                        >
                        <InputField 
                            type="text"
                            value={inputValue} 
                            onChangeText={setInputValue}
                            placeholder="Enter task" />
                    </Input>

                    <Button
                        size="md"
                        variant="solid"
                        action="primary"
                        marginTop={16}
                        onPress={handleAddTask}
                        > 
                        <ButtonText>Add Task</ButtonText> 
                    </Button>
                </Center >

                <Center h='100%' w='100%'>
                    <FlatList
                        data={tasks} 
                        renderItem={({item})  => <ItemList onDelete={handleDeleteTask} id={item.id} title={item.title}/>} 
                        keyExtractor={(item) => item.id}
                    />
                </Center>
            </Box>
        </GluestackUIProvider>
    ); 
}