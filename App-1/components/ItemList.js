import React, { useState } from "react";
import { 
  View, 
  Text, 
  Switch, 
  Pressable,
  StyleSheet,
} from "react-native";

const ItemList = (props) => {
    const [isFinish, setIsFinish] = useState(false);
    const handleAction = () => {setIsFinish(!isFinish)}
    return (
      <View>
        <Text>{props.title}</Text>
        <View>
            <View>
              <Pressable onPress={() => props.onDelete(props.id)}>
                <Text>DELETE</Text>
              </Pressable>
            </View>
            
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isFinish ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleAction}
              value={isFinish}
            />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({ 
  container: {
    display: 'flex',
    flexDirection:'row',
    borderWidth: 1,
    backgroundColor: '#ced4f5',
    marginTop: 20,
  },
  deleteBtn: {
    cursor: 'pointer',
    borderColor: 'green'
  }
}); 

export default ItemList