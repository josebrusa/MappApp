
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/Styles';
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {

    const { locationStatus, requestLocationPermission } = usePermissionStore()


    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Habilitar ubicación</Text>
            <Pressable
                style={globalStyles.btnPrimary}
                onPress={requestLocationPermission}
            >
                <Text style={globalStyles.btnText}>
                    Habilitar Localización
                </Text>
            </Pressable>

            <Text>
                Estado actual: {locationStatus}
            </Text>
        </View>
    );
}
