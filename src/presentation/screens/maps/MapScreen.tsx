import { StyleSheet, View } from 'react-native';
import { Map } from '../../components/maps/Map';
import { useLocationStore } from '../../store/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';
import { useEffect } from 'react';

export const MapScreen = () => {

    const { lastKnowLocation, getLocation } = useLocationStore();

    if (!lastKnowLocation) return (<LoadingScreen />);

    useEffect(() => {
        if (lastKnowLocation === null) {
            getLocation();
        }
    }, [])

    return (
        <View style={style.container}>
            <Map
                initialLocation={lastKnowLocation}
            />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    }
})
