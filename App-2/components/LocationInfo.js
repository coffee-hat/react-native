import { StyleSheet, Text, View } from 'react-native';

const LocationInfo = (props) => {
    
    return (
        <View style={styles.container}>
            { props.location ? 
                <View>
                    <View style={styles.info}>
                        <Text>{ props.location.name }</Text>
                        <Text>{ props.location.country }</Text>
                    </View>
                    <View style={styles.coord}>
                        <Text>{ props.location.coord.lat }</Text>
                        <Text>{ props.location.coord.lon }</Text>
                    </View>
                </View>
            :   <Text>Data Loading ...</Text>}
            
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        maxHeight: '5em',
        gap:'2em',
        borderBottomWidth: '1px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
        flexDirection: 'row',
        gap: '1em',
        fontWeight: 'bold',
    },
    coord: {
        marginTop: '0.5em',
        color: 'gainsboro',
    }
  });

export default LocationInfo;