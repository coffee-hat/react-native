import { StyleSheet, Text, View } from 'react-native';

const City = (props) => {
    return (
        <View style={styles.container}>
            <Text>{ props.city.name }</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        
    },
  });

export default City;