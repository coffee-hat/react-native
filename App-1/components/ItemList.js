import React, { useState } from "react";
import { Center, Box, Heading, Button, ButtonText, Switch, InputField } from "@gluestack-ui/themed";
//import { } from "react-native";

const ItemList = (props) => {
    const [isFinish, setIsFinish] = useState(false);
    const handleAction = () => {setIsFinish(!isFinish)}
    return (
        <Center bg="$primary500" h={100} w={300} borderRadius='$md' marginTop={16}>
            <Heading>{props.title}</Heading>
            <Box>
                <Button
                    marginTop={4}
                    size="md" 
                    variant="solid" 
                    action="negative"
                    onPress={() => props.onDelete(props.id)}
                >
                    <ButtonText>DELETE</ButtonText>
                </Button>

                <Switch 
                    size="md"
                    marginTop={4}
                    marginBottom={4}
                    marginLeft={25}
                    onValueChange={handleAction}
                    value={isFinish}
                />
            </Box>
        </Center>
    );
}
export default ItemList